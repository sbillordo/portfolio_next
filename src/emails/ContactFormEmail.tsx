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

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactFormEmail({ name, email, message }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>💼 Nueva consulta de {name} desde tu portfolio</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={heading}>💼 Nueva consulta desde tu portfolio</Text>
          
          <Section style={section}>
            <Text style={label}>👤 <strong>Nombre:</strong></Text>
            <Text style={text}>{name}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>📧 <strong>Email:</strong></Text>
            <Text style={text}>{email}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>💬 <strong>Mensaje:</strong></Text>
            <Text style={text}>{message}</Text>
          </Section>

          <Hr style={hr} />
          <Text style={footer}>
            📍 Esta consulta fue enviada desde tu portfolio web.<br/>
            🕒 {new Date().toLocaleString('es-ES', { 
              timeZone: 'America/Argentina/Buenos_Aires',
              dateStyle: 'full',
              timeStyle: 'short'
            })}
          </Text>
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
  padding: '20px',
  marginBottom: '64px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
};

const heading = {
  fontSize: '28px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '600',
  color: '#1f2937',
  padding: '0 0 24px 0',
  textAlign: 'center' as const,
};

const section = {
  padding: '20px',
  border: 'solid 2px #e5e7eb',
  borderRadius: '8px',
  backgroundColor: '#f9fafb',
  margin: '16px 0',
};

const label = {
  fontSize: '14px',
  lineHeight: '1.4',
  color: '#6b7280',
  fontWeight: '600',
  margin: '0 0 8px 0',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const text = {
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#374151',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '32px 0',
};

const footer = {
  color: '#6b7280',
  fontSize: '14px',
  marginTop: '24px',
  textAlign: 'center' as const,
  lineHeight: '1.5',
}; 