'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import EventCard from '@/components/EventCard';
import { useAppStore, Event } from '@/store';

// Dati di esempio per gli eventi
const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Hackathon - Web3 Challenge',
    description: 'Partecipa al nostro hackathon di 48 ore dedicato allo sviluppo di applicazioni Web3. Metti alla prova le tue competenze in blockchain, smart contracts e applicazioni decentralizzate.',
    date: '2024-06-15',
    time: '10:00',
    duration: '48h',
    type: 'hackathon',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4'
  },
  {
    id: '2',
    title: 'CTF - Security Bootcamp',
    description: 'Una competizione Capture The Flag incentrata sulla sicurezza informatica. Risolvi sfide di penetration testing, reverse engineering e web exploitation.',
    date: '2024-05-20',
    time: '14:30',
    duration: '6h',
    type: 'ctf',
    imageUrl: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87'
  },
  {
    id: '3',
    title: 'Quiz - Algoritmi e Strutture Dati',
    description: 'Test le tue conoscenze su algoritmi e strutture dati con questo quiz competitivo. Sfida gli altri studenti e scala la classifica!',
    date: '2024-05-05',
    time: '16:00',
    duration: '2h',
    type: 'quiz'
  },
  {
    id: '4',
    title: 'Coding Challenge - Ottimizzazione',
    description: 'Sfida di programmazione focalizzata sull\'ottimizzazione degli algoritmi. Risolvi problemi complessi nel minor tempo e con il codice più efficiente.',
    date: '2024-07-10',
    time: '15:00',
    duration: '3h',
    type: 'coding',
    imageUrl: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011'
  },
  {
    id: '5',
    title: 'Hackathon - AI & Data Science',
    description: 'Un hackathon dedicato all\'intelligenza artificiale e alla data science. Crea modelli innovativi per risolvere problemi reali utilizzando dataset forniti.',
    date: '2024-08-25',
    time: '09:00',
    duration: '36h',
    type: 'hackathon',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40'
  },
  {
    id: '6',
    title: 'CTF - Web Security',
    description: 'Capture The Flag focalizzato sulla sicurezza web. Trova vulnerabilità, sfrutta debolezze e proteggi applicazioni web da attacchi comuni.',
    date: '2024-06-05',
    time: '18:00',
    duration: '4h',
    type: 'ctf'
  }
];

type FilterType = 'all' | 'coding' | 'ctf' | 'quiz' | 'hackathon' | 'altro';

export default function EventiPage() {
  const { theme } = useTheme();
  const { currentUser } = useAppStore();
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Carica gli eventi quando il componente viene montato
  useEffect(() => {
    // In un'app reale, qui caricheremmo i dati dal backend
    // Per ora usiamo i dati di esempio
    setEvents(mockEvents);
    setFilteredEvents(mockEvents);
  }, []);
  
  // Filtra gli eventi in base al tipo selezionato e al termine di ricerca
  useEffect(() => {
    let result = events;
    
    // Applica il filtro per tipo
    if (activeFilter !== 'all') {
      result = result.filter(event => event.type === activeFilter);
    }
    
    // Applica il filtro per termine di ricerca
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(event =>
        event.title.toLowerCase().includes(term) ||
        event.description.toLowerCase().includes(term)
      );
    }
    
    setFilteredEvents(result);
  }, [events, activeFilter, searchTerm]);
  
  const getButtonClass = (filterType: FilterType) => {
    const isActive = activeFilter === filterType;
    const baseClasses = 'px-4 py-2 rounded-lg text-sm font-medium transition-colors';
    
    if (isActive) {
      switch(theme) {
        case 'acqua':
          return `${baseClasses} bg-blue-600 text-white`;
        case 'erba':
          return `${baseClasses} bg-green-600 text-white`;
        case 'fuoco':
          return `${baseClasses} bg-red-600 text-white`;
        default:
          return `${baseClasses} bg-blue-600 text-white`;
      }
    }
    
    return `${baseClasses} bg-gray-100 text-gray-700 hover:bg-gray-200`;
  };
  
  // Verifica se l'utente è registrato a un evento
  const isUserRegistered = (eventId: string) => {
    const event = events.find(e => e.id === eventId);
    return event?.participants?.includes(currentUser?.id || '') || false;
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Eventi</h1>
        <p className="text-gray-600">Scopri tutti gli eventi in programma e iscriviti per partecipare!</p>
      </div>
      
      {/* Filtri e ricerca */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="mb-6">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Cerca eventi
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cerca per titolo o descrizione..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500"
          />
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Filtra per tipo</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={getButtonClass('all')}
            >
              Tutti
            </button>
            <button
              onClick={() => setActiveFilter('coding')}
              className={getButtonClass('coding')}
            >
              Coding
            </button>
            <button
              onClick={() => setActiveFilter('ctf')}
              className={getButtonClass('ctf')}
            >
              CTF
            </button>
            <button
              onClick={() => setActiveFilter('quiz')}
              className={getButtonClass('quiz')}
            >
              Quiz
            </button>
            <button
              onClick={() => setActiveFilter('hackathon')}
              className={getButtonClass('hackathon')}
            >
              Hackathon
            </button>
            <button
              onClick={() => setActiveFilter('altro')}
              className={getButtonClass('altro')}
            >
              Altro
            </button>
          </div>
        </div>
      </div>
      
      {/* Lista eventi */}
      <div>
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map(event => (
              <EventCard 
                key={event.id} 
                {...event} 
                isRegistered={isUserRegistered(event.id)} 
              />
            ))}
          </div>
        ) : (
          <div className="bg-white p-10 rounded-lg shadow-md text-center">
            <p className="text-gray-600 mb-4">Nessun evento trovato con i filtri selezionati.</p>
            <button 
              onClick={() => {
                setActiveFilter('all');
                setSearchTerm('');
              }}
              className={`text-white px-4 py-2 rounded ${
                theme === 'acqua' ? 'bg-blue-600 hover:bg-blue-700' : 
                theme === 'erba' ? 'bg-green-600 hover:bg-green-700' : 
                'bg-red-600 hover:bg-red-700'
              }`}
            >
              Reimposta filtri
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 