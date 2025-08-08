### 🏫 BDE 42 Portal

Un portale open-source per organizzare e vivere la vita interna del network 42: eventi (hackathon, CTF, quiz), club tematici, dashboard utente, area admin e classifica studenti.

---

### ⚡ Cos'è in poche parole
- **Portale studenti 42**: aggrega eventi interni, gestione club e classifica.
- **UI moderna**: Next.js + React + Tailwind, con temi dinamici per team (Acqua, Fuoco, Erba).
- **Pronto alla collaborazione**: pensato per essere esteso dalla community 42 via Pull Request.

---

### ▶️ Avvio rapido (locale)
- **Prerequisiti**: Node.js 18.18+ (consigliato 20 LTS), npm 9+

1) Clona il repository
```bash
git clone https://github.com/<org-o-utente>/bde-42-portal.git
cd bde-42-portal
```

2) Installa le dipendenze
```bash
npm install
```

3) Avvia il server di sviluppo
```bash
npm run dev
```

4) Apri l'app
- Browser: `http://localhost:3000`

5) Build produzione (opzionale)
```bash
npm run build
npm start
```

Note:
- Lo sviluppo usa Next.js con Turbopack per rebuild rapidi.
- Nessuna variabile d'ambiente è richiesta per la sola UI mock; verranno introdotte per le feature di autenticazione e sync eventi.

---

### 🛣️ Prossimi passi (Roadmap)
- **Hosting**
  - Vercel consigliato: collega il repo, imposta il framework Next.js, build `npm run build` e start `npm start` (auto-configurati da Vercel).
  - Alternativa: Docker/Container + Node su server (reverse proxy con Nginx, HTTPS via Let's Encrypt).

- **Login tramite Intra 42 (OAuth2)**
  - Accedi all' Intra 42 e ottieni `CLIENT_ID` e `CLIENT_SECRET`.
  - Implementa OAuth in Next.js (consigliato NextAuth.js con provider custom 42 o flusso OAuth2 manuale via Route Handlers).
  - Variabili attese: `INTRA_42_CLIENT_ID`, `INTRA_42_CLIENT_SECRET`, `INTRA_42_REDIRECT_URI`, (se usi NextAuth) `NEXTAUTH_URL` e `NEXTAUTH_SECRET`.

- **Sincronizzazione eventi da Intra 42**
  - Implementa un servizio di sync che legge gli eventi dall'API Intra e li salva nel DB.
  - Scelte tecniche consigliate: Postgres (Neon/Supabase) + Prisma ORM; cron job (Vercel Cron o scheduler esterno) per refresh periodico; endpoint manuale per sync on-demand.
  - UI: mappa gli eventi sincronizzati nella sezione `Eventi` e dettaglio `eventi/[id]`.

- **Sondaggi (Polls)**
  - Modello dati: `Poll` (titolo, descrizione, stato), `PollOption`, `PollVote` (vincola a utente autenticato).
  - Funzioni: creazione (admin), voto singolo opzionalmente revocabile, risultati live, rate limiting.
  - Integrazione: embed nei dettagli evento o sezione dedicata `sondaggi/`.

- **Dashboard Admin**
  - CRUD eventi (crea/modifica/archivia), gestione visibilità, assegnazione punti, moderazione sondaggi.
  - Ruoli/permessi basati su team/ruolo utente (es. admin vs student).

- **Contributi (Open Source)**
  - Forka il repo, crea un branch feature (`feat/<nome-feature>`), invia una PR ben descritta.
  - Mantieni lo stile del codice (TypeScript, componenti chiari, stato con Zustand, Tailwind) e includi note di migrazione se tocchi lo schema dati.
  - Issue e proposte sono benvenute (bug, miglioramenti UI/UX, integrazioni API).

---

### 📦 Stack attuale (alto livello)
- **Framework**: Next.js 15 + React 19 + TypeScript
- **Stili**: Tailwind CSS 4
- **Stato**: Zustand
- **Grafici**: D3/Recharts (per skill e classifiche)

Se vuoi contribuire su un punto della roadmap, apri una issue per coordinare design e interfacce prima di implementare.