'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useAppStore, Event, User } from '@/store';

// Dati di esempio
const mockEvents: Event[] = [
	{
		id: '1',
		title: 'Hackathon - Web3 Challenge',
		description:
			'Partecipa al nostro hackathon di 48 ore dedicato allo sviluppo di applicazioni Web3. Metti alla prova le tue competenze in blockchain, smart contracts e applicazioni decentralizzate.',
		date: '2024-06-15',
		time: '10:00',
		duration: '48h',
		type: 'hackathon',
		club: 'none',
		imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
		participants: ['1', '2', '3'],
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
		club: 'Cybersecurity',
		imageUrl: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87',
		participants: ['1', '4', '5'],
	},
	{
		id: '3',
		title: 'Workshop di Design Thinking',
		description:
			"Partecipa a un workshop interattivo di Design Thinking per imparare a risolvere problemi complessi attraverso l'approccio centrato sull'utente.",
		date: '2026-05-01',
		time: '15:00',
		duration: '3h',
		type: 'workshop',
		club: 'vibe it',
		imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
		participants: ['2', '3', '5'],
	},
];

const mockUsers: User[] = [
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

export default function AdminPage() {
	const { theme } = useTheme();
	const { addEvent, updateScore, updateSkill } = useAppStore();

	const [events, setEvents] = useState<Event[]>([]);
	const [users, setUsers] = useState<User[]>([]);
	const [activeTab, setActiveTab] = useState<
		'createEvent' | 'manageEvents' | 'assignPoints'
	>('createEvent');

	// Form per nuovi eventi
	const [newEvent, setNewEvent] = useState<Omit<Event, 'id'>>({
		title: '',
		description: '',
		date: '',
		time: '',
		duration: '',
		type: 'coding',
		imageUrl: '',
	});

	// Gestione punti
	const [selectedEvent, setSelectedEvent] = useState<string>('');
	const [selectedUser, setSelectedUser] = useState<string>('');
	const [pointsToAdd, setPointsToAdd] = useState<number>(10);
	const [skillToImprove, setSkillToImprove] = useState<string>('Coding');
	const [skillLevel, setSkillLevel] = useState<number>(5);

	// Carica gli eventi e gli utenti quando il componente viene montato
	useEffect(() => {
		// In un'app reale, qui caricheremmo i dati dal backend
		// Per ora usiamo i dati di esempio
		setEvents(mockEvents);
		setUsers(mockUsers);
	}, []);

	// Gestisci il form per un nuovo evento
	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value } = e.target;
		setNewEvent((prev) => ({ ...prev, [name]: value }));
	};

	// Invia il form per creare un nuovo evento
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// In un'app reale, qui invieremmo i dati al backend
		const event: Event = {
			id: Date.now().toString(), // generiamo un ID temporaneo
			...newEvent,
			participants: [],
		};

		// Aggiungi l'evento allo store
		addEvent(event);

		// Aggiorna la lista locale degli eventi
		setEvents((prev) => [...prev, event]);

		// Resetta il form
		setNewEvent({
			title: '',
			description: '',
			date: '',
			time: '',
			duration: '',
			type: 'coding',
			imageUrl: '',
		});

		alert('Evento creato con successo!');
	};

	// Funzione per assegnare punti a un utente
	const handleAssignPoints = () => {
		if (!selectedUser || !selectedEvent) {
			alert('Seleziona un utente e un evento');
			return;
		}

		// In un'app reale, qui invieremmo i dati al backend
		updateScore(selectedUser, pointsToAdd);

		// Aggiorna l'utente localmente
		setUsers((prev) =>
			prev.map((user) =>
				user.id === selectedUser
					? { ...user, score: user.score + pointsToAdd }
					: user,
			),
		);

		alert(
			`Punti assegnati con successo! (${pointsToAdd} punti a ${users.find((u) => u.id === selectedUser)?.username})`,
		);
	};

	// Funzione per migliorare una skill di un utente
	const handleImproveSkill = () => {
		if (!selectedUser) {
			alert('Seleziona un utente');
			return;
		}

		// In un'app reale, qui invieremmo i dati al backend
		updateSkill(selectedUser, skillToImprove, skillLevel);

		// Aggiorna l'utente localmente
		setUsers((prev) =>
			prev.map((user) =>
				user.id === selectedUser
					? {
							...user,
							skills: {
								...user.skills,
								[skillToImprove]: skillLevel,
							},
						}
					: user,
			),
		);

		alert(
			`Skill migliorata con successo! (${skillToImprove}: ${skillLevel} a ${users.find((u) => u.id === selectedUser)?.username})`,
		);
	};

	const getTabButtonClass = (
		tabName: 'createEvent' | 'manageEvents' | 'assignPoints',
	) => {
		const isActive = activeTab === tabName;
		const baseClasses = 'px-4 py-2 font-medium';

		if (isActive) {
			return `${baseClasses} border-b-2 ${
				theme === 'acqua'
					? 'border-blue-600 text-blue-600'
					: theme === 'erba'
						? 'border-green-600 text-green-600'
						: 'border-red-600 text-red-600'
			}`;
		}

		return `${baseClasses} text-gray-500 hover:text-gray-700`;
	};

	const getPrimaryButtonClass = () => {
		return `w-full text-white font-medium py-2 px-4 rounded ${
			theme === 'acqua'
				? 'bg-blue-600 hover:bg-blue-700'
				: theme === 'erba'
					? 'bg-green-600 hover:bg-green-700'
					: 'bg-red-600 hover:bg-red-700'
		}`;
	};

	const getSecondaryButtonClass = () => {
		return `w-full font-medium py-2 px-4 rounded border ${
			theme === 'acqua'
				? 'border-blue-600 text-blue-600 hover:bg-blue-50'
				: theme === 'erba'
					? 'border-green-600 text-green-600 hover:bg-green-50'
					: 'border-red-600 text-red-600 hover:bg-red-50'
		}`;
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="mb-8">
				<h1 className="text-3xl font-bold mb-2">Pannello Admin</h1>
				<p className="text-gray-600">
					Gestisci eventi, utenti e punteggi delle competizioni.
				</p>
			</div>

			{/* Tabs */}
			<div className="mb-8">
				<div className="flex border-b border-gray-200">
					<button
						className={getTabButtonClass('createEvent')}
						onClick={() => setActiveTab('createEvent')}>
						Crea Evento
					</button>
					<button
						className={getTabButtonClass('manageEvents')}
						onClick={() => setActiveTab('manageEvents')}>
						Gestisci Eventi
					</button>
					<button
						className={getTabButtonClass('assignPoints')}
						onClick={() => setActiveTab('assignPoints')}>
						Assegna Punti
					</button>
				</div>
			</div>

			{/* Tab content */}
			<div>
				{/* Create Event Tab */}
				{activeTab === 'createEvent' && (
					<div className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-xl font-bold mb-6">Crea un nuovo evento</h2>

						<form onSubmit={handleSubmit}>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="title"
										className="block text-sm font-medium text-gray-700 mb-1">
										Titolo
									</label>
									<input
										type="text"
										id="title"
										name="title"
										value={newEvent.title}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500"
									/>
								</div>

								<div>
									<label
										htmlFor="type"
										className="block text-sm font-medium text-gray-700 mb-1">
										Tipo di evento
									</label>
									<select
										id="type"
										name="type"
										value={newEvent.type}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500">
										<option value="coding">Coding Challenge</option>
										<option value="ctf">CTF</option>
										<option value="quiz">Quiz</option>
										<option value="hackathon">Hackathon</option>
										<option value="workshop">Workshop</option>
										<option value="altro">Altro</option>
									</select>
								</div>

								<div>
									<label
										htmlFor="date"
										className="block text-sm font-medium text-gray-700 mb-1">
										Data
									</label>
									<input
										type="date"
										id="date"
										name="date"
										value={newEvent.date}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500"
									/>
								</div>

								<div>
									<label
										htmlFor="time"
										className="block text-sm font-medium text-gray-700 mb-1">
										Orario
									</label>
									<input
										type="time"
										id="time"
										name="time"
										value={newEvent.time}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500"
									/>
								</div>

								<div>
									<label
										htmlFor="duration"
										className="block text-sm font-medium text-gray-700 mb-1">
										Durata (es. 2h, 30min, 48h)
									</label>
									<input
										type="text"
										id="duration"
										name="duration"
										value={newEvent.duration}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500"
									/>
								</div>

								<div>
									<label
										htmlFor="imageUrl"
										className="block text-sm font-medium text-gray-700 mb-1">
										URL Immagine (opzionale)
									</label>
									<input
										type="url"
										id="imageUrl"
										name="imageUrl"
										value={newEvent.imageUrl}
										onChange={handleInputChange}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500"
									/>
								</div>

								<div className="md:col-span-2">
									<label
										htmlFor="description"
										className="block text-sm font-medium text-gray-700 mb-1">
										Descrizione
									</label>
									<textarea
										id="description"
										name="description"
										value={newEvent.description}
										onChange={handleInputChange}
										required
										rows={4}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500"
									/>
								</div>

								<div className="md:col-span-2">
									<button type="submit" className={getPrimaryButtonClass()}>
										Crea Evento
									</button>
								</div>
							</div>
						</form>
					</div>
				)}

				{/* Manage Events Tab */}
				{activeTab === 'manageEvents' && (
					<div className="bg-white rounded-lg shadow-md overflow-hidden">
						<h2 className="text-xl font-bold p-6 border-b border-gray-200">
							Eventi attivi
						</h2>

						{events.length > 0 ? (
							<div className="overflow-x-auto">
								<table className="min-w-full divide-y divide-gray-200">
									<thead className="bg-gray-50">
										<tr>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Evento
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Data e Ora
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Tipo
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Partecipanti
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Azioni
											</th>
										</tr>
									</thead>
									<tbody className="bg-white divide-y divide-gray-200">
										{events.map((event, index) => (
											<tr
												key={event.id}
												className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm font-medium text-gray-900">
														{event.title}
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-500">
														{new Date(event.date).toLocaleDateString('it-IT')} -{' '}
														{event.time}
													</div>
													<div className="text-xs text-gray-500">
														Durata: {event.duration}
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<span
														className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
															event.type === 'coding'
																? 'bg-purple-100 text-purple-800'
																: event.type === 'ctf'
																	? 'bg-yellow-100 text-yellow-800'
																	: event.type === 'quiz'
																		? 'bg-blue-100 text-blue-800'
																		: event.type === 'hackathon'
																			? 'bg-green-100 text-green-800'
																			: 'bg-gray-100 text-gray-800'
														}`}>
														{event.type.toUpperCase()}
													</span>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-500">
														{event.participants?.length || 0} iscritti
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm">
													<button className="text-blue-600 hover:text-blue-900 mr-4">
														Modifica
													</button>
													<button className="text-red-600 hover:text-red-900">
														Elimina
													</button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						) : (
							<div className="p-6 text-center">
								<p className="text-gray-600">Nessun evento trovato.</p>
							</div>
						)}
					</div>
				)}

				{/* Assign Points Tab */}
				{activeTab === 'assignPoints' && (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="bg-white rounded-lg shadow-md p-6">
							<h2 className="text-xl font-bold mb-6">Assegna punti</h2>

							<div className="space-y-4">
								<div>
									<label
										htmlFor="eventSelect"
										className="block text-sm font-medium text-gray-700 mb-1">
										Seleziona evento
									</label>
									<select
										id="eventSelect"
										value={selectedEvent}
										onChange={(e) => setSelectedEvent(e.target.value)}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500">
										<option value="">-- Seleziona un evento --</option>
										{events.map((event) => (
											<option key={event.id} value={event.id}>
												{event.title} (
												{new Date(event.date).toLocaleDateString('it-IT')})
											</option>
										))}
									</select>
								</div>

								<div>
									<label
										htmlFor="userSelect"
										className="block text-sm font-medium text-gray-700 mb-1">
										Seleziona utente
									</label>
									<select
										id="userSelect"
										value={selectedUser}
										onChange={(e) => setSelectedUser(e.target.value)}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500">
										<option value="">-- Seleziona un utente --</option>
										{users.map((user) => (
											<option key={user.id} value={user.id}>
												{user.username} ({user.team})
											</option>
										))}
									</select>
								</div>

								<div>
									<label
										htmlFor="pointsInput"
										className="block text-sm font-medium text-gray-700 mb-1">
										Punti da assegnare
									</label>
									<input
										type="number"
										id="pointsInput"
										value={pointsToAdd}
										onChange={(e) => setPointsToAdd(Number(e.target.value))}
										min="1"
										max="1000"
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500"
									/>
								</div>

								<button
									onClick={handleAssignPoints}
									className={getPrimaryButtonClass()}
									disabled={!selectedUser || !selectedEvent}>
									Assegna Punti
								</button>
							</div>
						</div>

						<div className="bg-white rounded-lg shadow-md p-6">
							<h2 className="text-xl font-bold mb-6">Migliora skill</h2>

							<div className="space-y-4">
								<div>
									<label
										htmlFor="userSelectSkill"
										className="block text-sm font-medium text-gray-700 mb-1">
										Seleziona utente
									</label>
									<select
										id="userSelectSkill"
										value={selectedUser}
										onChange={(e) => setSelectedUser(e.target.value)}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500">
										<option value="">-- Seleziona un utente --</option>
										{users.map((user) => (
											<option key={user.id} value={user.id}>
												{user.username} ({user.team})
											</option>
										))}
									</select>
								</div>

								<div>
									<label
										htmlFor="skillSelect"
										className="block text-sm font-medium text-gray-700 mb-1">
										Seleziona skill
									</label>
									<select
										id="skillSelect"
										value={skillToImprove}
										onChange={(e) => setSkillToImprove(e.target.value)}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500">
										<option value="Coding">Coding</option>
										<option value="Security">Security</option>
										<option value="Algorithms">Algorithms</option>
										<option value="Teamwork">Teamwork</option>
										<option value="Problem Solving">Problem Solving</option>
									</select>
								</div>

								<div>
									<label
										htmlFor="skillLevelInput"
										className="block text-sm font-medium text-gray-700 mb-1">
										Nuovo livello (1-100)
									</label>
									<input
										type="number"
										id="skillLevelInput"
										value={skillLevel}
										onChange={(e) => setSkillLevel(Number(e.target.value))}
										min="1"
										max="100"
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500"
									/>
								</div>

								<button
									onClick={handleImproveSkill}
									className={getSecondaryButtonClass()}
									disabled={!selectedUser}>
									Aggiorna Skill
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
