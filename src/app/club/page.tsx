'use client';

import { useTheme } from '@/hooks/useTheme';
import Link from 'next/link';
import { useState } from 'react';

// Dati di esempio per i club
const clubsData = [
  {
    id: 'startup',
    name: 'Startup Club',
    description: 'Il nostro Startup Club ti aiuta a sviluppare le tue idee imprenditoriali e a trasformarle in business reali. Partecipa a workshop, incontra mentor esperti e lavora con altri studenti per creare la tua startup.',
    longDescription: 'Attraverso il nostro Startup Club imparerai come validare un&apos;idea, creare un business model canvas, fare pitch efficaci e cercare finanziamenti. Organizziamo regolarmente incontri con imprenditori di successo, workshop pratici e hackathon dedicati all&apos;innovazione. Se hai sempre sognato di lanciare la tua startup, questo è il posto giusto per iniziare!',
    meetings: 'Ogni Martedì, 18:00-20:00',
    location: 'Aula Magna - 42 Roma Luiss',
    leader: 'Marco Rossi',
    color: 'from-purple-900 to-indigo-800',
    members: 28,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'gaming',
    name: 'Spaghettistudio',
    description: 'Spaghettistudio è il nostro club di sviluppo di videogiochi. Impara a progettare, sviluppare e pubblicare giochi utilizzando motori moderni come Unity e Unreal Engine.',
    longDescription: 'Spaghettistudio è nato dalla passione per i videogiochi e la programmazione. Il nostro club si concentra sullo sviluppo pratico di giochi, dall&apos;ideazione alla pubblicazione. Lavoriamo con tecnologie come Unity, Unreal Engine e Godot. Organizziamo game jam interne, workshop su grafica 3D, sound design e game design. Collaboriamo anche con artisti e musicisti per creare progetti completi. È un&apos;ottima opportunità per costruire un portfolio di progetti e acquisire competenze molto richieste nell&apos;industria.',
    meetings: 'Ogni Giovedì, 17:00-20:00',
    location: 'Laboratorio 3 - 42 Roma Luiss',
    leader: 'Andrea Bianchi',
    color: 'from-pink-900 to-rose-800',
    members: 35,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'libri',
    name: 'Club Libro e Manga',
    description: 'Un club per gli amanti della lettura in tutte le sue forme. Discutiamo libri, manga, fumetti e organizziamo eventi culturali legati alla letteratura.',
    longDescription: 'Il nostro Club Libro e Manga è uno spazio dove condividere la passione per la lettura in tutte le sue forme. Ogni mese scegliamo un libro e un manga da leggere e discutere insieme. Organizziamo incontri con autori, visite a fiere del libro e del fumetto, maratone di lettura e attività creative come la scrittura collaborativa. Il club è aperto a tutti, indipendentemente dai generi preferiti o dal livello di esperienza con la lettura.',
    meetings: 'Ogni Lunedì, 19:00-21:00',
    location: 'Biblioteca - 42 Roma Luiss',
    leader: 'Sofia Verdi',
    color: 'from-amber-900 to-yellow-800',
    members: 22,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 'cybersecurity',
    name: 'Club Cybersecurity',
    description: 'Approfondisci le tue conoscenze nel campo della sicurezza informatica, partecipa a competizioni CTF e impara a proteggere sistemi e reti.',
    longDescription: 'Il Club Cybersecurity è dedicato all&apos;esplorazione e all&apos;apprendimento delle tecniche di sicurezza informatica. Organizziamo workshop pratici su penetration testing, forensics, reverse engineering e crittografia. Partecipiamo regolarmente a competizioni Capture The Flag (CTF) sia nazionali che internazionali. Gli incontri includono sessioni teoriche, esercitazioni pratiche e discussioni su recenti vulnerabilità e attacchi. È un&apos;ottima opportunità per chi vuole specializzarsi in un settore sempre più richiesto.',
    meetings: 'Ogni Mercoledì, 18:30-21:00',
    location: 'Laboratorio 2 - 42 Roma Luiss',
    leader: 'Luca Neri',
    color: 'from-cyan-900 to-blue-800',
    members: 30,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export default function ClubPage() {
  const { theme } = useTheme();
  const [selectedClub, setSelectedClub] = useState(clubsData[0]);
  
  // Funzione per ottenere gli stili basati sul tema
  const getThemeStyles = () => {
    switch(theme) {
      case 'acqua':
        return {
          mainGradient: 'bg-gradient-to-r from-sky-950 via-blue-950 to-sky-900',
          cardBg: 'bg-slate-900',
          border: 'border-sky-900',
          highlight: 'bg-sky-800 text-sky-100',
          button: 'bg-sky-700 hover:bg-sky-600 text-white',
          secondaryButton: 'bg-transparent border border-sky-700 text-sky-100 hover:bg-sky-900',
          activeTab: 'bg-sky-700 text-white',
          inactiveTab: 'text-sky-100 hover:bg-sky-900',
          textColor: 'text-sky-100',
          textMuted: 'text-gray-400',
          link: 'text-sky-400 hover:text-sky-300'
        };
      case 'fuoco':
        return {
          mainGradient: 'bg-gradient-to-r from-red-950 via-orange-950 to-red-900',
          cardBg: 'bg-slate-900',
          border: 'border-red-900',
          highlight: 'bg-red-800 text-red-100',
          button: 'bg-red-700 hover:bg-red-600 text-white',
          secondaryButton: 'bg-transparent border border-red-700 text-red-100 hover:bg-red-900',
          activeTab: 'bg-red-700 text-white',
          inactiveTab: 'text-red-100 hover:bg-red-900',
          textColor: 'text-red-100',
          textMuted: 'text-gray-400',
          link: 'text-red-400 hover:text-red-300'
        };
      case 'erba':
        return {
          mainGradient: 'bg-gradient-to-r from-green-950 via-emerald-950 to-green-900',
          cardBg: 'bg-slate-900',
          border: 'border-green-900',
          highlight: 'bg-green-800 text-green-100',
          button: 'bg-green-700 hover:bg-green-600 text-white',
          secondaryButton: 'bg-transparent border border-green-700 text-green-100 hover:bg-green-900',
          activeTab: 'bg-green-700 text-white',
          inactiveTab: 'text-green-100 hover:bg-green-900',
          textColor: 'text-green-100',
          textMuted: 'text-gray-400',
          link: 'text-green-400 hover:text-green-300'
        };
      default:
        return {
          mainGradient: 'bg-gradient-to-r from-sky-950 via-blue-950 to-sky-900',
          cardBg: 'bg-slate-900',
          border: 'border-sky-900',
          highlight: 'bg-sky-800 text-sky-100',
          button: 'bg-sky-700 hover:bg-sky-600 text-white',
          secondaryButton: 'bg-transparent border border-sky-700 text-sky-100 hover:bg-sky-900',
          activeTab: 'bg-sky-700 text-white',
          inactiveTab: 'text-sky-100 hover:bg-sky-900',
          textColor: 'text-sky-100',
          textMuted: 'text-gray-400',
          link: 'text-sky-400 hover:text-sky-300'
        };
    }
  };
  
  const styles = getThemeStyles();
  
  return (
    <div className={`min-h-screen ${styles.mainGradient} pt-8 pb-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${styles.textColor}`}>I Nostri Club</h1>
          <p className={`text-xl max-w-3xl mx-auto ${styles.textMuted}`}>
            Scopri la nostra offerta di club tematici e trova quello più adatto ai tuoi interessi
          </p>
        </div>
        
        {/* Menu di navigazione dei club */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {clubsData.map((club) => (
            <button
              key={club.id}
              onClick={() => setSelectedClub(club)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedClub.id === club.id ? styles.activeTab : styles.inactiveTab
              }`}
            >
              {club.name}
            </button>
          ))}
        </div>
        
        {/* Dettagli del club selezionato */}
        <div className={`${styles.cardBg} shadow-xl rounded-lg overflow-hidden border ${styles.border}`}>
          {/* Header con gradient personalizzato */}
          <div className={`bg-gradient-to-r ${selectedClub.color} p-8`}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="h-16 w-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white mr-4">
                  {selectedClub.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedClub.name}</h2>
                  <p className="text-white text-opacity-80">{selectedClub.members} membri</p>
                </div>
              </div>
              <button className={`px-6 py-3 rounded-lg font-bold ${styles.button}`}>
                Unisciti al Club
              </button>
            </div>
          </div>
          
          {/* Contenuto del club */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className={`text-xl font-semibold mb-4 ${styles.textColor}`}>Descrizione</h3>
                <p className={`mb-6 ${styles.textMuted}`}>{selectedClub.longDescription}</p>
                
                <h3 className={`text-xl font-semibold mb-4 ${styles.textColor}`}>Attività</h3>
                <ul className={`list-disc list-inside mb-6 ${styles.textMuted}`}>
                  <li>Incontri regolari settimanali</li>
                  <li>Workshop pratici e teorici</li>
                  <li>Progetti collaborativi</li>
                  <li>Eventi speciali e competizioni</li>
                </ul>
                
                <Link 
                  href={`/club/${selectedClub.id}`}
                  className={`inline-block px-6 py-3 rounded-lg font-medium ${styles.secondaryButton}`}
                >
                  Visualizza calendario completo
                </Link>
              </div>
              
              <div className={`${styles.highlight} p-6 rounded-lg`}>
                <h3 className="text-xl font-semibold mb-4">Informazioni</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-1">Incontri</h4>
                  <p>{selectedClub.meetings}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-1">Luogo</h4>
                  <p>{selectedClub.location}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-1">Responsabile</h4>
                  <p>{selectedClub.leader}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-1">Livello richiesto</h4>
                  <p>Aperto a tutti</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-1">Contatto</h4>
                  <p className={styles.link}>club@42roma.it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 