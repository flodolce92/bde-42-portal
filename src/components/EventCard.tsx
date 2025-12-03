'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/hooks/useTheme';

export interface EventProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  type: 'coding' | 'ctf' | 'quiz' | 'hackathon' | 'altro' | 'workshop';
  imageUrl?: string;
  isRegistered?: boolean;
}

export default function EventCard({
  id,
  title,
  description,
  date,
  time,
  duration,
  type,
  imageUrl,
  isRegistered = false
}: EventProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme } = useTheme();

  // Determina se dovremmo usare il tema scuro basato sulla preferenza del sistema
  const isDarkMode = () => {
    // Controlla se è attiva la preferenza del sistema per il tema scuro
    if (typeof window !== 'undefined') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    // Fallback: per default, impostiamo false
    return false;
  };

  // Limitiamo la descrizione per la versione collassata
  const shortDescription = description.length > 100
    ? description.substring(0, 100) + '...'
    : description;

  const getEventTypeStyle = () => {
    switch(type) {
      case 'coding':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
      case 'ctf':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'quiz':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'hackathon':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const getEventTypeIcon = () => {
    switch(type) {
      case 'coding':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'ctf':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
        );
      case 'quiz':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'hackathon':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('it-IT', options);
  };

  // Controlla se siamo in modalità scura
  const darkMode = isDarkMode();

  // Ottieni il colore di highlight in base al tema
  const getTeamHoverColor = () => {
    switch(theme) {
      case 'acqua':
        return 'hover:border-sky-600 group-hover:text-sky-500';
      case 'fuoco':
        return 'hover:border-red-600 group-hover:text-red-500';
      case 'erba':
        return 'hover:border-green-600 group-hover:text-green-500';
      default:
        return 'hover:border-sky-600 group-hover:text-sky-500';
    }
  };

  // Ottieni il colore di sfondo per il bottone in base al tema
  const getTeamButtonColor = () => {
    switch(theme) {
      case 'acqua':
        return 'bg-sky-600 hover:bg-sky-700';
      case 'fuoco':
        return 'bg-red-600 hover:bg-red-700';
      case 'erba':
        return 'bg-green-600 hover:bg-green-700';
      default:
        return 'bg-sky-600 hover:bg-sky-700';
    }
  };

  // Ottieni il colore per il bottone secondario in base al tema
  const getTeamSecondaryButtonColor = () => {
    switch(theme) {
      case 'acqua':
        return 'border-sky-500 text-sky-400 hover:bg-sky-900';
      case 'fuoco':
        return 'border-red-500 text-red-400 hover:bg-red-900';
      case 'erba':
        return 'border-green-500 text-green-400 hover:bg-green-900';
      default:
        return 'border-sky-500 text-sky-400 hover:bg-sky-900';
    }
  };

  const teamHoverColor = getTeamHoverColor();
  const teamButtonColor = getTeamButtonColor();
  const teamSecondaryButtonColor = getTeamSecondaryButtonColor();

  return (
    <div
      className={`${
        darkMode
          ? 'bg-slate-800 border-slate-700'
          : 'bg-white'
      } rounded-lg shadow-md overflow-hidden border ${
        isRegistered
          ? `border-${theme === 'acqua' ? 'sky' : theme === 'erba' ? 'green' : 'red'}-500`
          : 'border-gray-200 dark:border-slate-700'
      } transition-all duration-300 hover:shadow-lg group ${
        darkMode ? teamHoverColor.split(' ')[0] : ''
      }`}
    >
      {imageUrl ? (
        <div className="h-40 w-full overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${getEventTypeStyle()}`}>
              <span className="mr-1">{getEventTypeIcon()}</span>
              {type.toUpperCase()}
            </span>
          </div>
        </div>
      ) : (
        <div className={`h-16 flex items-center justify-center ${darkMode ? 'bg-slate-700' : 'bg-gray-100'}`}>
          <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${getEventTypeStyle()}`}>
            <span className="mr-1">{getEventTypeIcon()}</span>
            {type.toUpperCase()}
          </span>
        </div>
      )}

      <div className="p-5">
        <h3 className={`text-lg font-semibold mb-2 transition-colors ${darkMode ? 'text-white' : 'text-gray-900'} ${teamHoverColor.split(' ')[1]}`}>
          {title}
        </h3>

        <div className={`mb-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <div className="flex items-center mb-1">
            <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="truncate">{formatDate(date)}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="truncate">{time} ({duration})</span>
          </div>
        </div>

        <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {isExpanded ? description : shortDescription}
        </p>

        {description.length > 100 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`text-xs mb-4 transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'} ${teamHoverColor.split(' ')[1].replace('group-hover:', 'hover:')}`}
          >
            {isExpanded ? 'Mostra meno' : 'Mostra di più'}
          </button>
        )}

        <div className="flex justify-between mt-4">
          <Link
            href={`/eventi/${id}`}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              darkMode
                ? `${teamButtonColor} text-white`
                : `${teamButtonColor} text-white`
            }`}
          >
            Dettagli
          </Link>

          {isRegistered ? (
            <span className="px-4 py-2 rounded text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Iscritto
            </span>
          ) : (
            <button
              className={`px-4 py-2 rounded text-sm font-medium border transition-colors ${
                darkMode
                  ? teamSecondaryButtonColor
                  : teamSecondaryButtonColor.replace('hover:bg-sky-900', 'hover:bg-sky-50')
                     .replace('hover:bg-red-900', 'hover:bg-red-50')
                     .replace('hover:bg-green-900', 'hover:bg-green-50')
              }`}
            >
              Iscriviti
            </button>
          )}
        </div>
      </div>
    </div>
  );
}