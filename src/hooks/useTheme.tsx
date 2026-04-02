'use client';

import {
	useState,
	useEffect,
	createContext,
	useContext,
	ReactNode,
} from 'react';

type ThemeType = 'acqua' | 'fuoco' | 'erba';

interface ThemeContextType {
	theme: ThemeType;
	changeTheme: (newTheme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<ThemeType>('acqua');

	// Effetto per applicare classi CSS personalizzate a livello di documento
	useEffect(() => {
		// Rimuovi prima tutte le classi di tema
		document.documentElement.classList.remove(
			'theme-acqua',
			'theme-fuoco',
			'theme-erba',
		);
		// Aggiungi sempre la classe dark e il tema corrente
		document.documentElement.classList.add(`theme-${theme}`, 'mode-dark');

		// Imposta i colori di accent per il dispositivo in base al tema
		let metaThemeColor;
		switch (theme) {
			case 'acqua':
				metaThemeColor = '#0c4a6e'; // blue-900
				break;
			case 'fuoco':
				metaThemeColor = '#7f1d1d'; // red-900
				break;
			case 'erba':
				metaThemeColor = '#14532d'; // green-900
				break;
		}

		// Aggiorna il meta tag per il tema colore
		const metaTag = document.querySelector('meta[name="theme-color"]');
		if (metaTag) {
			metaTag.setAttribute('content', metaThemeColor);
		} else {
			const newMetaTag = document.createElement('meta');
			newMetaTag.name = 'theme-color';
			newMetaTag.content = metaThemeColor;
			document.head.appendChild(newMetaTag);
		}
	}, [theme]);

	const changeTheme = (newTheme: ThemeType) => {
		setTheme(newTheme);
		// Salva il tema nelle preferenze dell'utente
		localStorage.setItem('bde42-theme', newTheme);
	};

	// Carica il tema dalle preferenze al mount
	useEffect(() => {
		const savedTheme = localStorage.getItem('bde42-theme') as ThemeType | null;
		if (savedTheme && ['acqua', 'fuoco', 'erba'].includes(savedTheme)) {
			setTheme(savedTheme);
		}
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}
