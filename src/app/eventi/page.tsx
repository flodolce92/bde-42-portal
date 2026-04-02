'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import EventCard from '@/components/EventCard';
import { useAppStore, Event } from '@/store';
import { mockEvents } from './mockEvents';

type FilterType = 'all' | 'coding' | 'ctf' | 'quiz' | 'hackathon' | 'workshop';

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
			result = result.filter((event) => event.type === activeFilter);
		}

		// Applica il filtro per termine di ricerca
		if (searchTerm.trim() !== '') {
			const term = searchTerm.toLowerCase();
			result = result.filter(
				(event) =>
					event.title.toLowerCase().includes(term) ||
					event.description.toLowerCase().includes(term),
			);
		}

		setFilteredEvents(result);
	}, [events, activeFilter, searchTerm]);

	const getButtonClass = (filterType: FilterType) => {
		const isActive = activeFilter === filterType;
		const baseClasses =
			'px-4 py-2 rounded-lg text-sm font-medium transition-colors';

		if (isActive) {
			switch (theme) {
				case 'acqua':
					return `${baseClasses} bg-sky-700 text-white`;
				case 'erba':
					return `${baseClasses} bg-green-700 text-white`;
				case 'fuoco':
					return `${baseClasses} bg-red-700 text-white`;
				default:
					return `${baseClasses} bg-sky-700 text-white`;
			}
		}

		return `${baseClasses} bg-slate-800 text-gray-300 hover:bg-slate-700`;
	};

	// Verifica se l'utente è registrato a un evento
	const isUserRegistered = (eventId: string) => {
		const event = events.find((e) => e.id === eventId);
		return event?.participants?.includes(currentUser?.id || '') || false;
	};

	// Funzione per ottenere gli stili basati sul tema
	const getThemeStyles = () => {
		switch (theme) {
			case 'acqua':
				return {
					mainGradient: 'bg-gradient-to-r from-sky-950 via-blue-950 to-sky-900',
					cardBg: 'bg-slate-900',
					border: 'border-sky-900',
					highlight: 'bg-sky-800 text-sky-100',
					button: 'bg-sky-700 hover:bg-sky-600 text-white',
					textColor: 'text-sky-100',
					textMuted: 'text-gray-400',
					link: 'text-sky-400 hover:text-sky-300',
				};
			case 'fuoco':
				return {
					mainGradient:
						'bg-gradient-to-r from-red-950 via-orange-950 to-red-900',
					cardBg: 'bg-slate-900',
					border: 'border-red-900',
					highlight: 'bg-red-800 text-red-100',
					button: 'bg-red-700 hover:bg-red-600 text-white',
					textColor: 'text-red-100',
					textMuted: 'text-gray-400',
					link: 'text-red-400 hover:text-red-300',
				};
			case 'erba':
				return {
					mainGradient:
						'bg-gradient-to-r from-green-950 via-emerald-950 to-green-900',
					cardBg: 'bg-slate-900',
					border: 'border-green-900',
					highlight: 'bg-green-800 text-green-100',
					button: 'bg-green-700 hover:bg-green-600 text-white',
					textColor: 'text-green-100',
					textMuted: 'text-gray-400',
					link: 'text-green-400 hover:text-green-300',
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
					link: 'text-sky-400 hover:text-sky-300',
				};
		}
	};

	const styles = getThemeStyles();

	return (
		<div className={`min-h-screen ${styles.mainGradient} pt-8 pb-16`}>
			<div className="container mx-auto px-4 py-8">
				<div className="mb-8">
					<h1 className={`text-3xl font-bold mb-2 ${styles.textColor}`}>
						Eventi
					</h1>
					<p className={styles.textMuted}>
						Scopri tutti gli eventi in programma e iscriviti per partecipare!
					</p>
				</div>

				{/* Filtri e ricerca */}
				<div
					className={`${styles.cardBg} rounded-lg shadow-md p-6 mb-8 border ${styles.border}`}>
					<div className="mb-6">
						<label
							htmlFor="search"
							className={`block text-sm font-medium ${styles.textColor} mb-1`}>
							Cerca eventi
						</label>
						<input
							type="text"
							id="search"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							placeholder="Cerca per titolo o descrizione..."
							className="w-full px-4 py-2 border bg-slate-800 border-slate-700 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500 text-gray-200"
						/>
					</div>

					<div>
						<h3 className={`text-sm font-medium ${styles.textColor} mb-3`}>
							Filtra per tipo
						</h3>
						<div className="flex flex-wrap gap-2">
							<button
								onClick={() => setActiveFilter('all')}
								className={getButtonClass('all')}>
								Tutti
							</button>
							<button
								onClick={() => setActiveFilter('coding')}
								className={getButtonClass('coding')}>
								Coding
							</button>
							<button
								onClick={() => setActiveFilter('ctf')}
								className={getButtonClass('ctf')}>
								CTF
							</button>
							<button
								onClick={() => setActiveFilter('quiz')}
								className={getButtonClass('quiz')}>
								Quiz
							</button>
							<button
								onClick={() => setActiveFilter('hackathon')}
								className={getButtonClass('hackathon')}>
								Hackathon
							</button>
							<button
								onClick={() => setActiveFilter('workshop')}
								className={getButtonClass('workshop')}>
								Workshop
							</button>
						</div>
					</div>
				</div>

				{/* Lista eventi */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredEvents.length > 0 ? (
						filteredEvents.map((event) => (
							<EventCard
								key={event.id}
								id={event.id}
								title={event.title}
								description={event.description}
								date={event.date}
								time={event.time}
								duration={event.duration}
								type={event.type}
								imageUrl={event.imageUrl}
								isRegistered={isUserRegistered(event.id)}
							/>
						))
					) : (
						<div
							className={`col-span-full text-center py-12 ${styles.textMuted}`}>
							<svg
								className="mx-auto h-12 w-12 mb-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1.5}
									d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<h3 className={`text-xl font-medium mb-1 ${styles.textColor}`}>
								Nessun evento trovato
							</h3>
							<p>Prova a modificare i filtri di ricerca</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
