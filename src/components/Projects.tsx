"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import ProjectModal from './ProjectModal';
import { Github, ExternalLink, User, Briefcase } from "lucide-react";
import Image from 'next/image';

interface Project {
  key: string;
  image: string;
  repo: string;
  demo: string;
  type: 'personal' | 'client';
}

const projects: Project[] = [
  {
    key: '1',
    image: '/finance_tracker.png',
    repo: 'https://github.com/usuario/finance',
    demo: 'https://finance-tracket.vercel.app/',
    type: 'personal',
  },
  {
    key: '2',
    image: '/miel.png',
    repo: 'https://github.com/usuario/bakery',
    demo: 'https://miel.onrender.com/index.html',
    type: 'client',
  },
  {
    key: '3',
    image: '/diamondstudio.png',
    repo: 'https://github.com/usuario/studio',
    demo: 'https://diamondstudiomanicura-pruebas.netlify.app/',
    type: 'client',
  },
  {
    key: '4',
    image: '/la_alfarera.png',
    repo: 'https://github.com/usuario/pottery',
    demo: 'https://laalfarerataller.com/',
    type: 'client',
  },
];

type ProjectType = Project;

export default function Projects() {
  const t = useTranslations('projects');
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState<ProjectType | null>(null);

  const handleOpenModal = (project: ProjectType) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">{t('title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.key}
            className="bg-white dark:bg-gray-800 rounded-xl shadow dark:shadow-gray-400/20 p-6 flex flex-col transition-transform transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-2xl dark:hover:shadow-gray-300/30 cursor-pointer border border-gray-200 dark:border-gray-800"
            onClick={() => handleOpenModal(project)}
          >
            <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded mb-4 flex items-center justify-center overflow-hidden">
              <Image src={project.image} alt={t(`${project.key}.title`)} width={320} height={160} className="object-contain h-full w-full" />
            </div>
            <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{t(`${project.key}.title`)}</h3>
            <span className={`inline-flex w-fit items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold mb-2 ${project.type === 'personal' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'}`}> 
              {project.type === 'personal' ? <User className="w-3 h-3" /> : <Briefcase className="w-3 h-3" />}
              {t(`type.${project.type}`)}
            </span>
            <p className="text-gray-700 dark:text-gray-300 mb-4 font-mono">{t(`${project.key}.short`)}</p>
            <div className="mt-auto flex gap-2">
              {project.type === 'client' ? (
                <div className="relative group">
                  <span
                    className="bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed px-4 py-2 rounded font-semibold text-sm flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    {t('repo')}
                  </span>
                  <span className="absolute bottom-full left-0 mb-2 w-max max-w-xs whitespace-nowrap bg-gray-800 text-white dark:bg-black dark:text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity pointer-events-none z-50">
                    {t('repo-disabled')}
                  </span>
                </div>
              ) : (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded font-semibold text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  {t('repo')}
                </a>
              )}
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold text-sm transition-colors flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                {t('demo')}
              </a>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          open={modalOpen}
          onClose={handleCloseModal}
          projectKey={selectedProject.key}
          image={selectedProject.image}
          repo={selectedProject.repo}
          demo={selectedProject.demo}
          type={selectedProject.type}
        />
      )}
    </section>
  );
} 