import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Definizione dei tipi
export type Team = 'acqua' | 'erba' | 'fuoco';

export interface User {
  id: string;
  username: string;
  team: Team;
  score: number;
  skills: Record<string, number>; // mappa delle skill e relativi livelli
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  type: 'coding' | 'ctf' | 'quiz' | 'hackathon' | 'altro';
  imageUrl?: string;
  participants?: string[]; // array di ID utenti
}

// Dati di esempio
const exampleUsers: User[] = [
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

const exampleEvents: Event[] = [
  {
    id: '1',
    title: 'Hackathon - Web3 Challenge',
    description: 'Partecipa al nostro hackathon di 48 ore dedicato allo sviluppo di applicazioni Web3. Metti alla prova le tue competenze in blockchain, smart contracts e applicazioni decentralizzate.',
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
    description: 'Una competizione Capture The Flag incentrata sulla sicurezza informatica. Risolvi sfide di penetration testing, reverse engineering e web exploitation.',
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
    description: 'Test le tue conoscenze su algoritmi e strutture dati con questo quiz competitivo. Sfida gli altri studenti e scala la classifica!',
    date: '2024-05-05',
    time: '16:00',
    duration: '2h',
    type: 'quiz',
    participants: ['2', '3', '5']
  }
];

interface AppState {
  // Utente corrente
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  
  // Lista degli utenti
  users: User[];
  addUser: (user: User) => void;
  removeUser: (userId: string) => void;
  
  // Lista degli eventi
  events: Event[];
  addEvent: (event: Event) => void;
  removeEvent: (eventId: string) => void;
  updateEvent: (eventId: string, eventData: Partial<Event>) => void;
  
  // Iscrizioni agli eventi
  registerForEvent: (eventId: string, userId: string) => void;
  unregisterFromEvent: (eventId: string, userId: string) => void;
  
  // Classifica
  leaderboard: User[];
  updateScore: (userId: string, additionalScore: number) => void;
  
  // Gestione skill
  updateSkill: (userId: string, skillName: string, level: number) => void;
}

// Creazione dello store
export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Stato iniziale
      currentUser: exampleUsers[0],  // Utente predefinito per test
      users: exampleUsers,  // Utilizzo dei dati di esempio
      events: exampleEvents,  // Utilizzo degli eventi di esempio
      leaderboard: exampleUsers,  // La classifica iniziale è uguale agli utenti
      
      // Azioni per l'utente
      setCurrentUser: (user) => set({ currentUser: user }),
      
      // Azioni per gli utenti
      addUser: (user) => set((state) => ({ 
        users: [...state.users, user],
        leaderboard: [...state.leaderboard, user] 
      })),
      removeUser: (userId) => set((state) => ({ 
        users: state.users.filter(user => user.id !== userId),
        leaderboard: state.leaderboard.filter(user => user.id !== userId)
      })),
      
      // Azioni per gli eventi
      addEvent: (event) => set((state) => ({ 
        events: [...state.events, event] 
      })),
      removeEvent: (eventId) => set((state) => ({ 
        events: state.events.filter(event => event.id !== eventId) 
      })),
      updateEvent: (eventId, eventData) => set((state) => ({
        events: state.events.map(event => 
          event.id === eventId ? { ...event, ...eventData } : event
        )
      })),
      
      // Azioni per le iscrizioni agli eventi
      registerForEvent: (eventId, userId) => set((state) => ({
        events: state.events.map(event => 
          event.id === eventId 
            ? { 
                ...event, 
                participants: [...(event.participants || []), userId] 
              } 
            : event
        )
      })),
      unregisterFromEvent: (eventId, userId) => set((state) => ({
        events: state.events.map(event => 
          event.id === eventId 
            ? { 
                ...event, 
                participants: (event.participants || []).filter(id => id !== userId) 
              } 
            : event
        )
      })),
      
      // Azioni per la classifica e i punteggi
      updateScore: (userId, additionalScore) => set((state) => {
        const updatedLeaderboard = state.leaderboard.map(user => 
          user.id === userId 
            ? { ...user, score: user.score + additionalScore } 
            : user
        );
        
        const updatedUsers = state.users.map(user => 
          user.id === userId 
            ? { ...user, score: user.score + additionalScore } 
            : user
        );
        
        return {
          leaderboard: updatedLeaderboard,
          users: updatedUsers,
          currentUser: state.currentUser && state.currentUser.id === userId 
            ? { ...state.currentUser, score: state.currentUser.score + additionalScore } 
            : state.currentUser
        };
      }),
      
      // Azioni per la gestione delle skill
      updateSkill: (userId, skillName, level) => set((state) => {
        // Aggiorna la skill dell'utente nella classifica
        const updatedLeaderboard = state.leaderboard.map(user => 
          user.id === userId 
            ? { 
                ...user, 
                skills: { 
                  ...user.skills, 
                  [skillName]: level 
                } 
              } 
            : user
        );
        
        // Aggiorna la skill dell'utente nella lista degli utenti
        const updatedUsers = state.users.map(user => 
          user.id === userId 
            ? { 
                ...user, 
                skills: { 
                  ...user.skills, 
                  [skillName]: level 
                } 
              } 
            : user
        );
        
        // Aggiorna anche l'utente corrente se necessario
        const updatedCurrentUser = state.currentUser && state.currentUser.id === userId
          ? { 
              ...state.currentUser, 
              skills: { 
                ...state.currentUser.skills, 
                [skillName]: level 
              }
            }
          : state.currentUser;
        
        return {
          leaderboard: updatedLeaderboard,
          users: updatedUsers,
          currentUser: updatedCurrentUser
        };
      })
    }),
    {
      name: 'bde42-app-storage', // Nome dello storage
      partialize: (state) => ({
        // Salva solo determinate parti dello stato
        currentUser: state.currentUser,
        users: state.users,
        events: state.events,
        leaderboard: state.leaderboard,
      }),
    }
  )
); 