'use client';

import { use, useState, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useAppStore, Event, User } from '@/store';
import Link from 'next/link';
import Image from 'next/image';
import { mockEvents } from '../mockEvents';

const mockParticipants: User[] = [
	{
		id: '1',
		username: 'hackerman42',
		team: 'acqua',
		score: 1250,
		skills: { Coding: 90, Security: 85, Algorithms: 80 },
	},
	{
		id: '2',
		username: 'codemaster',
		team: 'fuoco',
		score: 1150,
		skills: { Coding: 88, Security: 75, Algorithms: 92 },
	},
	{
		id: '3',
		username: 'bytebender',
		team: 'erba',
		score: 1050,
		skills: { Coding: 82, Security: 80, Algorithms: 85 },
	},
	{
		id: '4',
		username: 'datadragon',
		team: 'acqua',
		score: 950,
		skills: { Coding: 75, Security: 90, Algorithms: 78 },
	},
	{
		id: '5',
		username: 'algoguru',
		team: 'fuoco',
		score: 900,
		skills: { Coding: 85, Security: 70, Algorithms: 95 },
	},
];

export default function EventDetail({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = use(params);
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
			return (
				window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)').matches
			);
		}
		// Fallback: per default, impostiamo false
		return false;
	};

	// Controlla se siamo in modalità scura
	const darkMode = isDarkMode();

	useEffect(() => {
		// In un'app reale, qui caricheremmo i dati dal backend
		// Per ora usiamo i dati di esempio
		const foundEvent = mockEvents.find((e) => e.id === id);
		setEvent(foundEvent || null);

		if (foundEvent?.participants) {
			// Filtra i partecipanti che sono presenti nell'evento
			const eventParticipants = mockParticipants.filter((user) =>
				foundEvent.participants?.includes(user.id),
			);
			setParticipants(eventParticipants);

			// Verifica se l'utente corrente è registrato
			if (currentUser) {
				setIsRegistered(foundEvent.participants.includes(currentUser.id));
			}
		}
	}, [id, currentUser]);

	const handleRegistration = () => {
		if (!event || !currentUser) return;

		if (isRegistered) {
			setShowConfirmModal(true);
		} else {
			// Registra l'utente all'evento
			registerForEvent(event.id, currentUser.id);
			setIsRegistered(true);
			setParticipants((prev) => [...prev, currentUser]);
		}
	};

	const handleUnregister = () => {
		if (!event || !currentUser) return;

		// Annulla la registrazione dell'utente
		unregisterFromEvent(event.id, currentUser.id);
		setIsRegistered(false);
		setParticipants((prev) =>
			prev.filter((user) => user.id !== currentUser.id),
		);
		setShowConfirmModal(false);
	};

	const getButtonClass = () => {
		const baseClasses =
			'font-medium py-3 px-6 rounded-lg transition-colors shadow-md';

		if (!isRegistered) {
			switch (theme) {
				case 'acqua':
					return `${baseClasses} text-white bg-sky-700 hover:bg-sky-600`;
				case 'erba':
					return `${baseClasses} text-white bg-green-700 hover:bg-green-600`;
				case 'fuoco':
					return `${baseClasses} text-white bg-red-700 hover:bg-red-600`;
				default:
					return `${baseClasses} text-white bg-sky-700 hover:bg-sky-600`;
			}
		}

		return `${baseClasses} bg-gray-700 text-gray-200 hover:bg-gray-600`;
	};

	const getTeamColor = (team: string) => {
		switch (team) {
			case 'acqua':
				return 'bg-sky-700';
			case 'erba':
				return 'bg-green-700';
			case 'fuoco':
				return 'bg-red-700';
			default:
				return 'bg-gray-700';
		}
	};

	const getEventTypeLabel = (type: string) => {
		switch (type) {
			case 'coding':
				return 'Coding Challenge';
			case 'ctf':
				return 'Capture The Flag';
			case 'quiz':
				return 'Quiz';
			case 'hackathon':
				return 'Hackathon';
			case 'workshop':
				return 'Workshop';
			default:
				return 'Altro';
		}
	};

	const getThemeStyles = () => {
		switch (theme) {
			case 'acqua':
				return {
					bgGradient: 'bg-gradient-to-r from-sky-950 via-blue-950 to-sky-900',
					textColor: 'text-sky-100',
					accentBg: 'bg-sky-800',
					cardBg: 'bg-slate-900',
					textDefault: 'text-gray-200',
					textMuted: 'text-gray-400',
					cardBorder: 'border-sky-800',
					decoration: (
						<div className="absolute right-0 bottom-0 w-32 h-32 opacity-20">
							<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M0,25 Q25,0 50,25 T100,25 T150,25"
									fill="none"
									stroke="white"
									strokeWidth="5">
									<animate
										attributeName="d"
										dur="10s"
										repeatCount="indefinite"
										values="M0,25 Q25,0 50,25 T100,25;
                            M0,25 Q25,50 50,25 T100,25;
                            M0,25 Q25,0 50,25 T100,25"
									/>
								</path>
							</svg>
						</div>
					),
				};
			case 'erba':
				return {
					bgGradient:
						'bg-gradient-to-r from-green-950 via-emerald-950 to-green-900',
					textColor: 'text-green-100',
					accentBg: 'bg-green-800',
					cardBg: 'bg-slate-900',
					textDefault: 'text-gray-200',
					textMuted: 'text-gray-400',
					cardBorder: 'border-green-800',
					decoration: (
						<div className="absolute right-0 bottom-0 w-32 h-32 opacity-20">
							<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M10,90 Q30,70 50,90 T90,90"
									fill="none"
									stroke="white"
									strokeWidth="5">
									<animate
										attributeName="d"
										dur="10s"
										repeatCount="indefinite"
										values="M10,90 Q30,70 50,90 T90,90;
                            M10,90 Q30,110 50,90 T90,90;
                            M10,90 Q30,70 50,90 T90,90"
									/>
								</path>
							</svg>
						</div>
					),
				};
			case 'fuoco':
				return {
					bgGradient: 'bg-gradient-to-r from-red-950 via-orange-950 to-red-900',
					textColor: 'text-red-100',
					accentBg: 'bg-red-800',
					cardBg: 'bg-slate-900',
					textDefault: 'text-gray-200',
					textMuted: 'text-gray-400',
					cardBorder: 'border-red-800',
					decoration: (
						<div className="absolute right-0 bottom-0 w-32 h-32 opacity-20">
							<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M50,10 Q60,40 90,50 Q60,60 50,90 Q40,60 10,50 Q40,40 50,10"
									fill="none"
									stroke="white"
									strokeWidth="5">
									<animate
										attributeName="d"
										dur="8s"
										repeatCount="indefinite"
										values="M50,10 Q60,40 90,50 Q60,60 50,90 Q40,60 10,50 Q40,40 50,10;
                            M50,10 Q70,40 90,50 Q70,60 50,90 Q30,60 10,50 Q30,40 50,10;
                            M50,10 Q60,40 90,50 Q60,60 50,90 Q40,60 10,50 Q40,40 50,10"
									/>
								</path>
							</svg>
						</div>
					),
				};
			default:
				return {
					bgGradient: 'bg-gradient-to-r from-sky-950 via-blue-950 to-sky-900',
					textColor: 'text-sky-100',
					accentBg: 'bg-sky-800',
					cardBg: 'bg-slate-900',
					textDefault: 'text-gray-200',
					textMuted: 'text-gray-400',
					cardBorder: 'border-sky-800',
					decoration: (
						<div className="absolute right-0 bottom-0 w-32 h-32 opacity-20">
							<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M0,25 Q25,0 50,25 T100,25 T150,25"
									fill="none"
									stroke="white"
									strokeWidth="5">
									<animate
										attributeName="d"
										dur="10s"
										repeatCount="indefinite"
										values="M0,25 Q25,0 50,25 T100,25;
                            M0,25 Q25,50 50,25 T100,25;
                            M0,25 Q25,0 50,25 T100,25"
									/>
								</path>
							</svg>
						</div>
					),
				};
		}
	};

	const themeStyles = getThemeStyles();

	if (!event) {
		return (
			<div
				className={`container mx-auto px-4 py-16 text-center ${themeStyles.textDefault}`}>
				<h1 className="text-2xl font-bold mb-4">Evento non trovato</h1>
				<p className="mb-8">
					L&apos evento che stai cercando non esiste o è stato rimosso.
				</p>
				<Link
					href="/events"
					className={`px-6 py-3 rounded-lg ${getButtonClass()}`}>
					Torna agli eventi
				</Link>
			</div>
		);
	}

	return (
		<div
			className={`container mx-auto px-4 py-8 mt-16 ${themeStyles.textDefault}`}>
			<div className="mb-4">
				<Link
					href="/events"
					className={`flex items-center ${themeStyles.textDefault} hover:opacity-75`}>
					<svg
						className="w-5 h-5 mr-1"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M10 19l-7-7m0 0l7-7m-7 7h18"
						/>
					</svg>
					Torna agli eventi
				</Link>
			</div>

			{/* Header dell'evento */}
			<div
				className={`relative overflow-hidden rounded-lg shadow-xl mb-8 border ${themeStyles.cardBorder}`}>
				<div
					className={`relative ${themeStyles.bgGradient} p-6 ${themeStyles.textColor}`}>
					{themeStyles.decoration}

					<div className="relative z-10">
						<div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
							<div>
								<h1 className="text-3xl font-bold mb-2">{event.title}</h1>
								<div className="flex flex-wrap gap-2 mb-4">
									<span
										className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-20`}>
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
								disabled={!currentUser}>
								{isRegistered
									? 'Annulla iscrizione'
									: 'Iscriviti all&apos;evento'}
							</button>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
							<div className="flex items-center">
								<svg
									className="w-5 h-5 mr-2 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
								<div>
									<div className="text-sm text-white text-opacity-80">Data</div>
									<div className="font-medium">
										{new Date(event.date).toLocaleDateString('it-IT', {
											day: 'numeric',
											month: 'long',
											year: 'numeric',
										})}
									</div>
								</div>
							</div>

							<div className="flex items-center">
								<svg
									className="w-5 h-5 mr-2 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<div>
									<div className="text-sm text-white text-opacity-80">
										Orario
									</div>
									<div className="font-medium">{event.time}</div>
								</div>
							</div>

							<div className="flex items-center">
								<svg
									className="w-5 h-5 mr-2 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<div>
									<div className="text-sm text-white text-opacity-80">
										Durata
									</div>
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
							<p
								key={index}
								className={`${paragraph === '' ? 'mb-4' : undefined} ${themeStyles.textDefault}`}>
								{paragraph}
							</p>
						))}
					</div>
				</div>
			</div>

			{/* Partecipanti */}
			<div
				className={`rounded-lg shadow-md overflow-hidden mb-8 border ${themeStyles.cardBorder} ${themeStyles.cardBg}`}>
				<div className="p-6">
					<h2 className="text-xl font-bold mb-6">Partecipanti</h2>

					{participants.length > 0 ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
							{participants.map((user) => (
								<div
									key={user.id}
									className={`flex items-center p-3 border rounded-lg ${
										darkMode ? 'border-gray-700' : 'border-gray-200'
									}`}>
									<div
										className={`w-10 h-10 rounded-full ${getTeamColor(user.team)} flex items-center justify-center text-white font-bold mr-3`}>
										{user.username.charAt(0).toUpperCase()}
									</div>
									<div>
										<div className="font-medium">{user.username}</div>
										<div
											className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
											{user.team === 'acqua'
												? 'Team Acqua'
												: user.team === 'erba'
													? 'Team Erba'
													: 'Team Fuoco'}
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
					<div
						className={`${themeStyles.cardBg} rounded-lg shadow-xl max-w-md w-full p-6`}>
						<h3 className="text-xl font-bold mb-4">Conferma annullamento</h3>
						<p
							className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
							Sei sicuro di voler annullare la tua iscrizione a questo evento?
							Questa azione non può essere annullata.
						</p>
						<div className="flex justify-end gap-3">
							<button
								onClick={() => setShowConfirmModal(false)}
								className={`px-4 py-2 border rounded-lg ${
									darkMode
										? 'border-gray-600 hover:bg-gray-700'
										: 'border-gray-300 hover:bg-gray-50'
								}`}>
								Annulla
							</button>
							<button
								onClick={handleUnregister}
								className={`px-4 py-2 rounded-lg ${
									theme === 'acqua'
										? darkMode
											? 'bg-sky-700 hover:bg-sky-600'
											: 'bg-sky-500 hover:bg-sky-400'
										: theme === 'erba'
											? darkMode
												? 'bg-green-700 hover:bg-green-600'
												: 'bg-green-500 hover:bg-green-400'
											: darkMode
												? 'bg-red-700 hover:bg-red-600'
												: 'bg-red-500 hover:bg-red-400'
								} text-white`}>
								Conferma
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
