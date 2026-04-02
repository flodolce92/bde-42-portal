'use client';

import { useTheme } from '@/hooks/useTheme';
import Link from 'next/link';
import Image from 'next/image';
import { useAppStore } from '@/store';

// Dati di esempio per mostrare la UI
const featuredEvents = [
	{
		id: '1',
		title: 'Hackathon - Web3 Challenge',
		description:
			'Partecipa al nostro hackathon di 48 ore dedicato allo sviluppo di applicazioni Web3. Metti alla prova le tue competenze in blockchain, smart contracts e applicazioni decentralizzate.',
		date: '2024-06-15',
		time: '10:00',
		duration: '48h',
		type: 'hackathon',
		imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
	},
	{
		id: '2',
		title: 'CTF - Security Bootcamp',
		description:
			'Una competizione Capture The Flag incentrata sulla sicurezza informatica. Risolvi sfide di penetration testing, reverse engineering e web exploitation.',
		date: '2024-05-20',
		time: '14:30',
		duration: '6h',
		type: 'ctf',
		imageUrl: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87',
	},
	{
		id: '3',
		title: 'Quiz - Algoritmi e Strutture Dati',
		description:
			'Test le tue conoscenze su algoritmi e strutture dati con questo quiz competitivo. Sfida gli altri studenti e scala la classifica!',
		date: '2024-05-05',
		time: '16:00',
		duration: '2h',
		type: 'quiz',
	},
];

// Componenti per gli elementi tematici
const TeamBackgrounds = {
	acqua: () => (
		<div className="absolute inset-0 opacity-25">
			<svg
				className="w-full h-full"
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none">
				<path
					d="M0,25 Q25,50 50,25 T100,25"
					fill="none"
					stroke="currentColor"
					strokeWidth="1">
					<animate
						attributeName="d"
						dur="15s"
						repeatCount="indefinite"
						values="M0,25 Q25,50 50,25 T100,25;
                    M0,35 Q25,60 50,35 T100,35;
                    M0,25 Q25,50 50,25 T100,25"
					/>
				</path>
				<path
					d="M0,45 Q25,70 50,45 T100,45"
					fill="none"
					stroke="currentColor"
					strokeWidth="1">
					<animate
						attributeName="d"
						dur="15s"
						repeatCount="indefinite"
						values="M0,45 Q25,70 50,45 T100,45;
                    M0,55 Q25,80 50,55 T100,55;
                    M0,45 Q25,70 50,45 T100,45"
					/>
				</path>
				<path
					d="M0,65 Q25,90 50,65 T100,65"
					fill="none"
					stroke="currentColor"
					strokeWidth="1">
					<animate
						attributeName="d"
						dur="15s"
						repeatCount="indefinite"
						values="M0,65 Q25,90 50,65 T100,65;
                    M0,75 Q25,100 50,75 T100,75;
                    M0,65 Q25,90 50,65 T100,65"
					/>
				</path>
			</svg>
		</div>
	),
	fuoco: () => (
		<div className="absolute inset-0 opacity-25">
			<svg
				className="w-full h-full"
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none">
				<path
					d="M50,0 Q60,40 50,60 Q30,90 50,100 Q70,90 50,60 Q40,40 50,0"
					fill="none"
					stroke="currentColor"
					strokeWidth="1">
					<animate
						attributeName="d"
						dur="7s"
						repeatCount="indefinite"
						values="M50,0 Q60,40 50,60 Q30,90 50,100 Q70,90 50,60 Q40,40 50,0;
                    M50,0 Q65,35 55,60 Q35,95 50,100 Q65,95 45,60 Q35,35 50,0;
                    M50,0 Q60,40 50,60 Q30,90 50,100 Q70,90 50,60 Q40,40 50,0"
					/>
				</path>
				<path
					d="M30,20 Q40,50 30,70 Q15,90 30,100 Q45,90 30,70 Q20,50 30,20"
					fill="none"
					stroke="currentColor"
					strokeWidth="1">
					<animate
						attributeName="d"
						dur="6s"
						repeatCount="indefinite"
						values="M30,20 Q40,50 30,70 Q15,90 30,100 Q45,90 30,70 Q20,50 30,20;
                    M30,20 Q45,45 35,70 Q20,95 30,100 Q40,95 25,70 Q15,45 30,20;
                    M30,20 Q40,50 30,70 Q15,90 30,100 Q45,90 30,70 Q20,50 30,20"
					/>
				</path>
				<path
					d="M70,20 Q80,50 70,70 Q55,90 70,100 Q85,90 70,70 Q60,50 70,20"
					fill="none"
					stroke="currentColor"
					strokeWidth="1">
					<animate
						attributeName="d"
						dur="8s"
						repeatCount="indefinite"
						values="M70,20 Q80,50 70,70 Q55,90 70,100 Q85,90 70,70 Q60,50 70,20;
                    M70,20 Q85,45 75,70 Q60,95 70,100 Q80,95 65,70 Q55,45 70,20;
                    M70,20 Q80,50 70,70 Q55,90 70,100 Q85,90 70,70 Q60,50 70,20"
					/>
				</path>
			</svg>
		</div>
	),
	erba: () => (
		<div className="absolute inset-0 opacity-25">
			<svg
				className="w-full h-full"
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none">
				<path
					d="M20,100 L20,50 L30,40 L40,50 L40,100 Z"
					fill="none"
					stroke="currentColor"
					strokeWidth="1">
					<animate
						attributeName="d"
						dur="15s"
						repeatCount="indefinite"
						values="M20,100 L20,50 L30,40 L40,50 L40,100 Z;
                    M20,100 L20,45 L30,35 L40,45 L40,100 Z;
                    M20,100 L20,50 L30,40 L40,50 L40,100 Z"
					/>
				</path>
				<path
					d="M45,100 L45,40 L55,30 L65,40 L65,100 Z"
					fill="none"
					stroke="currentColor"
					strokeWidth="1">
					<animate
						attributeName="d"
						dur="13s"
						repeatCount="indefinite"
						values="M45,100 L45,40 L55,30 L65,40 L65,100 Z;
                    M45,100 L45,35 L55,25 L65,35 L65,100 Z;
                    M45,100 L45,40 L55,30 L65,40 L65,100 Z"
					/>
				</path>
				<path
					d="M70,100 L70,45 L80,35 L90,45 L90,100 Z"
					fill="none"
					stroke="currentColor"
					strokeWidth="1">
					<animate
						attributeName="d"
						dur="17s"
						repeatCount="indefinite"
						values="M70,100 L70,45 L80,35 L90,45 L90,100 Z;
                    M70,100 L70,40 L80,30 L90,40 L90,100 Z;
                    M70,100 L70,45 L80,35 L90,45 L90,100 Z"
					/>
				</path>
			</svg>
		</div>
	),
};

export default function Home() {
	const { theme } = useTheme();
	const { users = [] } = useAppStore();

	// Calcola il punteggio totale per team
	const teamScores = (users || []).reduce(
		(acc, user) => {
			if (!acc[user.team]) acc[user.team] = 0;
			acc[user.team] += user.score;
			return acc;
		},
		{} as Record<string, number>,
	);

	// Ordina i team per punteggio
	const sortedTeams = Object.entries(teamScores)
		.sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
		.map(([team]) => team);

	// Trova i top 5 utenti
	const topUsers = (users || []).sort((a, b) => b.score - a.score).slice(0, 5);

	const getThemeStyles = () => {
		switch (theme) {
			case 'acqua':
				return {
					mainGradient: 'bg-gradient-to-r from-sky-950 via-blue-950 to-sky-900',
					cardBg: 'bg-slate-900',
					border: 'border-sky-900',
					highlight: 'bg-sky-800 text-sky-100',
					button: 'bg-sky-700 hover:bg-sky-600 text-white',
					secondaryButton:
						'bg-transparent border-2 border-sky-700 text-sky-100 hover:bg-sky-900',
					textColor: 'text-sky-100',
					textMuted: 'text-gray-400',
					link: 'text-sky-400 hover:text-sky-300',
					backgroundElement: <TeamBackgrounds.acqua />,
				};
			case 'fuoco':
				return {
					mainGradient:
						'bg-gradient-to-r from-red-950 via-orange-950 to-red-900',
					cardBg: 'bg-slate-900',
					border: 'border-red-900',
					highlight: 'bg-red-800 text-red-100',
					button: 'bg-red-700 hover:bg-red-600 text-white',
					secondaryButton:
						'bg-transparent border-2 border-red-700 text-red-100 hover:bg-red-900',
					textColor: 'text-red-100',
					textMuted: 'text-gray-400',
					link: 'text-red-400 hover:text-red-300',
					backgroundElement: <TeamBackgrounds.fuoco />,
				};
			case 'erba':
				return {
					mainGradient:
						'bg-gradient-to-r from-green-950 via-emerald-950 to-green-900',
					cardBg: 'bg-slate-900',
					border: 'border-green-900',
					highlight: 'bg-green-800 text-green-100',
					button: 'bg-green-700 hover:bg-green-600 text-white',
					secondaryButton:
						'bg-transparent border-2 border-green-700 text-green-100 hover:bg-green-900',
					textColor: 'text-green-100',
					textMuted: 'text-gray-400',
					link: 'text-green-400 hover:text-green-300',
					backgroundElement: <TeamBackgrounds.erba />,
				};
			default:
				return {
					mainGradient: 'bg-gradient-to-r from-sky-950 via-blue-950 to-sky-900',
					cardBg: 'bg-slate-900',
					border: 'border-sky-900',
					highlight: 'bg-sky-800 text-sky-100',
					button: 'bg-sky-700 hover:bg-sky-600 text-white',
					secondaryButton:
						'bg-transparent border-2 border-sky-700 text-sky-100 hover:bg-sky-900',
					textColor: 'text-sky-100',
					textMuted: 'text-gray-400',
					link: 'text-sky-400 hover:text-sky-300',
					backgroundElement: <TeamBackgrounds.acqua />,
				};
		}
	};

	const styles = getThemeStyles();

	const getTeamColor = (teamName: string) => {
		switch (teamName) {
			case 'acqua':
				return 'text-sky-200';
			case 'fuoco':
				return 'text-red-200';
			case 'erba':
				return 'text-green-200';
			default:
				return 'text-gray-200';
		}
	};

	const getTeamBadge = (teamName: string) => {
		switch (teamName) {
			case 'acqua':
				return 'bg-sky-800 text-sky-100';
			case 'fuoco':
				return 'bg-red-800 text-red-100';
			case 'erba':
				return 'bg-green-800 text-green-100';
			default:
				return 'bg-gray-800 text-gray-100';
		}
	};

	return (
		<div className={`container mx-auto px-4 py-8 mt-16 ${styles.textColor}`}>
			<section className="mb-12">
				<div className="text-center mb-8">
					<h1 className="text-4xl font-bold mb-2">BDE 42 Roma Luiss</h1>
					<p className={`text-xl ${styles.textMuted}`}>
						Partecipa alle competizioni, migliora le tue skill, scala la
						classifica!
					</p>
				</div>

				<div
					className={`${styles.mainGradient} rounded-2xl p-8 md:p-12 mb-12 relative overflow-hidden shadow-xl`}>
					{styles.backgroundElement}

					<div className="relative z-10">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
							Prossimo grande evento
						</h2>
						<p className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl">
							Hackathon primaverile - Partecipa al nostro evento di punta e
							metti alla prova le tue capacità di problem solving in un ambiente
							competitivo e stimolante.
						</p>
						<div className="flex flex-wrap gap-4">
							<Link
								href="/eventi/special-event"
								className={`font-medium px-6 py-3 rounded-lg shadow-md ${styles.button} transition-colors`}>
								Scopri di più
							</Link>
							<Link
								href="/dashboard"
								className={`font-medium px-6 py-3 rounded-lg ${styles.secondaryButton} transition-colors`}>
								Vai alla Dashboard
							</Link>
						</div>
					</div>
				</div>

				{sortedTeams.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
						{sortedTeams.map((team, index) => (
							<div
								key={team}
								className={`${styles.cardBg} border ${styles.border} rounded-lg p-6 shadow-md relative overflow-hidden`}>
								<div className="flex justify-between items-start mb-4">
									<div>
										<span
											className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getTeamBadge(team)} mb-2`}>
											Team {team.charAt(0).toUpperCase() + team.slice(1)}
										</span>
										<h2 className="text-xl font-bold">
											{index === 0 && '🏆 '} {teamScores[team]} punti
										</h2>
									</div>
									{index === 0 && <div className="text-2xl">👑</div>}
								</div>
								<p className={styles.textMuted}>
									{index === 0
										? 'Attualmente in testa alla classifica!'
										: `${index === 1 ? 'Secondo' : 'Terzo'} posto nella classifica a squadre.`}
								</p>
								<div className="mt-4">
									<Link
										href="/classifica"
										className={`text-sm font-medium ${styles.link}`}>
										Visualizza la classifica completa →
									</Link>
								</div>
							</div>
						))}
					</div>
				) : (
					<div
						className={`${styles.cardBg} border ${styles.border} rounded-lg p-6 shadow-md mb-12 text-center`}>
						<p className={styles.textMuted}>
							Dati del team in caricamento o non disponibili.
						</p>
					</div>
				)}
			</section>

			<section className="mb-16">
				<div className="flex justify-between items-center mb-6">
					<h2 className="text-2xl font-bold">Eventi in evidenza</h2>
					<Link href="/eventi" className={styles.link}>
						Vedi tutti gli eventi
					</Link>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{featuredEvents.map((event) => (
						<div
							key={event.id}
							className={`${styles.cardBg} border ${styles.border} rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow`}>
							{event.imageUrl && (
								<div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
									<Image
										src={event.imageUrl}
										alt={event.title}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
								</div>
							)}
							<div className="p-6">
								<h3 className="text-lg font-bold mb-2">{event.title}</h3>
								<p className={`${styles.textMuted} mb-4 line-clamp-2`}>
									{event.description}
								</p>
								<div className="flex justify-between items-center">
									<div className="text-sm">
										<span>
											{new Date(event.date).toLocaleDateString('it-IT', {
												day: 'numeric',
												month: 'short',
											})}
										</span>
										<span className="mx-2">•</span>
										<span>{event.time}</span>
									</div>
									<Link
										href={`/eventi/${event.id}`}
										className={`inline-block px-3 py-1 rounded-md text-sm font-medium ${styles.button}`}>
										Dettagli
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="mb-16">
				<div className="flex justify-between items-center mb-6">
					<h2 className="text-2xl font-bold">Classifica</h2>
					<Link href="/classifica" className={styles.link}>
						Classifica completa
					</Link>
				</div>

				<div
					className={`${styles.cardBg} rounded-lg shadow-md overflow-hidden border ${styles.border}`}>
					<div className={`p-4 border-b ${styles.border}`}>
						<h3 className="font-medium">Top 5 Partecipanti</h3>
					</div>
					<div className="p-4">
						{topUsers.length > 0 ? (
							topUsers.map((user, i) => (
								<div
									key={user.id}
									className={`flex items-center justify-between py-2 border-b last:border-0 border-gray-700`}>
									<div className="flex items-center">
										<span
											className={`w-6 text-center font-medium mr-4 ${i === 0 ? 'text-amber-500' : ''}`}>
											{i + 1}
										</span>
										<span className="font-medium">{user.username}</span>
										<span className={`ml-2 text-sm ${getTeamColor(user.team)}`}>
											Team{' '}
											{user.team.charAt(0).toUpperCase() + user.team.slice(1)}
										</span>
									</div>
									<span className="font-medium">{user.score} punti</span>
								</div>
							))
						) : (
							<p className="py-4 text-center">Caricamento utenti in corso...</p>
						)}
					</div>
				</div>
			</section>

			{/* Club */}
			<section
				className={`px-4 py-16 relative overflow-hidden ${styles.mainGradient}`}>
				<div className="absolute inset-0">{styles.backgroundElement}</div>
				<div className="relative z-10 max-w-7xl mx-auto">
					<div className="text-center mb-10">
						<h2 className={`text-3xl font-bold mb-2 ${styles.textColor}`}>
							I Nostri Club
						</h2>
						<p className={`text-lg ${styles.textMuted}`}>
							Scopri e unisciti ai nostri club tematici
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{/* Club 1: Startup */}
						<div
							className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${styles.cardBg} border ${styles.border}`}>
							<div className="h-40 bg-gradient-to-r from-purple-900 to-indigo-800 relative flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-24 w-24 text-white opacity-80"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1.5}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<div className="p-6">
								<h3 className={`text-xl font-bold mb-2 ${styles.textColor}`}>
									Vibe It Club
								</h3>
								<p className={`mb-4 ${styles.textMuted}`}>
									Trasforma un’idea in un prototipo funzionante in sole 24 ore.
									Brainstorming rapido, sviluppo collaborativo e lancio di
									un’app semplice ma concreta.
								</p>
								<Link
									href="/club/startup"
									className={`inline-block px-4 py-2 rounded-lg ${styles.button}`}>
									Scopri di più
								</Link>
							</div>
						</div>

						{/* Club 2: Sviluppo Gaming - Spaghettistudio */}
						<div
							className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${styles.cardBg} border ${styles.border}`}>
							<div className="h-40 bg-gradient-to-r from-pink-900 to-rose-800 relative flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-24 w-24 text-white opacity-80"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1.5}
										d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1.5}
										d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<div className="p-6">
								<h3 className={`text-xl font-bold mb-2 ${styles.textColor}`}>
									Spaghettistudio
								</h3>
								<p className={`mb-4 ${styles.textMuted}`}>
									Sviluppa videogiochi e applica le tue competenze di
									programmazione nel mondo del gaming.
								</p>
								<Link
									href="/club/gaming"
									className={`inline-block px-4 py-2 rounded-lg ${styles.button}`}>
									Scopri di più
								</Link>
							</div>
						</div>

						{/* Club 3: Libro e Manga */}
						<div
							className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${styles.cardBg} border ${styles.border}`}>
							<div className="h-40 bg-gradient-to-r from-amber-900 to-yellow-800 relative flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-24 w-24 text-white opacity-80"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1.5}
										d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
									/>
								</svg>
							</div>
							<div className="p-6">
								<h3 className={`text-xl font-bold mb-2 ${styles.textColor}`}>
									Club Libro e Manga
								</h3>
								<p className={`mb-4 ${styles.textMuted}`}>
									Esplora il mondo della letteratura e dei manga con altri
									appassionati di lettura.
								</p>
								<Link
									href="/club/libri"
									className={`inline-block px-4 py-2 rounded-lg ${styles.button}`}>
									Scopri di più
								</Link>
							</div>
						</div>

						{/* Club 4: Cybersecurity */}
						<div
							className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${styles.cardBg} border ${styles.border}`}>
							<div className="h-40 bg-gradient-to-r from-cyan-900 to-blue-800 relative flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-24 w-24 text-white opacity-80"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1.5}
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								</svg>
							</div>
							<div className="p-6">
								<h3 className={`text-xl font-bold mb-2 ${styles.textColor}`}>
									Club Cybersecurity
								</h3>
								<p className={`mb-4 ${styles.textMuted}`}>
									Impara le tecniche di sicurezza informatica e partecipa a
									competizioni CTF.
								</p>
								<Link
									href="/club/cybersecurity"
									className={`inline-block px-4 py-2 rounded-lg ${styles.button}`}>
									Scopri di più
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
