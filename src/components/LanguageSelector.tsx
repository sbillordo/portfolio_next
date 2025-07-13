"use client";

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTransition } from 'react';

const languages = {
  es: { name: "Español", flag: "🇪🇸" },
  en: { name: "English", flag: "🇺🇸" },
};

export function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return; // No cambiar si es el mismo idioma
    
    startTransition(() => {
      // Construir la nueva URL manualmente
      const segments = pathname.split('/').filter(Boolean);
      // Remover el primer segmento si es un locale
      if (segments[0] === locale) {
        segments.shift();
      }
      // Construir la nueva URL
      const newPath = `/${newLocale}${segments.length > 0 ? '/' + segments.join('/') : ''}`;
      router.push(newPath);
    });
  };

  return (
    <div className="relative">
      <select
        value={locale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        disabled={isPending}
        className="bg-transparent rounded px-3 py-1 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
      >
        {Object.entries(languages).map(([code, { name, flag }]) => (
          <option key={code} value={code}>
            {flag} {name}
          </option>
        ))}
      </select>
    </div>
  );
}