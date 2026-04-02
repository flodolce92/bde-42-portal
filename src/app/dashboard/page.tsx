'use client';

import { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useAppStore } from '@/store';

// Icone per i diversi temi delle squadre
const TeamIcons = {
	acqua: (
		<svg
			className="w-6 h-6"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 12 2 12 2C12 2 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),
	fuoco: (
		<svg
			className="w-6 h-6"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12 22C16.4183 22 20 18.4183 20 14C20 12 19 10 17.5 8.5C16 7 14 5.5 14 3.5C14 3.5 10.5 7 9.5 9.5C7.5 12 7 14 8 16"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 22C9.79086 22 8 20.2091 8 18C8 15.7909 9.79086 14 12 14C12 17 13.5 18 15 18C15 20.2091 13.2091 22 12 22Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),
	erba: (
		<svg
			className="w-6 h-6"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12 22C16.4183 22 20 18.4183 20 14C20 12 17 11 16 8C16 8 16 11 14.5 13C13 15 10 16 8 16"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2 22L12 2L22 22"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),
};

export default function Dashboard() {
	const { theme } = useTheme();
	const { currentUser, users = [], events = [] } = useAppStore();
	const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

	if (!currentUser) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
			</div>
		);
	}

	const getThemeStyles = () => {
		switch (theme) {
			case 'acqua':
				return {
					bgGradient: 'bg-gradient-to-br from-sky-900 to-blue-900',
					accentColor: 'text-sky-400',
					accentBg: 'bg-sky-800/30',
					cardBg: 'bg-slate-800',
					textColor: 'text-white',
					textMuted: 'text-gray-300',
					buttonBg: 'bg-sky-700 hover:bg-sky-600',
					buttonText: 'text-white',
					border: 'border-sky-700',
					accent: 'sky-500',
					dashDecoration: (
						<div className="absolute right-5 top-10 opacity-10">
							<svg
								className="w-32 h-32"
								viewBox="0 0 100 100"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M10,50 Q30,20 50,50 T90,50"
									fill="none"
									stroke="currentColor"
									strokeWidth="3">
									<animate
										attributeName="d"
										dur="8s"
										repeatCount="indefinite"
										values="M10,50 Q30,20 50,50 T90,50;
                            M10,60 Q30,30 50,60 T90,60;
                            M10,50 Q30,20 50,50 T90,50"
									/>
								</path>
								<path
									d="M10,60 Q30,30 50,60 T90,60"
									fill="none"
									stroke="currentColor"
									strokeWidth="3">
									<animate
										attributeName="d"
										dur="8s"
										repeatCount="indefinite"
										values="M10,60 Q30,30 50,60 T90,60;
                            M10,70 Q30,40 50,70 T90,70;
                            M10,60 Q30,30 50,60 T90,60"
									/>
								</path>
								<path
									d="M10,70 Q30,40 50,70 T90,70"
									fill="none"
									stroke="currentColor"
									strokeWidth="3">
									<animate
										attributeName="d"
										dur="8s"
										repeatCount="indefinite"
										values="M10,70 Q30,40 50,70 T90,70;
                            M10,80 Q30,50 50,80 T90,80;
                            M10,70 Q30,40 50,70 T90,70"
									/>
								</path>
							</svg>
						</div>
					),
				};
			case 'fuoco':
				return {
					bgGradient: 'bg-gradient-to-br from-red-900 to-orange-900',
					accentColor: 'text-red-400',
					accentBg: 'bg-red-800/30',
					cardBg: 'bg-slate-800',
					textColor: 'text-white',
					textMuted: 'text-gray-300',
					buttonBg: 'bg-red-700 hover:bg-red-600',
					buttonText: 'text-white',
					border: 'border-red-700',
					accent: 'red-500',
					dashDecoration: (
						<div className="absolute right-5 top-10 opacity-10">
							<svg
								className="w-32 h-32"
								viewBox="0 0 100 100"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M50,15 Q60,25 50,35 Q40,45 50,55 Q60,65 50,75 Q40,85 50,95"
									fill="none"
									stroke="currentColor"
									strokeWidth="3">
									<animate
										attributeName="d"
										dur="5s"
										repeatCount="indefinite"
										values="M50,15 Q60,25 50,35 Q40,45 50,55 Q60,65 50,75 Q40,85 50,95;
                            M50,15 Q65,20 55,35 Q45,50 55,65 Q65,80 50,95;
                            M50,15 Q60,25 50,35 Q40,45 50,55 Q60,65 50,75 Q40,85 50,95"
									/>
								</path>
								<path
									d="M35,20 Q45,30 35,40 Q25,50 35,60 Q45,70 35,80"
									fill="none"
									stroke="currentColor"
									strokeWidth="2">
									<animate
										attributeName="d"
										dur="4s"
										repeatCount="indefinite"
										values="M35,20 Q45,30 35,40 Q25,50 35,60 Q45,70 35,80;
                            M30,20 Q40,30 30,40 Q20,50 30,60 Q40,70 30,80;
                            M35,20 Q45,30 35,40 Q25,50 35,60 Q45,70 35,80"
									/>
								</path>
								<path
									d="M65,20 Q75,30 65,40 Q55,50 65,60 Q75,70 65,80"
									fill="none"
									stroke="currentColor"
									strokeWidth="2">
									<animate
										attributeName="d"
										dur="4.5s"
										repeatCount="indefinite"
										values="M65,20 Q75,30 65,40 Q55,50 65,60 Q75,70 65,80;
                            M70,20 Q80,30 70,40 Q60,50 70,60 Q80,70 70,80;
                            M65,20 Q75,30 65,40 Q55,50 65,60 Q75,70 65,80"
									/>
								</path>
							</svg>
						</div>
					),
				};
			case 'erba':
				return {
					bgGradient: 'bg-gradient-to-br from-green-900 to-emerald-900',
					accentColor: 'text-green-400',
					accentBg: 'bg-green-800/30',
					cardBg: 'bg-slate-800',
					textColor: 'text-white',
					textMuted: 'text-gray-300',
					buttonBg: 'bg-green-700 hover:bg-green-600',
					buttonText: 'text-white',
					border: 'border-green-700',
					accent: 'green-500',
					dashDecoration: (
						<div className="absolute right-5 top-10 opacity-10">
							<svg
								className="w-32 h-32"
								viewBox="0 0 100 100"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M20,80 L20,40 L30,30 L40,40 L40,70 L30,80 Z"
									fill="none"
									stroke="currentColor"
									strokeWidth="2">
									<animate
										attributeName="d"
										dur="10s"
										repeatCount="indefinite"
										values="M20,80 L20,40 L30,30 L40,40 L40,70 L30,80 Z;
                            M20,80 L20,35 L30,25 L40,35 L40,70 L30,80 Z;
                            M20,80 L20,40 L30,30 L40,40 L40,70 L30,80 Z"
									/>
								</path>
								<path
									d="M45,80 L45,30 L55,20 L65,30 L65,70 L55,80 Z"
									fill="none"
									stroke="currentColor"
									strokeWidth="2">
									<animate
										attributeName="d"
										dur="8s"
										repeatCount="indefinite"
										values="M45,80 L45,30 L55,20 L65,30 L65,70 L55,80 Z;
                            M45,80 L45,25 L55,15 L65,25 L65,70 L55,80 Z;
                            M45,80 L45,30 L55,20 L65,30 L65,70 L55,80 Z"
									/>
								</path>
								<path
									d="M70,80 L70,35 L80,25 L90,35 L90,70 L80,80 Z"
									fill="none"
									stroke="currentColor"
									strokeWidth="2">
									<animate
										attributeName="d"
										dur="12s"
										repeatCount="indefinite"
										values="M70,80 L70,35 L80,25 L90,35 L90,70 L80,80 Z;
                            M70,80 L70,30 L80,20 L90,30 L90,70 L80,80 Z;
                            M70,80 L70,35 L80,25 L90,35 L90,70 L80,80 Z"
									/>
								</path>
							</svg>
						</div>
					),
				};
			default:
				return {
					bgGradient: 'bg-slate-800',
					accentColor: 'text-sky-400',
					accentBg: 'bg-sky-800/30',
					cardBg: 'bg-slate-800',
					textColor: 'text-white',
					textMuted: 'text-gray-300',
					buttonBg: 'bg-sky-700 hover:bg-sky-600',
					buttonText: 'text-white',
					border: 'border-sky-700',
					accent: 'sky-500',
					dashDecoration: null,
				};
		}
	};

	const styles = getThemeStyles();

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('it-IT', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		});
	};

	// Filtra gli eventi in base alla tab attiva
	const today = new Date();
	const filteredEvents = (events || []).filter((event) => {
		const eventDate = new Date(event.date);
		if (activeTab === 'upcoming') {
			return eventDate >= today;
		} else {
			return eventDate < today;
		}
	});

	// Trova i top 5 utenti per punteggio
	const topUsers = (users || []).sort((a, b) => b.score - a.score).slice(0, 5);

	// Calcola il punteggio totale del team
	const teamScores = (users || []).reduce(
		(acc, user) => {
			if (!acc[user.team]) acc[user.team] = 0;
			acc[user.team] += user.score;
			return acc;
		},
		{} as Record<string, number>,
	);

	// Determina il team in testa
	let leadingTeam = '';
	let maxScore = 0;

	for (const team in teamScores) {
		if (teamScores[team] > maxScore) {
			maxScore = teamScores[team];
			leadingTeam = team;
		}
	}

	const getTeamIcon = (teamName: string) => {
		return TeamIcons[teamName as keyof typeof TeamIcons] || null;
	};

	const getSkillBarColor = (skill: number) => {
		if (skill > 80) return `bg-${styles.accent}`;
		if (skill > 50) return `bg-${styles.accent}/80`;
		return `bg-${styles.accent}/60`;
	};

	const getTeamColor = (teamName: string) => {
		switch (teamName) {
			case 'acqua':
				return 'bg-sky-800 text-sky-200';
			case 'fuoco':
				return 'bg-red-800 text-red-200';
			case 'erba':
				return 'bg-green-800 text-green-200';
			default:
				return 'bg-gray-700 text-gray-200';
		}
	};

	return (
		<div className={`min-h-screen py-8 ${styles.textColor}`}>
			<div className="container mx-auto px-4 pt-16">
				{/* Profilo utente */}
				<div
					className={`relative overflow-hidden rounded-lg mb-8 shadow-lg border ${styles.border}`}>
					<div className={`${styles.bgGradient} px-6 py-8 text-white relative`}>
						{styles.dashDecoration}

						<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4">
							<div
								className={`w-20 h-20 rounded-full ${getTeamColor(currentUser.team)} flex items-center justify-center text-4xl font-bold`}>
								{currentUser.username.charAt(0).toUpperCase()}
							</div>

							<div className="flex-1">
								<h1 className="text-2xl font-bold mb-1">
									{currentUser.username}
								</h1>
								<div className="flex items-center">
									<div className="flex items-center mr-3">
										{getTeamIcon(currentUser.team)}
										<span className="ml-1 font-medium capitalize">
											Team {currentUser.team}
										</span>
									</div>
									<div className="flex items-center">
										<svg
											className="w-5 h-5 mr-1"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M13 10V3L4 14h7v7l9-11h-7z"
											/>
										</svg>
										<span>{currentUser.score} punti</span>
									</div>
								</div>
							</div>

							<div>
								<button
									className={`${styles.buttonBg} ${styles.buttonText} px-4 py-2 rounded-md shadow-md transition-colors`}>
									Modifica profilo
								</button>
							</div>
						</div>
					</div>

					{/* Skill level */}
					<div className={`p-6 ${styles.cardBg}`}>
						<h2 className="text-lg font-semibold mb-4">Skill Level</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							{Object.entries(currentUser.skills || {}).map(
								([skill, level]) => (
									<div key={skill}>
										<div className="flex justify-between mb-1">
											<span>{skill}</span>
											<span className={styles.accentColor}>{level}%</span>
										</div>
										<div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
											<div
												className={getSkillBarColor(level)}
												style={{ width: `${level}%`, height: '100%' }}></div>
										</div>
									</div>
								),
							)}
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Eventi */}
					<div className="lg:col-span-2">
						<div
							className={`rounded-lg shadow-lg border ${styles.border} overflow-hidden`}>
							<div className={`p-6 ${styles.cardBg}`}>
								<h2 className="text-xl font-bold mb-6">Eventi</h2>

								<div className="flex border-b mb-6">
									<button
										className={`px-4 py-2 font-medium border-b-2 ${
											activeTab === 'upcoming'
												? `border-${styles.accent} ${styles.accentColor}`
												: 'border-transparent hover:border-gray-300'
										}`}
										onClick={() => setActiveTab('upcoming')}>
										Prossimi
									</button>
									<button
										className={`px-4 py-2 font-medium border-b-2 ${
											activeTab === 'past'
												? `border-${styles.accent} ${styles.accentColor}`
												: 'border-transparent hover:border-gray-300'
										}`}
										onClick={() => setActiveTab('past')}>
										Passati
									</button>
								</div>

								{filteredEvents.length > 0 ? (
									<div className="space-y-4">
										{filteredEvents.map((event) => (
											<div
												key={event.id}
												className={`p-4 rounded-lg border ${styles.border} hover:shadow-md transition-shadow`}>
												<div className="flex flex-col sm:flex-row justify-between mb-2">
													<h3 className="text-lg font-semibold mb-1">
														{event.title}
													</h3>
													<div
														className={`${styles.accentBg} ${styles.accentColor} text-sm px-3 py-1 rounded-full self-start`}>
														{event.type}
													</div>
												</div>
												<p className={`${styles.textMuted} mb-3 line-clamp-2`}>
													{event.description}
												</p>
												<div className="flex justify-between items-center">
													<div className="flex items-center">
														<svg
															className="w-4 h-4 mr-1"
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
														<span className="text-sm">
															{formatDate(event.date)}
														</span>
														<span className="mx-2">•</span>
														<span className="text-sm">{event.time}</span>
													</div>
													<a
														href={`/eventi/${event.id}`}
														className={`${styles.buttonBg} ${styles.buttonText} text-sm px-3 py-1 rounded-md hover:shadow-md transition-shadow`}>
														Dettagli
													</a>
												</div>
											</div>
										))}
									</div>
								) : (
									<div className="text-center py-8">
										<p className="text-lg">
											Nessun evento{' '}
											{activeTab === 'upcoming' ? 'futuro' : 'passato'} trovato.
										</p>
									</div>
								)}
							</div>
						</div>
					</div>

					{/* Classifica e statistiche */}
					<div>
						<div
							className={`rounded-lg shadow-lg border ${styles.border} overflow-hidden mb-8`}>
							<div className={`p-6 ${styles.cardBg}`}>
								<h2 className="text-xl font-bold mb-6">Top 5 Utenti</h2>
								<div className="space-y-4">
									{topUsers.map((user, index) => (
										<div
											key={user.id}
											className={`flex items-center gap-3 p-3 rounded-lg ${index === 0 ? styles.accentBg : ''}`}>
											<div className="text-lg font-bold w-5">{index + 1}</div>
											<div
												className={`w-10 h-10 rounded-full ${getTeamColor(user.team)} flex items-center justify-center font-bold`}>
												{user.username.charAt(0).toUpperCase()}
											</div>
											<div className="flex-1">
												<div className="font-medium">{user.username}</div>
												<div className={`text-xs ${styles.textMuted}`}>
													Team {user.team}
												</div>
											</div>
											<div
												className={`font-bold ${index === 0 ? 'text-amber-400' : styles.accentColor}`}>
												{user.score}
											</div>
										</div>
									))}
								</div>
								<div className="mt-4 text-center">
									<a
										href="/classifica"
										className={`${styles.buttonBg} ${styles.buttonText} inline-block px-4 py-2 rounded-md hover:shadow-md transition-shadow`}>
										Classifica completa
									</a>
								</div>
							</div>
						</div>

						<div
							className={`rounded-lg shadow-lg border ${styles.border} overflow-hidden`}>
							<div className={`p-6 ${styles.cardBg}`}>
								<h2 className="text-xl font-bold mb-6">Statistiche Team</h2>

								{/* Squadra in testa */}
								{leadingTeam && (
									<div
										className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${styles.accentBg}`}>
										<div className="text-2xl">🏆</div>
										<div>
											<div className="text-sm">Team in testa</div>
											<div className="font-bold text-lg flex items-center">
												{getTeamIcon(leadingTeam)}
												<span className="ml-1 capitalize">{leadingTeam}</span>
											</div>
										</div>
									</div>
								)}

								{/* Punteggi dei Team */}
								<div className="space-y-4">
									{Object.entries(teamScores).map(([team, score]) => (
										<div key={team} className="mb-2">
											<div className="flex justify-between items-center mb-1">
												<div className="flex items-center">
													{getTeamIcon(team)}
													<span className="ml-1 font-medium capitalize">
														Team {team}
													</span>
												</div>
												<span className={styles.accentColor}>
													{score} punti
												</span>
											</div>
											<div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
												<div
													className={`h-full ${
														team === 'acqua'
															? 'bg-sky-600'
															: team === 'fuoco'
																? 'bg-red-600'
																: 'bg-green-600'
													}`}
													style={{
														width: `${(score / maxScore) * 100}%`,
													}}></div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
