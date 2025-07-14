"use client";

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Github, Linkedin, Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const t = useTranslations('contact');
  const locale = useLocale();
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar errores cuando el usuario empiece a escribir
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          locale
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Auto-hide success message after 10 seconds
        setTimeout(() => {
          if (status === 'success') {
            setStatus('idle');
          }
        }, 10000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Error desconocido');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setStatus('error');
      setErrorMessage(locale === 'es' ? 'Error de conexión. Verifica tu internet.' : 'Connection error. Check your internet.');
    }
  };

  const getSuccessMessage = () => {
    return locale === 'es' 
      ? '¡Mensaje enviado correctamente! Te responderé pronto.' 
      : 'Message sent successfully! I will respond soon.';
  };

  const getErrorMessage = () => {
    if (errorMessage) return errorMessage;
    return locale === 'es' 
      ? 'Error al enviar el mensaje. Intenta nuevamente.' 
      : 'Error sending message. Please try again.';
  };

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError = status === 'error';

  return (
    <section id="contact" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        {t('title')}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Información de contacto */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            {t('socialTitle')}
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>
              <a 
                href={t('linkedinUrl')} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a 
                href={t('githubUrl')} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 hover:text-gray-900 dark:hover:text-white transition-colors group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <span className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                {t('email')}
              </span>
            </li>
          </ul>
        </div>
        
        {/* Formulario de contacto */}
        <div>
          {/* Mensaje de éxito */}
          {isSuccess && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg flex items-center gap-3 animate-in fade-in duration-300">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
              <span className="text-green-800 dark:text-green-200 text-sm">
                {getSuccessMessage()}
              </span>
            </div>
          )}

          {/* Mensaje de error */}
          {isError && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg flex items-center gap-3 animate-in fade-in duration-300">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
              <span className="text-red-800 dark:text-red-200 text-sm">
                {getErrorMessage()}
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label 
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t('form.name')}
              </label>
              <input 
                id="name"
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={100}
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                placeholder={locale === 'es' ? 'Tu nombre completo' : 'Your full name'}
              />
            </div>
            
            <div>
              <label 
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t('form.email')}
              </label>
              <input 
                id="email"
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                placeholder={locale === 'es' ? 'tu@email.com' : 'your@email.com'}
              />
            </div>
            
            <div>
              <label 
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t('form.message')}
              </label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                maxLength={2000}
                disabled={isLoading}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-colors resize-none"
                placeholder={locale === 'es' ? 'Escribe tu mensaje aquí...' : 'Write your message here...'}
              />
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-right">
                {formData.message.length}/2000
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={isLoading || !formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              {!isLoading && (
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              )}
              <span>
                {isLoading 
                  ? (locale === 'es' ? 'Enviando...' : 'Sending...') 
                  : t('form.send')
                }
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 