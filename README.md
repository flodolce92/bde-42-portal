# 🏆 BDE 42 Roma Luiss - Portale Competizioni

Un portale web performante, elegante e scalabile per la gestione delle competizioni della BDE di 42 Roma Luiss. Il sistema consente agli utenti di partecipare agli eventi, guadagnare punti e visualizzare l'evoluzione delle proprie skill tramite un grafico ispirato all'Intra di 42.

## 🚀 Funzionalità principali

- **Dashboard Utente**: Visualizza il tuo storico competizioni, punti guadagnati e l'evoluzione delle tue skill con grafici dinamici
- **Gestione Eventi**: Visualizza, filtra e iscriviti agli eventi di vario tipo (coding challenge, CTF, quiz, hackathon)
- **Classifica**: Verifica la tua posizione rispetto agli altri utenti, filtrabile per team e tipo di skill
- **Personalizzazione grafica per i Team**: Interfaccia che si adatta dinamicamente al team dell'utente (Acqua, Erba, Fuoco)
- **Pannello Admin**: Gestione degli eventi, assegnazione di punti e aggiornamento delle skill degli utenti

## 🛠️ Tecnologie utilizzate

- **Frontend**: [Next.js 14](https://nextjs.org/) con React e TypeScript
- **Stile**: [TailwindCSS](https://tailwindcss.com/) per un design responsive e moderno
- **Grafici**: [D3.js](https://d3js.org/) per visualizzazioni dati avanzate
- **Gestione Stato**: [Zustand](https://github.com/pmndrs/zustand) per una gestione dello stato semplice e potente
- **Internazionalizzazione**: Supporto multilingua tramite [next-intl](https://next-intl-docs.vercel.app/)

## 🚀 Installazione e utilizzo

### Prerequisiti

- Node.js 18.x o superiore
- npm 9.x o superiore

### Installazione

1. Clona il repository

```bash
git clone https://github.com/your-username/bde-42-portal.git
cd bde-42-portal
```

2. Installa le dipendenze

```bash
npm install
```

3. Avvia il server di sviluppo

```bash
npm run dev
```

4. Apri [http://localhost:3000](http://localhost:3000) nel browser

### Build per la produzione

```bash
npm run build
npm start
```

## 📂 Struttura del progetto

```
bde-42-portal/
├── src/                    # Codice sorgente
│   ├── app/                # App router di Next.js
│   │   ├── dashboard/      # Dashboard utente
│   │   ├── eventi/         # Pagina eventi
│   │   ├── classifica/     # Classifica utenti
│   │   ├── admin/          # Pannello admin
│   │   └── ...
│   ├── components/         # Componenti riutilizzabili
│   │   ├── EventCard.tsx   # Card per visualizzare eventi
│   │   ├── SkillGraph.tsx  # Grafico per l'evoluzione delle skill
│   │   ├── Navbar.tsx      # Barra di navigazione
│   │   └── ...
│   ├── hooks/              # Custom hooks
│   │   ├── useTheme.tsx    # Hook per la gestione dei temi
│   │   └── ...
│   ├── store/              # Store Zustand per la gestione dello stato
│   └── ...
├── public/                 # File statici
└── ...
```

## 🎨 Temi dei Team

Il portale presenta tre temi dinamici basati sul team di appartenenza dell'utente:

- **Acqua** 🌊: Tonalità di blu, transizioni fluide
- **Erba** 🌿: Tonalità di verde, effetti naturali
- **Fuoco** 🔥: Tonalità di rosso/arancione, animazioni dinamiche

## 👥 Contribuire

Siamo aperti a contributi! Se desideri migliorare il portale:

1. Fai un fork del repository
2. Crea un branch per la tua feature (`git checkout -b feature/amazing-feature`)
3. Committa le tue modifiche (`git commit -m 'Add amazing feature'`)
4. Pusha il branch (`git push origin feature/amazing-feature`)
5. Apri una Pull Request

## 📝 Licenza

Questo progetto è rilasciato sotto la licenza MIT - vedi il file [LICENSE](LICENSE) per maggiori dettagli.

## 📬 Contatti

BDE 42 Roma Luiss - [Sito web](https://42roma.it/) - [Email](mailto:info@42roma.it)

---

Realizzato con ❤️ per la comunità di 42 Roma Luiss
