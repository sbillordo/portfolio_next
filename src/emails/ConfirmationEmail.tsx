import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Text,
  Hr,
  Section,
} from '@react-email/components';

interface ConfirmationEmailProps {
  name: string;
  locale: 'es' | 'en';
}

export default function ConfirmationEmail({ name, locale }: ConfirmationEmailProps) {
  const messages = {
    es: {
      preview: `${name}, hemos recibido tu consulta`,
      heading: '✅ Consulta recibida correctamente',
      greeting: `¡Hola ${name}!`,
      message1: 'Gracias por ponerte en contacto conmigo. He recibido tu consulta y te responderé a la brevedad.',
      message2: 'Generalmente respondo dentro de las 24-48 horas hábiles.',
      message3: 'Si tu consulta es urgente, también puedes contactarme directamente a través de LinkedIn.',
      signature: 'Saludos cordiales,',
      name: 'Santiago Billordo',
      role: 'Full Stack Developer',
      footer: 'Este es un email automático, por favor no respondas a este mensaje.',
      linkedin: 'https://linkedin.com/in/santiagobillordo',
    },
    en: {
      preview: `${name}, we have received your inquiry`,
      heading: '✅ Inquiry received successfully',
      greeting: `Hello ${name}!`,
      message1: 'Thank you for getting in touch with me. I have received your inquiry and will respond to you shortly.',
      message2: 'I usually respond within 24-48 business hours.',
      message3: 'If your inquiry is urgent, you can also contact me directly through LinkedIn.',
      signature: 'Best regards,',
      name: 'Santiago Billordo',
      role: 'Full Stack Developer',
      footer: 'This is an automated email, please do not reply to this message.',
      linkedin: 'https://linkedin.com/in/santiagobillordo',
    }
  };

  const t = messages[locale];

  return (
    <Html>
      <Head />
      <Preview>{t.preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={heading}>{t.heading}</Text>
          
          <Section style={messageSection}>
            <Text style={greeting}>{t.greeting}</Text>
            <Text style={text}>{t.message1}</Text>
            <Text style={text}>{t.message2}</Text>
            <Text style={text}>{t.message3}</Text>
          </Section>

          <Hr style={hr} />
          
          <Section style={signatureSection}>
            <Text style={signature}>{t.signature}</Text>
            <Text style={authorName}>{t.name}</Text>
            <Text style={role}>{t.role}</Text>
            <Text style={contact}>
              🌐 Portfolio: santiagobillordo.com<br/>
              💼 LinkedIn: {t.linkedin}<br/>
              📧 Email: santiago@santiagobillordo.com
            </Text>
          </Section>

          <Hr style={hr} />
          <Text style={footer}>{t.footer}</Text>
        </Container>
      </Body>
    </Html>
  );
}

// Estilos del email
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '24px',
  marginBottom: '64px',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
};

const heading = {
  fontSize: '28px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '600',
  color: '#059669',
  padding: '0 0 24px 0',
  textAlign: 'center' as const,
};

const messageSection = {
  padding: '24px',
  backgroundColor: '#f0fdf4',
  border: 'solid 2px #10b981',
  borderRadius: '8px',
  margin: '16px 0',
};

const signatureSection = {
  padding: '20px',
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
  textAlign: 'center' as const,
};

const greeting = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#065f46',
  margin: '0 0 16px 0',
};

const text = {
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#374151',
  margin: '0 0 12px 0',
};

const signature = {
  fontSize: '16px',
  color: '#374151',
  margin: '0 0 8px 0',
};

const authorName = {
  fontSize: '20px',
  fontWeight: '600',
  color: '#1f2937',
  margin: '0 0 4px 0',
};

const role = {
  fontSize: '14px',
  color: '#6b7280',
  fontStyle: 'italic' as const,
  margin: '0 0 16px 0',
};

const contact = {
  fontSize: '14px',
  color: '#6b7280',
  lineHeight: '1.5',
  margin: '0',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '24px 0',
};

const footer = {
  color: '#9ca3af',
  fontSize: '12px',
  textAlign: 'center' as const,
  fontStyle: 'italic' as const,
}; 