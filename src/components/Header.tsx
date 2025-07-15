"use client";

import { useTranslations } from 'next-intl';
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";

export function Header() {
  const t = useTranslations();

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-900 dark:text-white">Santiago Billordo</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            {t('nav.about')}
          </a>
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            {t('nav.why')}
          </a>
          <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            {t('nav.projects')}
          </a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            {t('nav.contact')}
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}