import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  // Proporcionar la ruta al fichero de configuración de peticiones
  './src/i18n/request.ts'
);

const nextConfig = {};

export default withNextIntl(nextConfig); 