'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/hooks/useTheme';

type TeamType = 'acqua' | 'fuoco' | 'erba';

export default function Navbar() {
  const { theme, changeTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleThemeChange = (newTheme: TeamType) => {
    changeTheme(newTheme);
  };
  
  // Funzione per ottenere il colore di sfondo della navbar in base al tema
  const getNavbarStyle = () => {
    // Colore base che dipende dal tema
    let baseColor = '';
    let borderColor = '';
    
    switch(theme) {
      case 'acqua':
        baseColor = 'bg-sky-900';
        borderColor = 'border-sky-700';
        break;
      case 'fuoco':
        baseColor = 'bg-red-900';
        borderColor = 'border-red-700';
        break;
      case 'erba':
        baseColor = 'bg-green-900';
        borderColor = 'border-green-700';
        break;
    }
    
    return `${baseColor} ${borderColor} text-white`;
  };
  
  // Elementi decorativi per ciascun tema
  const getThemeDecorations = () => {
    if (theme === 'acqua') {
      return (
        <div className="absolute left-0 right-0 bottom-0 h-1 overflow-hidden">
          <div className="animate-wave h-4 -mb-3" 
               style={{ 
                 background: 'linear-gradient(90deg, transparent, var(--wave-2), transparent)',
                 width: '200%',
                 animation: 'wave 10s linear infinite'
               }}></div>
        </div>
      );
    } else if (theme === 'fuoco') {
      return (
        <div className="absolute left-0 right-0 bottom-0 h-2 overflow-hidden">
          <div className="animate-flicker"
               style={{ 
                 background: 'linear-gradient(45deg, var(--flame-3) 0%, var(--flame-2) 25%, var(--flame-1) 50%, var(--flame-2) 75%, var(--flame-3) 100%)',
                 clipPath: 'polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)',
                 height: '100%'
               }}></div>
        </div>
      );
    } else if (theme === 'erba') {
      return (
        <div className="absolute left-0 right-0 bottom-0 h-1 bg-green-800">
          <div className="absolute -top-3 right-10 w-2 h-4 bg-green-700" 
               style={{ clipPath: 'polygon(0% 100%, 100% 100%, 50% 0%)' }}></div>
          <div className="absolute -top-2 right-20 w-2 h-3 bg-green-700" 
               style={{ clipPath: 'polygon(0% 100%, 100% 100%, 50% 0%)' }}></div>
          <div className="absolute -top-4 right-30 w-2 h-5 bg-green-700" 
               style={{ clipPath: 'polygon(0% 100%, 100% 100%, 50% 0%)' }}></div>
        </div>
      );
    }
    
    return null;
  };
  
  return (
    <nav className={`fixed w-full top-0 z-50 border-b ${getNavbarStyle()}`}>
      {getThemeDecorations()}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="font-bold text-xl">
                <span className="font-black">42</span> BDE Portal
              </Link>
            </div>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-6 items-center">
              <Link 
                href="/dashboard" 
                className="px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-white text-white"
              >
                Dashboard
              </Link>
              <Link 
                href="/eventi" 
                className="px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-white text-white"
              >
                Eventi
              </Link>
              <Link 
                href="/club" 
                className="px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-white text-white"
              >
                Club
              </Link>
              <Link 
                href="/classifica" 
                className="px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-white text-white"
              >
                Classifica
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {/* Team Theme Selectors */}
            <div className="flex items-center">
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleThemeChange('acqua')}
                  className={`relative w-8 h-8 rounded-full transition-all duration-200 ${
                    theme === 'acqua' ? 'ring-2 ring-white scale-110' : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-label="Team Acqua"
                  title="Team Acqua"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 animate-pulse-slow" style={{ 
                    animationDuration: theme === 'acqua' ? '2s' : '0s',
                    opacity: theme === 'acqua' ? 1 : 0.8 
                  }}></span>
                  <span className="absolute inset-0 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">
                    A
                  </span>
                </button>
                <button 
                  onClick={() => handleThemeChange('fuoco')}
                  className={`relative w-8 h-8 rounded-full transition-all duration-200 ${
                    theme === 'fuoco' ? 'ring-2 ring-white scale-110' : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-label="Team Fuoco"
                  title="Team Fuoco"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-red-400 to-red-600 animate-pulse-slow" style={{ 
                    animationDuration: theme === 'fuoco' ? '1.5s' : '0s',
                    opacity: theme === 'fuoco' ? 1 : 0.8 
                  }}></span>
                  <span className="absolute inset-0 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
                    F
                  </span>
                </button>
                <button 
                  onClick={() => handleThemeChange('erba')}
                  className={`relative w-8 h-8 rounded-full transition-all duration-200 ${
                    theme === 'erba' ? 'ring-2 ring-white scale-110' : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-label="Team Erba"
                  title="Team Erba"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-green-600 animate-pulse-slow" style={{ 
                    animationDuration: theme === 'erba' ? '2.5s' : '0s',
                    opacity: theme === 'erba' ? 1 : 0.8 
                  }}></span>
                  <span className="absolute inset-0 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                    E
                  </span>
                </button>
              </div>
            </div>
            
            {/* Avatar utente */}
            <div className="ml-4 flex items-center">
              <div className="h-8 w-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white font-bold">
                U
              </div>
            </div>
            
            {/* Menu mobile */}
            <div className="ml-4 flex items-center sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:bg-opacity-10 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Apri menu principale</span>
                <svg className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden bg-opacity-95 ${
        theme === 'acqua' ? 'bg-sky-800' :
        theme === 'fuoco' ? 'bg-red-800' :
        'bg-green-800'
      }`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link 
            href="/dashboard"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-white text-white hover:bg-white hover:bg-opacity-10"
            onClick={() => setMobileMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link 
            href="/eventi"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-white hover:bg-white hover:bg-opacity-10 hover:border-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Eventi
          </Link>
          <Link 
            href="/club"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-white hover:bg-white hover:bg-opacity-10 hover:border-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Club
          </Link>
          <Link 
            href="/classifica"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-white hover:bg-white hover:bg-opacity-10 hover:border-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Classifica
          </Link>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes wave {
          0% { transform: translateX(-50%) }
          100% { transform: translateX(0%) }
        }
        
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-wave {
          animation: wave 10s linear infinite;
        }
        
        .animate-flicker {
          animation: flicker 1s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </nav>
  );
} 