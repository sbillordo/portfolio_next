"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslations } from 'next-intl';
import Link from "next/link";

// Icono SVG personalizado para X (Twitter)
const XTwitterIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-x-twitter ${className ?? ""}`}
    {...props}
  >
    <path d="M8,2H3L16.7,22h5.1L8,2z" />
    <line x1="2.3" y1="22.1" x2="10.2" y2="12.8" />
    <line x1="19.8" y1="2" x2="13.3" y2="9.6" />
  </svg>
);

export function Footer() {
  const t = useTranslations();

  return (
    <>
      <footer className="py-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-12 md:gap-0">
            {/* Columna Izquierda */}
            <div className="flex-1 mb-8 md:mb-0">
              <h2 className="text-2xl font-mono font-semibold text-gray-900 dark:text-white mb-4">{t('footer.role')}</h2>
              <p className="text-gray-700 dark:text-gray-300 font-mono">Business Process Consultant<br/>Focused on IT & Data Analytics</p>
            </div>

            {/* Columna Central */}
            <div className="flex-1 mb-8 md:mb-0">
              <h3 className="text-2xl font-mono font-semibold text-gray-900 dark:text-white mb-4">{t('footer.links')}</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 font-mono">
                <li><Link href="#about" className="hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.about')}</Link></li>
                <li><Link href="#why" className="hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.why')}</Link></li>
                <li><Link href="#projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.projects')}</Link></li>
                <li><Link href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.contact')}</Link></li>
              </ul>
            </div>

            {/* Columna Derecha */}
            <div className="flex-1">
              <h3 className="text-2xl font-mono font-semibold text-gray-900 dark:text-white mb-4">{t('footer.social')}</h3>
              <div className="flex space-x-6">
                <a href="https://www.linkedin.com/in/santiagobillordo/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="https://x.com/SantiBillordo" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <XTwitterIcon className="w-8 h-8" />
                </a>
                <a href="https://github.com/santiagobillordo" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Github className="w-8 h-8" />
                </a>
                  <a href="mailto:santiagobillordo@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Mail className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-gray-150 dark:bg-black py-2 w-full">
        <div className="container mx-auto flex justify-center items-center">
          <span className="text-gray-700 dark:text-gray-300 font-mono text-lg flex items-center gap-1">{t('footer.made')} <span className="text-red-500 text-xl">♥</span></span>
        </div>
      </div>
    </>
  );
}