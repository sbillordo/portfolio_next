import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['es', 'en'];

export default getRequestConfig(async ({ locale }) => {
  if (locale && locales.includes(locale)) {
    return {
      locale,
      messages: (await import(`../../messages/${locale}.json`)).default
    };
  }

  notFound();
}); 