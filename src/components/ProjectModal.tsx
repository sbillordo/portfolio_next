import React from 'react';
import { useTranslations } from 'next-intl';
import { Github, ExternalLink } from "lucide-react";

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  projectKey: string;
  image: string;
  repo: string;
  demo: string;
}

export default function ProjectModal({ open, onClose, projectKey, image, repo, demo }: ProjectModalProps) {
  const t = useTranslations('projects');
  const [show, setShow] = React.useState(open);
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setShow(true);
      setTimeout(() => setAnimate(true), 10); // Pequeño delay para activar la animación de entrada
    } else if (show) {
      setAnimate(false);
      const timeout = setTimeout(() => setShow(false), 400); // Esperar animación de salida
      return () => clearTimeout(timeout);
    }
  }, [open]);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-60 overflow-y-auto py-8 transition-opacity duration-400 ${animate ? 'opacity-100' : 'opacity-0'}`}>
      <div
        className={`bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-3xl w-full mx-4 relative transition-all duration-400 ease-in-out max-h-[calc(100vh-4rem)] overflow-y-auto flex flex-col
        ${animate ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
      >
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl font-bold focus:outline-none"
          aria-label="Cerrar"
        >
          ×
        </button>
        {/* Imagen grande */}
        <div className="w-full h-64 md:h-80 rounded-t-xl overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-800 flex-shrink-0">
          <img src={image} alt={t(`${projectKey}.title`)} className="object-contain h-full w-full max-h-80" />
        </div>
        {/* Contenido */}
        <div className="p-8 overflow-y-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">{t(`${projectKey}.title`)}</h2>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-mono">{t(`${projectKey}.tech`)}</div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{t(`${projectKey}.desc`)}</p>
          <div className="mb-4">
            <div className="font-semibold mb-1 text-gray-900 dark:text-white">{t(`${projectKey}.features`)}</div>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              {[1,2,3,4,5].map(i => {
                let feature = '';
                try {
                  feature = t(`${projectKey}.feature${i}`);
                } catch {
                  feature = '';
                }
                return feature ? <li key={i}>{feature}</li> : null;
              })}
            </ul>
          </div>
          <div className="flex gap-2 mt-6">
            <a href={repo} target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded font-semibold text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors border border-gray-300 dark:border-gray-600 flex items-center gap-2">
              <Github className="w-4 h-4" />
              {t('btn-repo')}
            </a>
            <a href={demo} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold text-sm transition-colors flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              {t('btn-demo')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 