"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">{t('title')}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{t('socialTitle')}</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li><a href={t('linkedinUrl')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><Linkedin className="w-5 h-5" /><span>LinkedIn</span></a></li>
            <li><a href={t('githubUrl')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><Github className="w-5 h-5" /><span>GitHub</span></a></li>
            <li><span className="flex items-center gap-2"><Mail className="w-5 h-5" />{t('email')}</span></li>
          </ul>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">{t('form.name')}</label>
            <input type="text" className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white" />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">{t('form.email')}</label>
            <input type="email" className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white" />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">{t('form.message')}</label>
            <textarea className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white" rows={4}></textarea>
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">{t('form.send')}</button>
        </form>
      </div>
    </section>
  );
} 