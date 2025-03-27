'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useAppStore, Event, User } from '@/store';
import Link from 'next/link';
import Image from 'next/image';

// Dati di esempio per mostrare la UI
const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Hackathon - Web3 Challenge',
    description: 'Partecipa al nostro hackathon di 48 ore dedicato allo sviluppo di applicazioni Web3. Metti alla prova le tue competenze in blockchain, smart contracts e applicazioni decentralizzate.\n\nDurante questa competizione avrai l&apos;opportunità di lavorare in team per creare soluzioni innovative basate sulla tecnologia blockchain. I progetti migliori saranno premiati e potranno essere presentati ad aziende del settore.\n\nRequisiti:\n- Conoscenza base di JavaScript/TypeScript\n- Interesse per la tecnologia blockchain\n- Spirito di squadra e creatività\n\nI partecipanti saranno divisi in team di 3-4 persone. È possibile partecipare con un team già formato o iscriversi individualmente ed essere assegnati a un team.',
    date: '2024-06-15',
    time: '10:00',
    duration: '48h',
    type: 'hackathon',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
    participants: ['1', '2', '3']
  },
  {
    id: '2',
    title: 'CTF - Security Bootcamp',
    description: 'Una competizione Capture The Flag incentrata sulla sicurezza informatica. Risolvi sfide di penetration testing, reverse engineering e web exploitation.\n\nQuesto evento è ideale per chi vuole mettere alla prova le proprie competenze in ambito cybersecurity. Le sfide saranno di vari livelli di difficoltà, adatte sia a principianti che esperti.\n\nCategorie di sfide:\n- Web Exploitation\n- Reverse Engineering\n- Binary Exploitation\n- Cryptography\n- Forensics\n\nI primi tre classificati riceveranno premi speciali e tutti i partecipanti guadagneranno punti per la classifica generale.',
    date: '2024-05-20',
    time: '14:30',
    duration: '6h',
    type: 'ctf',
    imageUrl: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87',
    participants: ['1', '4', '5']
  },
  {
    id: '3',
    title: 'Quiz - Algoritmi e Strutture Dati',
    description: 'Test le tue conoscenze su algoritmi e strutture dati con questo quiz competitivo. Sfida gli altri studenti e scala la classifica!\n\nIl quiz sarà composto da domande teoriche e piccoli problemi da risolvere riguardanti algoritmi di ordinamento, strutture dati, complessità computazionale e pattern di progettazione.\n\nFormato:\n- 30 domande a risposta multipla\n- 5 problemi algoritmici da risolvere\n- Tempo limitato per ogni sezione\n\nAl termine del quiz ci sarà una sessione di discussione per analizzare le risposte e approfondire i concetti più complessi.',
    date: '2024-05-05',
    time: '16:00',
    duration: '2h',
    type: 'quiz'
  }
];

const mockParticipants: User[] = [
  {
    id: '1',
    username: 'hackerman42',
    team: 'acqua',
    score: 1250,
    skills: { 'Coding': 90, 'Security': 85, 'Algorithms': 80 }
  },
  {
    id: '2',
    username: 'codemaster',
    team: 'fuoco',
    score: 1150,
    skills: { 'Coding': 88, 'Security': 75, 'Algorithms': 92 }
  },
  {
    id: '3',
    username: 'bytebender',
    team: 'erba',
    score: 1050,
    skills: { 'Coding': 82, 'Security': 80, 'Algorithms': 85 }
  },
  {
    id: '4',
    username: 'datadragon',
    team: 'acqua',
    score: 950,
    skills: { 'Coding': 75, 'Security': 90, 'Algorithms': 78 }
  },
  {
    id: '5',
    username: 'algoguru',
    team: 'fuoco',
    score: 900,
    skills: { 'Coding': 85, 'Security': 70, 'Algorithms': 95 }
  }
];

export default function EventDetail({ params }: { params: { id: string } }) {
  const { theme } = useTheme();
  const { currentUser, registerForEvent, unregisterFromEvent } = useAppStore();
  const [event, setEvent] = useState<Event | null>(null);
  const [participants, setParticipants] = useState<User[]>([]);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  
  // Determina se dovremmo usare il tema scuro basato sulla preferenza del sistema
  const isDarkMode = () => {
    // Controlla se è attiva la preferenza del sistema per il tema scuro
    if (typeof window !== 'undefined') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    // Fallback: per default, impostiamo false
    return false;
  };
  
  // Controlla se siamo in modalità scura
  const darkMode = isDarkMode();
  
  useEffect(() => {
    // In un'app reale, qui caricheremmo i dati dal backend
    // Per ora usiamo i dati di esempio
    const foundEvent = mockEvents.find(e => e.id === params.id);
    setEvent(foundEvent || null);
    
    if (foundEvent?.participants) {
      // Filtra i partecipanti che sono presenti nell'evento
      const eventParticipants = mockParticipants.filter(user => 
        foundEvent.participants?.includes(user.id)
      );
      setParticipants(eventParticipants);
      
      // Verifica se l'utente corrente è registrato
      if (currentUser) {
        setIsRegistered(foundEvent.participants.includes(currentUser.id));
      }
    }
  }, [params.id, currentUser]);
  
  const handleRegistration = () => {
    if (!event || !currentUser) return;
    
    if (isRegistered) {
      setShowConfirmModal(true);
    } else {
      // Registra l'utente all'evento
      registerForEvent(event.id, currentUser.id);
      setIsRegistered(true);
      setParticipants(prev => [...prev, currentUser]);
    }
  };
  
  const handleUnregister = () => {
    if (!event || !currentUser) return;
    
    // Annulla la registrazione dell'utente
    unregisterFromEvent(event.id, currentUser.id);
    setIsRegistered(false);
    setParticipants(prev => prev.filter(user => user.id !== currentUser.id));
    setShowConfirmModal(false);
  };
  
  const getButtonClass = () => {
    const baseClasses = 'font-medium py-3 px-6 rounded-lg transition-colors shadow-md';
    
    if (!isRegistered) {
      switch(theme) {
        case 'acqua':
          return `${baseClasses} text-white ${darkMode ? 'bg-sky-700 hover:bg-sky-600' : 'bg-sky-500 hover:bg-sky-400'}`;
        case 'erba':
          return `${baseClasses} text-white ${darkMode ? 'bg-green-700 hover:bg-green-600' : 'bg-green-500 hover:bg-green-400'}`;
        case 'fuoco':
          return `${baseClasses} text-white ${darkMode ? 'bg-red-700 hover:bg-red-600' : 'bg-red-500 hover:bg-red-400'}`;
        default:
          return `${baseClasses} text-white ${darkMode ? 'bg-sky-700 hover:bg-sky-600' : 'bg-sky-500 hover:bg-sky-400'}`;
      }
    }
    
    return `${baseClasses} ${darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`;
  };
  
  const getTeamColor = (team: string) => {
    switch (team) {
      case 'acqua': return darkMode ? 'bg-sky-800' : 'bg-sky-500';
      case 'erba': return darkMode ? 'bg-green-800' : 'bg-green-500';
      case 'fuoco': return darkMode ? 'bg-red-800' : 'bg-red-500';
      default: return darkMode ? 'bg-gray-700' : 'bg-gray-500';
    }
  };
  
  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case 'coding': return 'Coding Challenge';
      case 'ctf': return 'Capture The Flag';
      case 'quiz': return 'Quiz';
      case 'hackathon': return 'Hackathon';
      default: return 'Altro';
    }
  };
  
  const getThemeStyles = () => {
    switch(theme) {
      case 'acqua':
        return {
          bgGradient: darkMode 
            ? 'bg-gradient-to-r from-sky-900 to-blue-900' 
            : 'bg-gradient-to-r from-sky-400 to-blue-500',
          textColor: 'text-white',
          accentBg: darkMode ? 'bg-sky-800' : 'bg-sky-400',
          cardBg: darkMode ? 'bg-slate-800' : 'bg-white',
          textDefault: darkMode ? 'text-gray-200' : 'text-gray-800',
          cardBorder: darkMode ? 'border-sky-700' : 'border-sky-200',
          decoration: (
            <div className="absolute right-0 bottom-0 w-32 h-32 opacity-20">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,25 Q25,0 50,25 T100,25 T150,25" fill="none" stroke="white" strokeWidth="5">
                  <animate attributeName="d" dur="10s" repeatCount="indefinite" 
                      values="M0,25 Q25,0 50,25 T100,25;
                              M0,35 Q25,10 50,35 T100,35;
                              M0,25 Q25,0 50,25 T100,25" />
                </path>
                <path d="M0,50 Q25,25 50,50 T100,50 T150,50" fill="none" stroke="white" strokeWidth="5">
                  <animate attributeName="d" dur="10s" repeatCount="indefinite" 
                      values="M0,50 Q25,25 50,50 T100,50;
                              M0,60 Q25,35 50,60 T100,60;
                              M0,50 Q25,25 50,50 T100,50" />
                </path>
                <path d="M0,75 Q25,50 50,75 T100,75 T150,75" fill="none" stroke="white" strokeWidth="5">
                  <animate attributeName="d" dur="10s" repeatCount="indefinite" 
                      values="M0,75 Q25,50 50,75 T100,75;
                              M0,85 Q25,60 50,85 T100,85;
                              M0,75 Q25,50 50,75 T100,75" />
                </path>
              </svg>
            </div>
          )
        };
      case 'fuoco':
        return {
          bgGradient: darkMode 
            ? 'bg-gradient-to-r from-red-900 to-orange-900' 
            : 'bg-gradient-to-r from-red-500 to-orange-500',
          textColor: 'text-white',
          accentBg: darkMode ? 'bg-red-800' : 'bg-red-400',
          cardBg: darkMode ? 'bg-slate-800' : 'bg-white',
          textDefault: darkMode ? 'text-gray-200' : 'text-gray-800',
          cardBorder: darkMode ? 'border-red-700' : 'border-red-200',
          decoration: (
            <div className="absolute right-0 bottom-0 w-32 h-32 opacity-20">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,15 Q55,5 60,15 T70,15 T80,15 T90,25 T85,35 T90,45 T80,55 T90,65 T80,75 T70,85 T60,90 T50,95 T40,90 T30,85 T20,75 T10,65 T20,55 T10,45 T15,35 T10,25 T20,15 T30,15 T40,15 T50,15" fill="none" stroke="white" strokeWidth="2">
                  <animate attributeName="d" dur="3s" repeatCount="indefinite" 
                      values="M50,15 Q55,5 60,15 T70,15 T80,15 T90,25 T85,35 T90,45 T80,55 T90,65 T80,75 T70,85 T60,90 T50,95 T40,90 T30,85 T20,75 T10,65 T20,55 T10,45 T15,35 T10,25 T20,15 T30,15 T40,15 T50,15;
                              M50,15 Q60,5 65,15 T75,20 T85,15 T95,25 T90,40 T95,45 T85,60 T95,65 T85,80 T75,90 T65,95 T50,100 T35,95 T25,90 T15,80 T5,65 T15,60 T5,45 T10,40 T5,25 T15,15 T25,20 T35,15 T50,15;
                              M50,15 Q55,5 60,15 T70,15 T80,15 T90,25 T85,35 T90,45 T80,55 T90,65 T80,75 T70,85 T60,90 T50,95 T40,90 T30,85 T20,75 T10,65 T20,55 T10,45 T15,35 T10,25 T20,15 T30,15 T40,15 T50,15" />
                </path>
              </svg>
            </div>
          )
        };
      case 'erba':
        return {
          bgGradient: darkMode 
            ? 'bg-gradient-to-r from-green-900 to-emerald-900' 
            : 'bg-gradient-to-r from-green-500 to-emerald-500',
          textColor: 'text-white',
          accentBg: darkMode ? 'bg-green-800' : 'bg-green-400',
          cardBg: darkMode ? 'bg-slate-800' : 'bg-white',
          textDefault: darkMode ? 'text-gray-200' : 'text-gray-800',
          cardBorder: darkMode ? 'border-green-700' : 'border-green-200',
          decoration: (
            <div className="absolute right-0 bottom-0 w-32 h-32 opacity-20">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,80 Q30,85 50,75 T80,80" fill="none" stroke="white" strokeWidth="2">
                  <animate attributeName="d" dur="8s" repeatCount="indefinite" 
                    values="M10,80 Q30,85 50,75 T80,80;
                            M10,75 Q30,80 50,70 T80,75;
                            M10,80 Q30,85 50,75 T80,80" />
                </path>
                <path d="M20,50 L25,20 L30,50 L20,50" fill="white">
                  <animate attributeName="d" dur="5s" repeatCount="indefinite" 
                    values="M20,50 L25,20 L30,50 L20,50;
                            M20,50 L25,15 L30,50 L20,50;
                            M20,50 L25,20 L30,50 L20,50" />
                </path>
                <path d="M40,60 L45,25 L50,60 L40,60" fill="white">
                  <animate attributeName="d" dur="6s" repeatCount="indefinite" 
                    values="M40,60 L45,25 L50,60 L40,60;
                            M40,60 L45,20 L50,60 L40,60;
                            M40,60 L45,25 L50,60 L40,60" />
                </path>
                <path d="M60,55 L65,15 L70,55 L60,55" fill="white">
                  <animate attributeName="d" dur="7s" repeatCount="indefinite" 
                    values="M60,55 L65,15 L70,55 L60,55;
                            M60,55 L65,10 L70,55 L60,55;
                            M60,55 L65,15 L70,55 L60,55" />
                </path>
              </svg>
            </div>
          )
        };
      default:
        return {
          bgGradient: darkMode 
            ? 'bg-gradient-to-r from-sky-900 to-blue-900' 
            : 'bg-gradient-to-r from-sky-400 to-blue-500',
          textColor: 'text-white',
          accentBg: darkMode ? 'bg-sky-800' : 'bg-sky-400',
          cardBg: darkMode ? 'bg-slate-800' : 'bg-white',
          textDefault: darkMode ? 'text-gray-200' : 'text-gray-800',
          cardBorder: darkMode ? 'border-sky-700' : 'border-sky-200',
          decoration: null
        };
    }
  };
  
  const themeStyles = getThemeStyles();
  
  if (!event) {
    return (
      <div className={`container mx-auto px-4 py-16 text-center ${themeStyles.textDefault}`}>
        <h1 className="text-2xl font-bold mb-4">Evento non trovato</h1>
        <p className="mb-8">L&apos evento che stai cercando non esiste o è stato rimosso.</p>
        <Link 
          href="/eventi"
          className={`px-6 py-3 rounded-lg ${getButtonClass()}`}
        >
          Torna agli eventi
        </Link>
      </div>
    );
  }
  
  return (
    <div className={`container mx-auto px-4 py-8 mt-16 ${themeStyles.textDefault}`}>
      <div className="mb-4">
        <Link 
          href="/eventi"
          className={`flex items-center ${themeStyles.textDefault} hover:opacity-75`}
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Torna agli eventi
        </Link>
      </div>
      
      {/* Header dell'evento */}
      <div className={`relative overflow-hidden rounded-lg shadow-xl mb-8 border ${themeStyles.cardBorder}`}>
        <div className={`relative ${themeStyles.bgGradient} p-6 ${themeStyles.textColor}`}>
          {themeStyles.decoration}
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-20`}>
                    {getEventTypeLabel(event.type)}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-20">
                    {participants.length} iscritti
                  </span>
                </div>
              </div>
              
              <button
                onClick={handleRegistration}
                className={`${getButtonClass()}`}
                disabled={!currentUser}
              >
                {isRegistered ? 'Annulla iscrizione' : 'Iscriviti all&apos;evento'}
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <div className="text-sm text-white text-opacity-80">Data</div>
                  <div className="font-medium">
                    {new Date(event.date).toLocaleDateString('it-IT', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="text-sm text-white text-opacity-80">Orario</div>
                  <div className="font-medium">{event.time}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="text-sm text-white text-opacity-80">Durata</div>
                  <div className="font-medium">{event.duration}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {event?.imageUrl && (
          <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        
        <div className={`p-6 ${themeStyles.cardBg}`}>
          <div className="prose max-w-none">
            {event.description.split('\n').map((paragraph, index) => (
              <p key={index} className={`${paragraph === '' ? 'mb-4' : undefined} ${themeStyles.textDefault}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      
      {/* Partecipanti */}
      <div className={`rounded-lg shadow-md overflow-hidden mb-8 border ${themeStyles.cardBorder} ${themeStyles.cardBg}`}>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-6">Partecipanti</h2>
          
          {participants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {participants.map(user => (
                <div key={user.id} className={`flex items-center p-3 border rounded-lg ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <div className={`w-10 h-10 rounded-full ${getTeamColor(user.team)} flex items-center justify-center text-white font-bold mr-3`}>
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-medium">{user.username}</div>
                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {user.team === 'acqua' ? 'Team Acqua' : 
                       user.team === 'erba' ? 'Team Erba' : 
                       'Team Fuoco'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Nessun partecipante si è ancora iscritto a questo evento.
            </p>
          )}
        </div>
      </div>
      
      {/* Modale di conferma */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${themeStyles.cardBg} rounded-lg shadow-xl max-w-md w-full p-6`}>
            <h3 className="text-xl font-bold mb-4">Conferma annullamento</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Sei sicuro di voler annullare la tua iscrizione a questo evento? 
              Questa azione non può essere annullata.
            </p>
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setShowConfirmModal(false)}
                className={`px-4 py-2 border rounded-lg ${
                  darkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                Annulla
              </button>
              <button 
                onClick={handleUnregister}
                className={`px-4 py-2 rounded-lg ${
                  theme === 'acqua' ? (darkMode ? 'bg-sky-700 hover:bg-sky-600' : 'bg-sky-500 hover:bg-sky-400') :
                  theme === 'erba' ? (darkMode ? 'bg-green-700 hover:bg-green-600' : 'bg-green-500 hover:bg-green-400') :
                  (darkMode ? 'bg-red-700 hover:bg-red-600' : 'bg-red-500 hover:bg-red-400')
                } text-white`}
              >
                Conferma
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 