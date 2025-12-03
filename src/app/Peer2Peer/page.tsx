"use client";

import React, { useRef, useState, MouseEvent } from 'react';
import { useAppStore, Event as AppEvent } from '@/store';
import { useTheme } from '@/hooks/useTheme';
import Link from 'next/link';

interface CyberCardProps {
	event: AppEvent;
}

function CyberCard({ event }: CyberCardProps) {
	const cardRef = useRef<HTMLDivElement>(null);
	const [transform, setTransform] = useState('');
	const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		if (!cardRef.current) return;
		const card = cardRef.current;
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		const rotateX = ((y - centerY) / centerY) * -10;
		const rotateY = ((x - centerX) / centerX) * 10;

		setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
		setGlarePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
	};

	const handleMouseLeave = () => {
		setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
		setGlarePos({ x: 50, y: 50 });
	};

	return (
		<div className="cyber-card-container noselect">
			<div className="cyber-canvas">
				{/* Tracker points */}
				<div className="tracker tr-1"></div>
				<div className="tracker tr-2"></div>
				<div className="tracker tr-3"></div>
				<div className="tracker tr-4"></div>
				<div className="tracker tr-5"></div>
				<div className="tracker tr-6"></div>
				<div className="tracker tr-7"></div>
				<div className="tracker tr-8"></div>
				<div className="tracker tr-9"></div>

				<div
					ref={cardRef}
					className="cyber-card"
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
					style={{ transform, transition: 'transform 0.1s ease-out' }}
				>
					<div className="card-content">
						{/* Glare effect */}
						<div
							className="card-glare"
							style={{
								background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
							}}
						></div>

						{/* Cyber lines */}
						<div className="cyber-lines">
							<span></span><span></span><span></span><span></span>
						</div>

						{/* Scan line */}
						<div className="scan-line"></div>

						{/* Corner elements */}
						<div className="corner-elements">
							<span></span><span></span><span></span><span></span>
						</div>

						{/* Content */}
						<div className="card-main-content">
							<div className="title">{event.title}</div>
							<div className="event-meta">
								{event.date} · {event.time} · {event.duration}
							</div>
							<div className="description">{event.description}</div>

							{/* Glowing elements */}
							<div className="glowing-elements">
								<div className="glow-1"></div>
								<div className="glow-2"></div>
								<div className="glow-3"></div>
							</div>

							{/* Files section */}
							{event.files && event.files.length > 0 && (
								<div className="files-section">
									<div className="subtitle">
										<span>DOWNLOAD</span>
										<span className="highlight">MATERIALI</span>
									</div>
									{event.files.map((f, idx) => (
										<a
											key={idx}
											href={f.url}
											target="_blank"
											rel="noopener noreferrer"
											download
											className="download-link"
										>
											<span className="download-icon">↓</span>
											{f.name}
										</a>
									))}
								</div>
							)}
						</div>

						{/* Particles */}
						<div className="card-particles">
							<span></span><span></span><span></span>
							<span></span><span></span><span></span>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.cyber-card-container {
					user-select: none;
					-webkit-user-select: none;
					perspective: 1000px;
				}

				.noselect {
					-webkit-touch-callout: none;
					-webkit-user-select: none;
					-khtml-user-select: none;
					-moz-user-select: none;
					-ms-user-select: none;
					user-select: none;
				}

				.cyber-canvas {
					position: relative;
					width: 100%;
					max-width: 900px;
					margin: 0 auto;
				}

				.tracker {
					position: absolute;
					width: 6px;
					height: 6px;
					background: rgba(0, 255, 255, 0.5);
					border-radius: 50%;
					box-shadow: 0 0 8px rgba(0, 255, 255, 0.8);
					z-index: 1;
					animation: pulse 2s infinite;
				}

				.tr-1 { top: 10%; left: 10%; animation-delay: 0s; }
				.tr-2 { top: 10%; right: 10%; animation-delay: 0.2s; }
				.tr-3 { top: 50%; left: 5%; animation-delay: 0.4s; }
				.tr-4 { top: 50%; right: 5%; animation-delay: 0.6s; }
				.tr-5 { bottom: 10%; left: 10%; animation-delay: 0.8s; }
				.tr-6 { bottom: 10%; right: 10%; animation-delay: 1s; }
				.tr-7 { top: 30%; left: 30%; animation-delay: 1.2s; }
				.tr-8 { top: 70%; right: 30%; animation-delay: 1.4s; }
				.tr-9 { top: 50%; left: 50%; animation-delay: 1.6s; }

				.cyber-card {
					position: relative;
					width: 100%;
					min-height: 320px;
					background: linear-gradient(135deg, rgba(10, 25, 47, 0.9) 0%, rgba(16, 37, 60, 0.95) 100%);
					border-radius: 16px;
					padding: 1.5rem;
					transform-style: preserve-3d;
					border: 2px solid rgba(0, 255, 255, 0.3);
					box-shadow:
						0 10px 40px rgba(0, 0, 0, 0.5),
						0 0 20px rgba(0, 255, 255, 0.2),
						inset 0 0 20px rgba(0, 255, 255, 0.05);
					overflow: hidden;
				}

				.card-content {
					position: relative;
					width: 100%;
					height: 100%;
					z-index: 2;
				}

				.card-glare {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					pointer-events: none;
					opacity: 0;
					transition: opacity 0.3s;
					z-index: 3;
				}

				.cyber-card:hover .card-glare {
					opacity: 1;
				}

				.cyber-lines {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					pointer-events: none;
					z-index: 1;
				}

				.cyber-lines span {
					position: absolute;
					background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.5), transparent);
					animation: scan 4s linear infinite;
				}

				.cyber-lines span:nth-child(1) {
					top: 20%;
					left: 0;
					width: 100%;
					height: 1px;
					animation-delay: 0s;
				}

				.cyber-lines span:nth-child(2) {
					top: 40%;
					left: 0;
					width: 100%;
					height: 1px;
					animation-delay: 1s;
				}

				.cyber-lines span:nth-child(3) {
					top: 60%;
					left: 0;
					width: 100%;
					height: 1px;
					animation-delay: 2s;
				}

				.cyber-lines span:nth-child(4) {
					top: 80%;
					left: 0;
					width: 100%;
					height: 1px;
					animation-delay: 3s;
				}

				.scan-line {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 2px;
					background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.8), transparent);
					animation: scanVertical 3s linear infinite;
					z-index: 4;
				}

				.corner-elements {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					pointer-events: none;
					z-index: 5;
				}

				.corner-elements span {
					position: absolute;
					width: 20px;
					height: 20px;
					border: 2px solid rgba(0, 255, 255, 0.6);
				}

				.corner-elements span:nth-child(1) {
					top: 10px;
					left: 10px;
					border-right: none;
					border-bottom: none;
				}

				.corner-elements span:nth-child(2) {
					top: 10px;
					right: 10px;
					border-left: none;
					border-bottom: none;
				}

				.corner-elements span:nth-child(3) {
					bottom: 10px;
					left: 10px;
					border-right: none;
					border-top: none;
				}

				.corner-elements span:nth-child(4) {
					bottom: 10px;
					right: 10px;
					border-left: none;
					border-top: none;
				}

				.card-main-content {
					position: relative;
					z-index: 6;
				}

				.title {
					font-size: 1.75rem;
					font-weight: 900;
					color: #00ffff;
					text-shadow:
						0 0 10px rgba(0, 255, 255, 0.8),
						0 0 20px rgba(0, 255, 255, 0.5),
						0 0 30px rgba(0, 255, 255, 0.3);
					margin-bottom: 0.75rem;
					line-height: 1.2;
					text-transform: uppercase;
					letter-spacing: 1.5px;
				}

				.event-meta {
					font-size: 0.8rem;
					color: rgba(255, 255, 255, 0.6);
					margin-bottom: 0.75rem;
					font-family: monospace;
					letter-spacing: 0.5px;
				}

				.description {
					color: rgba(255, 255, 255, 0.8);
					line-height: 1.5;
					margin-bottom: 1.5rem;
					font-size: 0.9rem;
				}

				.glowing-elements {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					pointer-events: none;
					z-index: 2;
				}

				.glow-1, .glow-2, .glow-3 {
					position: absolute;
					border-radius: 50%;
					filter: blur(40px);
					opacity: 0.3;
					animation: glow 3s ease-in-out infinite;
				}

				.glow-1 {
					top: 20%;
					left: 10%;
					width: 150px;
					height: 150px;
					background: rgba(0, 255, 255, 0.4);
					animation-delay: 0s;
				}

				.glow-2 {
					top: 60%;
					right: 15%;
					width: 120px;
					height: 120px;
					background: rgba(0, 150, 255, 0.4);
					animation-delay: 1s;
				}

				.glow-3 {
					bottom: 20%;
					left: 50%;
					width: 100px;
					height: 100px;
					background: rgba(0, 255, 200, 0.4);
					animation-delay: 2s;
				}

				.subtitle {
					display: flex;
					gap: 0.5rem;
					margin-bottom: 0.75rem;
					font-size: 0.75rem;
					font-weight: 700;
					text-transform: uppercase;
					letter-spacing: 1.5px;
				}

				.subtitle span {
					color: rgba(255, 255, 255, 0.7);
				}

				.subtitle .highlight {
					color: #00ffff;
					text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
				}

				.files-section {
					margin-top: 1.5rem;
				}

				.download-link {
					display: flex;
					align-items: center;
					gap: 0.5rem;
					padding: 0.6rem 0.8rem;
					margin-bottom: 0.4rem;
					background: rgba(0, 255, 255, 0.1);
					border: 1px solid rgba(0, 255, 255, 0.3);
					border-radius: 6px;
					color: #00ffff;
					text-decoration: none;
					font-weight: 600;
					transition: all 0.3s;
					font-size: 0.85rem;
				}

				.download-link:hover {
					background: rgba(0, 255, 255, 0.2);
					border-color: rgba(0, 255, 255, 0.6);
					box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
					transform: translateX(5px);
				}

				.download-icon {
					font-size: 1rem;
					font-weight: bold;
				}

				.card-particles {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					pointer-events: none;
					z-index: 1;
				}

				.card-particles span {
					position: absolute;
					width: 4px;
					height: 4px;
					background: rgba(0, 255, 255, 0.6);
					border-radius: 50%;
					animation: float 6s ease-in-out infinite;
				}

				.card-particles span:nth-child(1) { top: 10%; left: 20%; animation-delay: 0s; }
				.card-particles span:nth-child(2) { top: 30%; left: 80%; animation-delay: 1s; }
				.card-particles span:nth-child(3) { top: 50%; left: 40%; animation-delay: 2s; }
				.card-particles span:nth-child(4) { top: 70%; left: 70%; animation-delay: 3s; }
				.card-particles span:nth-child(5) { top: 80%; left: 30%; animation-delay: 4s; }
				.card-particles span:nth-child(6) { top: 20%; left: 60%; animation-delay: 5s; }

				@keyframes pulse {
					0%, 100% {
						opacity: 0.5;
						transform: scale(1);
					}
					50% {
						opacity: 1;
						transform: scale(1.5);
					}
				}

				@keyframes scan {
					0% {
						transform: translateX(-100%);
						opacity: 0;
					}
					50% {
						opacity: 1;
					}
					100% {
						transform: translateX(100%);
						opacity: 0;
					}
				}

				@keyframes scanVertical {
					0% {
						transform: translateY(0);
						opacity: 0;
					}
					50% {
						opacity: 1;
					}
					100% {
						transform: translateY(400px);
						opacity: 0;
					}
				}

				@keyframes glow {
					0%, 100% {
						opacity: 0.2;
						transform: scale(1);
					}
					50% {
						opacity: 0.4;
						transform: scale(1.1);
					}
				}

				@keyframes float {
					0%, 100% {
						transform: translateY(0px) translateX(0px);
						opacity: 0.3;
					}
					50% {
						transform: translateY(-20px) translateX(10px);
						opacity: 0.6;
					}
				}
			`}</style>
		</div>
	);
}

export default function Peer2PeerPage() {
const getThemeStyles = () => {
	const { theme } = useTheme();
		switch(theme) {
			case 'acqua':
				return {
					mainGradient: 'bg-gradient-to-r from-sky-950 via-blue-950 to-sky-900',
					cardBg: 'bg-slate-900',
					border: 'border-sky-900',
					highlight: 'bg-sky-800 text-sky-100',
					button: 'bg-sky-700 hover:bg-sky-600 text-white',
					secondaryButton: 'bg-transparent border border-sky-700 text-sky-100 hover:bg-sky-900',
					activeTab: 'bg-sky-700 text-white',
					inactiveTab: 'text-sky-100 hover:bg-sky-900',
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
					secondaryButton: 'bg-transparent border border-red-700 text-red-100 hover:bg-red-900',
					activeTab: 'bg-red-700 text-white',
					inactiveTab: 'text-red-100 hover:bg-red-900',
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
					secondaryButton: 'bg-transparent border border-green-700 text-green-100 hover:bg-green-900',
					activeTab: 'bg-green-700 text-white',
					inactiveTab: 'text-green-100 hover:bg-green-900',
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
					secondaryButton: 'bg-transparent border border-sky-700 text-sky-100 hover:bg-sky-900',
					activeTab: 'bg-sky-700 text-white',
					inactiveTab: 'text-sky-100 hover:bg-sky-900',
					textColor: 'text-sky-100',
					textMuted: 'text-gray-400',
					link: 'text-sky-400 hover:text-sky-300'
				};
		}
	};

	const styles = getThemeStyles();
	const events = useAppStore((s) => s.events ?? []);
	// Mostriamo solo eventi di tipo 'workshop'
	const workshopEvents = events.filter((e) => e.type === 'workshop');

	const downloadJson = (event: AppEvent) => {
		const dataStr = JSON.stringify(event, null, 2);
		const blob = new Blob([dataStr], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `evento-${event.id ?? 'data'}.json`;
		document.body.appendChild(a);
		a.click();
		a.remove();
		URL.revokeObjectURL(url);
	};

	return (
		<div className={`min-h-screen ${styles.mainGradient} pt-8 pb-16`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<header className="mb-6">
					<h1 className="text-3xl font-bold">Peer2Peer</h1>
					<p className="mt-2 text-lg text-slate-300">
						Benvenuto nella pagina Peer2Peer. Qui puoi consultare gli eventi disponibili
						e scaricare i materiali o i dettagli degli eventi per condividerli con i tuoi
						compagni.
					</p>
				</header>

				<section aria-label="Lista eventi" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					{workshopEvents.length === 0 ? (
						<p className="text-slate-400 col-span-full">Nessun workshop disponibile al momento.</p>
					) : (
						workshopEvents.map((ev) => (
							<CyberCard key={ev.id} event={ev} />
						))
					)}
				</section>
			</div>
		</div>
	);
}
