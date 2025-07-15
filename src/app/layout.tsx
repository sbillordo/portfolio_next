import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Santiago Billordo',
  description: 'Mi portfolio personal',
   icons: {
    icon: '/favicon.ico',        // ruta absoluta → nunca se le añade /es, /en…
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}