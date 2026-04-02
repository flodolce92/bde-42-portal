import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/hooks/useTheme';
import Navbar from '@/components/Navbar';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'BDE 42 Roma Luiss - Portale Competizioni',
	description:
		'Portale per la gestione delle competizioni della BDE di 42 Roma Luiss',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="it" className="h-full dark">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}>
				<ThemeProvider>
					<div className="min-h-screen flex flex-col bg-slate-950 transition-colors duration-300">
						<Navbar />
						<main className="flex-grow pt-20">{children}</main>
						<footer className="py-6 px-6 text-center text-sm border-t border-slate-800 text-gray-400 bg-slate-950">
							<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
								<div>© {new Date().getFullYear()} BDE 42 Roma Luiss</div>
								<div className="mt-2 md:mt-0 flex space-x-4">
									<a
										href="https://github.com/42Roma"
										className="hover:text-indigo-500 transition-colors"
										target="_blank"
										rel="noopener noreferrer">
										GitHub
									</a>
									<a
										href="https://42roma.it"
										className="hover:text-indigo-500 transition-colors"
										target="_blank"
										rel="noopener noreferrer">
										42 Roma Luiss
									</a>
								</div>
							</div>
						</footer>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
