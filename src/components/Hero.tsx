"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="py-16">
      <h1 className="text-6xl md:text-7xl font-mono text-gray-900 dark:text-white mb-12" style={{fontFamily: 'monospace, inherit'}}>
        {t('title')}
      </h1>
      <p className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200" style={{fontFamily: 'monospace, inherit'}}>
        {t('subtitle')}
      </p>
    </section>
  );
}