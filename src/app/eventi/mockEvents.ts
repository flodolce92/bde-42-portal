import { Event } from '@/store';

export const mockEvents: Event[] = [
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
