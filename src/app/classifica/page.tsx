'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useAppStore, User, Team } from '@/store';

// Dati di esempio per la classifica
const mockLeaderboard: User[] = [
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
  },
  {
    id: '6',
    username: 'securitysnake',
    team: 'erba',
    score: 850,
    skills: { 'Coding': 70, 'Security': 95, 'Algorithms': 72 }
  },
  {
    id: '7',
    username: 'bitbaron',
    team: 'acqua',
    score: 800,
    skills: { 'Coding': 78, 'Security': 75, 'Algorithms': 85 }
  },
  {
    id: '8',
    username: 'codeartisan',
    team: 'fuoco',
    score: 750,
    skills: { 'Coding': 92, 'Security': 68, 'Algorithms': 80 }
  },
  {
    id: '9',
    username: 'devdynamo',
    team: 'erba',
    score: 700,
    skills: { 'Coding': 83, 'Security': 72, 'Algorithms': 76 }
  },
  {
    id: '10',
    username: 'hackslash',
    team: 'acqua',
    score: 650,
    skills: { 'Coding': 75, 'Security': 85, 'Algorithms': 70 }
  }
];

type SortBy = 'score' | 'coding' | 'security' | 'algorithms';
type FilterTeam = 'all' | Team;

export default function ClassificaPage() {
  const { theme } = useTheme();
  const { currentUser } = useAppStore();
  const [leaderboard, setLeaderboard] = useState<User[]>([]);
  const [sortBy, setSortBy] = useState<SortBy>('score');
  const [filterTeam, setFilterTeam] = useState<FilterTeam>('all');
  
  // Carica la classifica quando il componente viene montato
  useEffect(() => {
    // In un'app reale, qui caricheremmo i dati dal backend
    // Per ora usiamo i dati di esempio
    setLeaderboard(mockLeaderboard);
  }, []);
  
  // Filtra e ordina la classifica
  const getSortedAndFilteredLeaderboard = () => {
    let filtered = [...leaderboard];
    
    // Applica il filtro per team
    if (filterTeam !== 'all') {
      filtered = filtered.filter(user => user.team === filterTeam);
    }
    
    // Ordina in base al criterio selezionato
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'score':
          return b.score - a.score;
        case 'coding':
          return (b.skills['Coding'] || 0) - (a.skills['Coding'] || 0);
        case 'security':
          return (b.skills['Security'] || 0) - (a.skills['Security'] || 0);
        case 'algorithms':
          return (b.skills['Algorithms'] || 0) - (a.skills['Algorithms'] || 0);
        default:
          return b.score - a.score;
      }
    });
  };
  
  const sortedLeaderboard = getSortedAndFilteredLeaderboard();
  
  // Ottieni il colore in base al team
  const getTeamColor = (team: Team) => {
    switch (team) {
      case 'acqua': return 'bg-sky-700';
      case 'erba': return 'bg-green-700';
      case 'fuoco': return 'bg-red-700';
      default: return 'bg-gray-700';
    }
  };
  
  // Ottieni lo stile per il bottone attivo
  const getActiveButtonStyle = (isActive: boolean) => {
    if (!isActive) return 'bg-slate-800 text-gray-300 hover:bg-slate-700';
    
    switch (theme) {
      case 'acqua': return 'bg-sky-700 text-white';
      case 'erba': return 'bg-green-700 text-white';
      case 'fuoco': return 'bg-red-700 text-white';
      default: return 'bg-sky-700 text-white';
    }
  };
  
  // Formatta il nome team
  const formatTeamName = (team: Team) => {
    switch (team) {
      case 'acqua': return 'Team Acqua';
      case 'erba': return 'Team Erba';
      case 'fuoco': return 'Team Fuoco';
      default: return 'Sconosciuto';
    }
  };
  
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
          textColor: 'text-sky-100',
          textMuted: 'text-gray-400',
          link: 'text-sky-400 hover:text-sky-300'
        };
    }
  };
  
  const styles = getThemeStyles();
  
  return (
    <div className={`min-h-screen ${styles.mainGradient} pt-8 pb-16`}>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className={`text-3xl font-bold mb-2 ${styles.textColor}`}>Classifica</h1>
          <p className={styles.textMuted}>Scopri chi sono i migliori partecipanti alle competizioni!</p>
        </div>
        
        {/* Filtri e ordinamento */}
        <div className={`${styles.cardBg} rounded-lg shadow-md p-6 mb-8 border ${styles.border}`}>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <h3 className={`text-sm font-medium ${styles.textColor} mb-2`}>Filtra per team</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterTeam('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${getActiveButtonStyle(filterTeam === 'all')}`}
                >
                  Tutti i team
                </button>
                <button
                  onClick={() => setFilterTeam('acqua')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${getActiveButtonStyle(filterTeam === 'acqua')}`}
                >
                  Team Acqua
                </button>
                <button
                  onClick={() => setFilterTeam('erba')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${getActiveButtonStyle(filterTeam === 'erba')}`}
                >
                  Team Erba
                </button>
                <button
                  onClick={() => setFilterTeam('fuoco')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${getActiveButtonStyle(filterTeam === 'fuoco')}`}
                >
                  Team Fuoco
                </button>
              </div>
            </div>
            
            <div>
              <h3 className={`text-sm font-medium ${styles.textColor} mb-2`}>Ordina per</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSortBy('score')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${getActiveButtonStyle(sortBy === 'score')}`}
                >
                  Punteggio
                </button>
                <button
                  onClick={() => setSortBy('coding')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${getActiveButtonStyle(sortBy === 'coding')}`}
                >
                  Coding
                </button>
                <button
                  onClick={() => setSortBy('security')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${getActiveButtonStyle(sortBy === 'security')}`}
                >
                  Security
                </button>
                <button
                  onClick={() => setSortBy('algorithms')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${getActiveButtonStyle(sortBy === 'algorithms')}`}
                >
                  Algorithms
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabella classifica */}
        <div className={`${styles.cardBg} rounded-lg shadow-md overflow-hidden border ${styles.border}`}>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-700">
              <thead className="bg-slate-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Posizione
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Utente
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Team
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Punteggio
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Skills
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {sortedLeaderboard.map((user, index) => (
                  <tr 
                    key={user.id} 
                    className={
                      currentUser?.id === user.id 
                        ? `bg-opacity-25 ${styles.highlight}` 
                        : ''
                    }
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`
                          flex items-center justify-center h-8 w-8 rounded-full 
                          ${index < 3 ? 'bg-amber-600 text-white' : 'bg-slate-700 text-gray-300'}
                          font-bold
                        `}>
                          {index + 1}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm font-medium ${styles.textColor}`}>{user.username}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`h-4 w-4 rounded-full mr-2 ${getTeamColor(user.team)}`}></div>
                        <span className={`text-sm ${styles.textColor}`}>{formatTeamName(user.team)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-bold text-amber-400">{user.score}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col space-y-1">
                        {Object.entries(user.skills).map(([skill, value]) => (
                          <div key={skill} className="flex items-center">
                            <span className={`text-xs ${styles.textMuted} w-20`}>{skill}</span>
                            <div className="h-2 w-24 bg-slate-700 rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${
                                  skill === 'Coding' ? 'bg-purple-600' : 
                                  skill === 'Security' ? 'bg-yellow-600' : 'bg-blue-600'
                                }`}
                                style={{ width: `${value}%` }}
                              ></div>
                            </div>
                            <span className={`text-xs ${styles.textMuted} ml-2`}>{value}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className={`${styles.cardBg} p-6 rounded-lg shadow-md border ${styles.border}`}>
            <h3 className={`text-lg font-medium mb-4 ${styles.textColor}`}>Punteggio per Team</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className={`text-sm ${styles.textColor}`}>Team Acqua</span>
                  <span className={`text-sm ${styles.textMuted}`}>
                    {leaderboard.filter(u => u.team === 'acqua').reduce((sum, u) => sum + u.score, 0)}
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-sky-600 rounded-full"
                    style={{ 
                      width: `${leaderboard.length ? 
                        (leaderboard.filter(u => u.team === 'acqua').reduce((sum, u) => sum + u.score, 0) / 
                        leaderboard.reduce((sum, u) => sum + u.score, 0) * 100) : 0
                      }%` 
                    }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className={`text-sm ${styles.textColor}`}>Team Fuoco</span>
                  <span className={`text-sm ${styles.textMuted}`}>
                    {leaderboard.filter(u => u.team === 'fuoco').reduce((sum, u) => sum + u.score, 0)}
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-red-600 rounded-full"
                    style={{ 
                      width: `${leaderboard.length ? 
                        (leaderboard.filter(u => u.team === 'fuoco').reduce((sum, u) => sum + u.score, 0) / 
                        leaderboard.reduce((sum, u) => sum + u.score, 0) * 100) : 0
                      }%` 
                    }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className={`text-sm ${styles.textColor}`}>Team Erba</span>
                  <span className={`text-sm ${styles.textMuted}`}>
                    {leaderboard.filter(u => u.team === 'erba').reduce((sum, u) => sum + u.score, 0)}
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-600 rounded-full"
                    style={{ 
                      width: `${leaderboard.length ? 
                        (leaderboard.filter(u => u.team === 'erba').reduce((sum, u) => sum + u.score, 0) / 
                        leaderboard.reduce((sum, u) => sum + u.score, 0) * 100) : 0
                      }%` 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`${styles.cardBg} p-6 rounded-lg shadow-md border ${styles.border}`}>
            <h3 className={`text-lg font-medium mb-4 ${styles.textColor}`}>Top Skill: Coding</h3>
            <div className="space-y-3">
              {leaderboard
                .sort((a, b) => (b.skills['Coding'] || 0) - (a.skills['Coding'] || 0))
                .slice(0, 5)
                .map(user => (
                  <div key={user.id} className="flex items-center">
                    <div className={`h-8 w-8 rounded-full ${getTeamColor(user.team)} flex items-center justify-center text-white font-bold mr-3`}>
                      {user.username.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className={`text-sm font-medium ${styles.textColor}`}>{user.username}</span>
                        <span className={`text-sm ${styles.textMuted}`}>{user.skills['Coding']}</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden mt-1">
                        <div 
                          className="h-full bg-purple-600 rounded-full"
                          style={{ width: `${user.skills['Coding']}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          
          <div className={`${styles.cardBg} p-6 rounded-lg shadow-md border ${styles.border}`}>
            <h3 className={`text-lg font-medium mb-4 ${styles.textColor}`}>Top Skill: Security</h3>
            <div className="space-y-3">
              {leaderboard
                .sort((a, b) => (b.skills['Security'] || 0) - (a.skills['Security'] || 0))
                .slice(0, 5)
                .map(user => (
                  <div key={user.id} className="flex items-center">
                    <div className={`h-8 w-8 rounded-full ${getTeamColor(user.team)} flex items-center justify-center text-white font-bold mr-3`}>
                      {user.username.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className={`text-sm font-medium ${styles.textColor}`}>{user.username}</span>
                        <span className={`text-sm ${styles.textMuted}`}>{user.skills['Security']}</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden mt-1">
                        <div 
                          className="h-full bg-yellow-600 rounded-full"
                          style={{ width: `${user.skills['Security']}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 