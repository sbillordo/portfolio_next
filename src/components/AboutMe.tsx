"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

export default function AboutMe() {
  const t = useTranslations('aboutMe');

  return (
    <section className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{t('title')}</h2>
      <div className="text-gray-700 dark:text-gray-300 space-y-4 font-mono text-base md:text-lg">
        <p>{t('p1')}</p>
        <p>{t('p2')}</p>
        <p>{t('p3')}</p>
        <p>{t('p4')}</p>
      </div>
    </section>
  );
} 