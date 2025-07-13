import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Mi portfolio personal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}