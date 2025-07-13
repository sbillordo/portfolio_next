import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ThemeProvider } from '@/components/ThemeProvider';
import '../globals.css';

// Supported locales
const locales = ['es', 'en'];

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  console.log('--- LAYOUT ---');
  console.log('🎨 Layout - Received locale param:', locale);
  
  // Validate that the incoming locale is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  // Make the locale available to Server Components
  setRequestLocale(locale);

  let messages;
  try {
    // Pasar el locale explícitamente para asegurar que se carguen los mensajes correctos
    messages = await getMessages({locale});
  } catch (error) {
    console.error("Failed to load messages:", error);
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider 
            locale={locale}
            messages={messages}
          >
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}