(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_eventi_[id]_page_tsx_cd82b834._.js", {

"[project]/src/app/eventi/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EventDetail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTheme.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Dati di esempio per mostrare la UI
const mockEvents = [
    {
        id: '1',
        title: 'Hackathon - Web3 Challenge',
        description: 'Partecipa al nostro hackathon di 48 ore dedicato allo sviluppo di applicazioni Web3. Metti alla prova le tue competenze in blockchain, smart contracts e applicazioni decentralizzate.\n\nDurante questa competizione avrai l&apos;opportunità di lavorare in team per creare soluzioni innovative basate sulla tecnologia blockchain. I progetti migliori saranno premiati e potranno essere presentati ad aziende del settore.\n\nRequisiti:\n- Conoscenza base di JavaScript/TypeScript\n- Interesse per la tecnologia blockchain\n- Spirito di squadra e creatività\n\nI partecipanti saranno divisi in team di 3-4 persone. È possibile partecipare con un team già formato o iscriversi individualmente ed essere assegnati a un team.',
        date: '2024-06-15',
        time: '10:00',
        duration: '48h',
        type: 'hackathon',
        imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
        participants: [
            '1',
            '2',
            '3'
        ]
    },
    {
        id: '2',
        title: 'CTF - Security Bootcamp',
        description: 'Una competizione Capture The Flag incentrata sulla sicurezza informatica. Risolvi sfide di penetration testing, reverse engineering e web exploitation.\n\nQuesto evento è ideale per chi vuole mettere alla prova le proprie competenze in ambito cybersecurity. Le sfide saranno di vari livelli di difficoltà, adatte sia a principianti che esperti.\n\nCategorie di sfide:\n- Web Exploitation\n- Reverse Engineering\n- Binary Exploitation\n- Cryptography\n- Forensics\n\nI primi tre classificati riceveranno premi speciali e tutti i partecipanti guadagneranno punti per la classifica generale.',
        date: '2024-05-20',
        time: '14:30',
        duration: '6h',
        type: 'ctf',
        imageUrl: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87',
        participants: [
            '1',
            '4',
            '5'
        ]
    },
    {
        id: '3',
        title: 'Quiz - Algoritmi e Strutture Dati',
        description: 'Test le tue conoscenze su algoritmi e strutture dati con questo quiz competitivo. Sfida gli altri studenti e scala la classifica!\n\nIl quiz sarà composto da domande teoriche e piccoli problemi da risolvere riguardanti algoritmi di ordinamento, strutture dati, complessità computazionale e pattern di progettazione.\n\nFormato:\n- 30 domande a risposta multipla\n- 5 problemi algoritmici da risolvere\n- Tempo limitato per ogni sezione\n\nAl termine del quiz ci sarà una sessione di discussione per analizzare le risposte e approfondire i concetti più complessi.',
        date: '2024-05-05',
        time: '16:00',
        duration: '2h',
        type: 'quiz'
    }
];
const mockParticipants = [
    {
        id: '1',
        username: 'hackerman42',
        team: 'acqua',
        score: 1250,
        skills: {
            'Coding': 90,
            'Security': 85,
            'Algorithms': 80
        }
    },
    {
        id: '2',
        username: 'codemaster',
        team: 'fuoco',
        score: 1150,
        skills: {
            'Coding': 88,
            'Security': 75,
            'Algorithms': 92
        }
    },
    {
        id: '3',
        username: 'bytebender',
        team: 'erba',
        score: 1050,
        skills: {
            'Coding': 82,
            'Security': 80,
            'Algorithms': 85
        }
    },
    {
        id: '4',
        username: 'datadragon',
        team: 'acqua',
        score: 950,
        skills: {
            'Coding': 75,
            'Security': 90,
            'Algorithms': 78
        }
    },
    {
        id: '5',
        username: 'algoguru',
        team: 'fuoco',
        score: 900,
        skills: {
            'Coding': 85,
            'Security': 70,
            'Algorithms': 95
        }
    }
];
function EventDetail({ params }) {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { currentUser, registerForEvent, unregisterFromEvent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])();
    const [event, setEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [participants, setParticipants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isRegistered, setIsRegistered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirmModal, setShowConfirmModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Determina se dovremmo usare il tema scuro basato sulla preferenza del sistema
    const isDarkMode = ()=>{
        // Controlla se è attiva la preferenza del sistema per il tema scuro
        if ("TURBOPACK compile-time truthy", 1) {
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        "TURBOPACK unreachable";
    };
    // Controlla se siamo in modalità scura
    const darkMode = isDarkMode();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventDetail.useEffect": ()=>{
            // In un'app reale, qui caricheremmo i dati dal backend
            // Per ora usiamo i dati di esempio
            const foundEvent = mockEvents.find({
                "EventDetail.useEffect.foundEvent": (e)=>e.id === params.id
            }["EventDetail.useEffect.foundEvent"]);
            setEvent(foundEvent || null);
            if (foundEvent?.participants) {
                // Filtra i partecipanti che sono presenti nell'evento
                const eventParticipants = mockParticipants.filter({
                    "EventDetail.useEffect.eventParticipants": (user)=>foundEvent.participants?.includes(user.id)
                }["EventDetail.useEffect.eventParticipants"]);
                setParticipants(eventParticipants);
                // Verifica se l'utente corrente è registrato
                if (currentUser) {
                    setIsRegistered(foundEvent.participants.includes(currentUser.id));
                }
            }
        }
    }["EventDetail.useEffect"], [
        params.id,
        currentUser
    ]);
    const handleRegistration = ()=>{
        if (!event || !currentUser) return;
        if (isRegistered) {
            setShowConfirmModal(true);
        } else {
            // Registra l'utente all'evento
            registerForEvent(event.id, currentUser.id);
            setIsRegistered(true);
            setParticipants((prev)=>[
                    ...prev,
                    currentUser
                ]);
        }
    };
    const handleUnregister = ()=>{
        if (!event || !currentUser) return;
        // Annulla la registrazione dell'utente
        unregisterFromEvent(event.id, currentUser.id);
        setIsRegistered(false);
        setParticipants((prev)=>prev.filter((user)=>user.id !== currentUser.id));
        setShowConfirmModal(false);
    };
    const getButtonClass = ()=>{
        const baseClasses = 'font-medium py-3 px-6 rounded-lg transition-colors shadow-md';
        if (!isRegistered) {
            switch(theme){
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
    const getTeamColor = (team)=>{
        switch(team){
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
    const getEventTypeLabel = (type)=>{
        switch(type){
            case 'coding':
                return 'Coding Challenge';
            case 'ctf':
                return 'Capture The Flag';
            case 'quiz':
                return 'Quiz';
            case 'hackathon':
                return 'Hackathon';
            default:
                return 'Altro';
        }
    };
    const getThemeStyles = ()=>{
        switch(theme){
            case 'acqua':
                return {
                    bgGradient: 'bg-gradient-to-r from-sky-950 via-blue-950 to-sky-900',
                    textColor: 'text-sky-100',
                    accentBg: 'bg-sky-800',
                    cardBg: 'bg-slate-900',
                    textDefault: 'text-gray-200',
                    textMuted: 'text-gray-400',
                    cardBorder: 'border-sky-800',
                    decoration: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 bottom-0 w-32 h-32 opacity-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 100 100",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0,25 Q25,0 50,25 T100,25 T150,25",
                                fill: "none",
                                stroke: "white",
                                strokeWidth: "5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                    attributeName: "d",
                                    dur: "10s",
                                    repeatCount: "indefinite",
                                    values: "M0,25 Q25,0 50,25 T100,25; M0,25 Q25,50 50,25 T100,25; M0,25 Q25,0 50,25 T100,25"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                    lineNumber: 199,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                lineNumber: 198,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/eventi/[id]/page.tsx",
                            lineNumber: 197,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/eventi/[id]/page.tsx",
                        lineNumber: 196,
                        columnNumber: 13
                    }, this)
                };
            case 'erba':
                return {
                    bgGradient: 'bg-gradient-to-r from-green-950 via-emerald-950 to-green-900',
                    textColor: 'text-green-100',
                    accentBg: 'bg-green-800',
                    cardBg: 'bg-slate-900',
                    textDefault: 'text-gray-200',
                    textMuted: 'text-gray-400',
                    cardBorder: 'border-green-800',
                    decoration: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 bottom-0 w-32 h-32 opacity-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 100 100",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M10,90 Q30,70 50,90 T90,90",
                                fill: "none",
                                stroke: "white",
                                strokeWidth: "5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                    attributeName: "d",
                                    dur: "10s",
                                    repeatCount: "indefinite",
                                    values: "M10,90 Q30,70 50,90 T90,90; M10,90 Q30,110 50,90 T90,90; M10,90 Q30,70 50,90 T90,90"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                    lineNumber: 221,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                lineNumber: 220,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/eventi/[id]/page.tsx",
                            lineNumber: 219,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/eventi/[id]/page.tsx",
                        lineNumber: 218,
                        columnNumber: 13
                    }, this)
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
                    decoration: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 bottom-0 w-32 h-32 opacity-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 100 100",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M50,10 Q60,40 90,50 Q60,60 50,90 Q40,60 10,50 Q40,40 50,10",
                                fill: "none",
                                stroke: "white",
                                strokeWidth: "5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                    attributeName: "d",
                                    dur: "8s",
                                    repeatCount: "indefinite",
                                    values: "M50,10 Q60,40 90,50 Q60,60 50,90 Q40,60 10,50 Q40,40 50,10; M50,10 Q70,40 90,50 Q70,60 50,90 Q30,60 10,50 Q30,40 50,10; M50,10 Q60,40 90,50 Q60,60 50,90 Q40,60 10,50 Q40,40 50,10"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                    lineNumber: 243,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                lineNumber: 242,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/eventi/[id]/page.tsx",
                            lineNumber: 241,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/eventi/[id]/page.tsx",
                        lineNumber: 240,
                        columnNumber: 13
                    }, this)
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
                    decoration: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 bottom-0 w-32 h-32 opacity-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 100 100",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0,25 Q25,0 50,25 T100,25 T150,25",
                                fill: "none",
                                stroke: "white",
                                strokeWidth: "5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                    attributeName: "d",
                                    dur: "10s",
                                    repeatCount: "indefinite",
                                    values: "M0,25 Q25,0 50,25 T100,25; M0,25 Q25,50 50,25 T100,25; M0,25 Q25,0 50,25 T100,25"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                lineNumber: 264,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/eventi/[id]/page.tsx",
                            lineNumber: 263,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/eventi/[id]/page.tsx",
                        lineNumber: 262,
                        columnNumber: 13
                    }, this)
                };
        }
    };
    const themeStyles = getThemeStyles();
    if (!event) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `container mx-auto px-4 py-16 text-center ${themeStyles.textDefault}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold mb-4",
                    children: "Evento non trovato"
                }, void 0, false, {
                    fileName: "[project]/src/app/eventi/[id]/page.tsx",
                    lineNumber: 282,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-8",
                    children: "L&apos evento che stai cercando non esiste o è stato rimosso."
                }, void 0, false, {
                    fileName: "[project]/src/app/eventi/[id]/page.tsx",
                    lineNumber: 283,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/eventi",
                    className: `px-6 py-3 rounded-lg ${getButtonClass()}`,
                    children: "Torna agli eventi"
                }, void 0, false, {
                    fileName: "[project]/src/app/eventi/[id]/page.tsx",
                    lineNumber: 284,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/eventi/[id]/page.tsx",
            lineNumber: 281,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `container mx-auto px-4 py-8 mt-16 ${themeStyles.textDefault}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/eventi",
                    className: `flex items-center ${themeStyles.textDefault} hover:opacity-75`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5 mr-1",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                            }, void 0, false, {
                                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                lineNumber: 302,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/eventi/[id]/page.tsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, this),
                        "Torna agli eventi"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/eventi/[id]/page.tsx",
                    lineNumber: 297,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative overflow-hidden rounded-lg shadow-xl mb-8 border ${themeStyles.cardBorder}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative ${themeStyles.bgGradient} p-6 ${themeStyles.textColor}`,
                        children: [
                            themeStyles.decoration,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-3xl font-bold mb-2",
                                                        children: event.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                        lineNumber: 316,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-20`,
                                                                children: getEventTypeLabel(event.type)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-20",
                                                                children: [
                                                                    participants.length,
                                                                    " iscritti"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                                lineNumber: 321,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                lineNumber: 315,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleRegistration,
                                                className: `${getButtonClass()}`,
                                                disabled: !currentUser,
                                                children: isRegistered ? 'Annulla iscrizione' : 'Iscriviti all&apos;evento'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                lineNumber: 327,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5 mr-2 text-white",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                        lineNumber: 338,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-white text-opacity-80",
                                                                children: "Data"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                                lineNumber: 342,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium",
                                                                children: new Date(event.date).toLocaleDateString('it-IT', {
                                                                    day: 'numeric',
                                                                    month: 'long',
                                                                    year: 'numeric'
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                                lineNumber: 343,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                lineNumber: 337,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5 mr-2 text-white",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-white text-opacity-80",
                                                                children: "Orario"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                                lineNumber: 358,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium",
                                                                children: event.time
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                                lineNumber: 359,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                lineNumber: 353,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5 mr-2 text-white",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                            lineNumber: 365,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-white text-opacity-80",
                                                                children: "Durata"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                                lineNumber: 368,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium",
                                                                children: event.duration
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                                lineNumber: 369,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                lineNumber: 363,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                        lineNumber: 336,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/eventi/[id]/page.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this),
                    event?.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-64 mb-6 rounded-lg overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: event.imageUrl,
                            alt: event.title,
                            fill: true,
                            className: "object-cover",
                            sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        }, void 0, false, {
                            fileName: "[project]/src/app/eventi/[id]/page.tsx",
                            lineNumber: 378,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/eventi/[id]/page.tsx",
                        lineNumber: 377,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-6 ${themeStyles.cardBg}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "prose max-w-none",
                            children: event.description.split('\n').map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `${paragraph === '' ? 'mb-4' : undefined} ${themeStyles.textDefault}`,
                                    children: paragraph
                                }, index, false, {
                                    fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                    lineNumber: 391,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/eventi/[id]/page.tsx",
                            lineNumber: 389,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/eventi/[id]/page.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `rounded-lg shadow-md overflow-hidden mb-8 border ${themeStyles.cardBorder} ${themeStyles.cardBg}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold mb-6",
                            children: "Partecipanti"
                        }, void 0, false, {
                            fileName: "[project]/src/app/eventi/[id]/page.tsx",
                            lineNumber: 402,
                            columnNumber: 11
                        }, this),
                        participants.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                            children: participants.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center p-3 border rounded-lg ${darkMode ? 'border-gray-700' : 'border-gray-200'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-10 h-10 rounded-full ${getTeamColor(user.team)} flex items-center justify-center text-white font-bold mr-3`,
                                            children: user.username.charAt(0).toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                            lineNumber: 410,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium",
                                                    children: user.username
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`,
                                                    children: user.team === 'acqua' ? 'Team Acqua' : user.team === 'erba' ? 'Team Erba' : 'Team Fuoco'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, user.id, true, {
                                    fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                    lineNumber: 407,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/eventi/[id]/page.tsx",
                            lineNumber: 405,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: darkMode ? 'text-gray-400' : 'text-gray-600',
                            children: "Nessun partecipante si è ancora iscritto a questo evento."
                        }, void 0, false, {
                            fileName: "[project]/src/app/eventi/[id]/page.tsx",
                            lineNumber: 425,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/eventi/[id]/page.tsx",
                    lineNumber: 401,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                lineNumber: 400,
                columnNumber: 7
            }, this),
            showConfirmModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${themeStyles.cardBg} rounded-lg shadow-xl max-w-md w-full p-6`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold mb-4",
                            children: "Conferma annullamento"
                        }, void 0, false, {
                            fileName: "[project]/src/app/eventi/[id]/page.tsx",
                            lineNumber: 436,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`,
                            children: "Sei sicuro di voler annullare la tua iscrizione a questo evento? Questa azione non può essere annullata."
                        }, void 0, false, {
                            fileName: "[project]/src/app/eventi/[id]/page.tsx",
                            lineNumber: 437,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowConfirmModal(false),
                                    className: `px-4 py-2 border rounded-lg ${darkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-50'}`,
                                    children: "Annulla"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                    lineNumber: 442,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleUnregister,
                                    className: `px-4 py-2 rounded-lg ${theme === 'acqua' ? darkMode ? 'bg-sky-700 hover:bg-sky-600' : 'bg-sky-500 hover:bg-sky-400' : theme === 'erba' ? darkMode ? 'bg-green-700 hover:bg-green-600' : 'bg-green-500 hover:bg-green-400' : darkMode ? 'bg-red-700 hover:bg-red-600' : 'bg-red-500 hover:bg-red-400'} text-white`,
                                    children: "Conferma"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/eventi/[id]/page.tsx",
                                    lineNumber: 450,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/eventi/[id]/page.tsx",
                            lineNumber: 441,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/eventi/[id]/page.tsx",
                    lineNumber: 435,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/eventi/[id]/page.tsx",
                lineNumber: 434,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/eventi/[id]/page.tsx",
        lineNumber: 295,
        columnNumber: 5
    }, this);
}
_s(EventDetail, "E+md//a2Qni13flBK8NkqORUMLE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c = EventDetail;
var _c;
__turbopack_context__.k.register(_c, "EventDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_eventi_%5Bid%5D_page_tsx_cd82b834._.js.map