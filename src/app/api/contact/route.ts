import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import ContactFormEmail from '@/emails/ContactFormEmail';
import ConfirmationEmail from '@/emails/ConfirmationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, locale } = await request.json();

    // Validaciones básicas
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar longitud de campos
    if (name.length > 100) {
      return NextResponse.json(
        { error: 'El nombre es demasiado largo' },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: 'El mensaje es demasiado largo' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      );
    }

    // Sanitizar datos de entrada
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    };

    // Verificar que las variables de entorno estén configuradas
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY no está configurada');
      return NextResponse.json(
        { error: 'Configuración del servidor incompleta' },
        { status: 500 }
      );
    }

    if (!process.env.OWNER_EMAIL) {
      console.error('OWNER_EMAIL no está configurada');
      return NextResponse.json(
        { error: 'Configuración del servidor incompleta' },
        { status: 500 }
      );
    }

    console.log('📧 Iniciando envío de emails...', { 
      name: sanitizedData.name, 
      email: sanitizedData.email,
      locale,
      timestamp: new Date().toISOString()
    });

    const emailResults = { 
      owner: null as string | null, 
      user: null as string | null, 
      errors: [] as string[] 
    };

    try {
      // Enviar email al propietario (usando dominio personalizado)
      console.log('📨 Enviando email al propietario...');
      const ownerEmailResult = await resend.emails.send({
        from: 'Portfolio <no-reply@santiagobillordo.com>', // Dominio personalizado
        to: [process.env.OWNER_EMAIL],
        subject: `[Santiago Billordo] Nueva consulta de ${sanitizedData.name}`, // Branding personalizado
        react: ContactFormEmail({ 
          name: sanitizedData.name, 
          email: sanitizedData.email, 
          message: sanitizedData.message 
        }),
        // Headers para mejorar entregabilidad
        headers: {
          'X-Entity-Ref-ID': `contact-${Date.now()}`,
          'Reply-To': 'billordo.santiago@gmail.com',
        },
      });

      emailResults.owner = ownerEmailResult.data?.id || null;
      console.log('✅ Email al propietario enviado:', ownerEmailResult.data?.id);

    } catch (ownerError) {
      console.error('❌ Error enviando email al propietario:', ownerError);
      const errorMessage = ownerError instanceof Error ? ownerError.message : 'Unknown error';
      emailResults.errors.push(`Owner email error: ${errorMessage}`);
    }

    // Pequeña pausa entre emails para evitar rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      // Enviar confirmación al usuario (dominio personalizado)
      console.log('📨 Enviando confirmación al usuario...', sanitizedData.email);
      const userEmailResult = await resend.emails.send({
        from: 'Santiago Billordo <santiago@santiagobillordo.com>', // Email personalizado
        to: [sanitizedData.email],
        subject: locale === 'es' 
          ? `[Santiago Billordo] Hemos recibido tu mensaje, ${sanitizedData.name}` 
          : `[Santiago Billordo] We received your message, ${sanitizedData.name}`,
        react: ConfirmationEmail({ 
          name: sanitizedData.name, 
          locale: locale || 'es' 
        }),
        // Headers para mejorar entregabilidad
        headers: {
          'X-Entity-Ref-ID': `confirmation-${Date.now()}`,
          'List-Unsubscribe': '<mailto:no-reply@santiagobillordo.com>',
          'Reply-To': 'santiago@santiagobillordo.com',
        },
      });

      emailResults.user = userEmailResult.data?.id || null;
      console.log('✅ Email de confirmación enviado:', userEmailResult.data?.id);
      console.log('🔍 Debug userEmailResult completo:', JSON.stringify(userEmailResult, null, 2));

    } catch (userError) {
      console.error('❌ Error enviando confirmación al usuario:', userError);
      const errorMessage = userError instanceof Error ? userError.message : 'Unknown error';
      emailResults.errors.push(`User email error: ${errorMessage}`);
    }

    // Evaluar resultado final
    const ownerEmailSent = !!emailResults.owner;
    const userEmailSent = !!emailResults.user;

    if (ownerEmailSent || userEmailSent) {
      // Al menos uno se envió correctamente
      const message = ownerEmailSent && userEmailSent 
        ? 'Ambos emails enviados correctamente'
        : ownerEmailSent 
          ? 'Email al propietario enviado. Problema con confirmación.'
          : 'Solo confirmación enviada. Problema con notificación.';

      console.log('📊 Resultado final:', {
        ownerSent: ownerEmailSent,
        userSent: userEmailSent,
        ownerEmailId: emailResults.owner,
        userEmailId: emailResults.user,
        errors: emailResults.errors
      });

      return NextResponse.json({ 
        success: true, 
        message,
        details: {
          ownerEmailSent,
          userEmailSent,
          ownerEmailId: emailResults.owner,
          userEmailId: emailResults.user,
          errors: emailResults.errors.length > 0 ? emailResults.errors : undefined
        }
      });
    } else {
      // Ninguno se envió
      console.error('❌ No se pudo enviar ningún email');
      return NextResponse.json(
        { 
          error: 'No se pudieron enviar los emails',
          details: emailResults.errors
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('❌ Error general en /api/contact:', error);
    
    // Manejar errores específicos de Resend
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return NextResponse.json(
          { error: 'Error de configuración del servicio de email' },
          { status: 500 }
        );
      }
      
      if (error.message.includes('rate limit')) {
        return NextResponse.json(
          { error: 'Demasiados intentos. Intenta nuevamente en unos minutos.' },
          { status: 429 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Error interno del servidor. Intenta nuevamente.' },
      { status: 500 }
    );
  }
}

// Manejar métodos no permitidos
export async function GET() {
  return NextResponse.json(
    { error: 'Método no permitido' },
    { status: 405 }
  );
} 