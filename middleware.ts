import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const middleware = createMiddleware({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  localePrefix: 'always'
});

export default function(request: NextRequest) {
  console.log('--- NEW REQUEST ---');
  console.log('🚀 Middleware - Incoming URL:', request.url);
  console.log('🚀 Middleware - Incoming Pathname:', request.nextUrl.pathname);
  
  const response = middleware(request);
  
  const rewrite = response.headers.get('x-middleware-rewrite');
  console.log('🚀 Middleware - Rewriting to:', rewrite);
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};