# EUROPOL® - Sito Web Istituzionale

Sito web ufficiale di EUROPOL® Istituto di Investigazioni - Agenzia investigativa italiana dal 1962.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) 5.16
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4.1
- **Content**: MDX + Markdown
- **Deployment**: Netlify / Vercel
- **Analytics**: Google Tag Manager, Google Analytics, Facebook Pixel

## 📦 Setup

### Prerequisiti

- Node.js 20+ (vedi `.nvmrc`)
- npm o pnpm

### Installazione

```bash
# Installa dipendenze
npm install

# Avvia dev server
npm run dev

# Build per produzione
npm run build

# Preview build locale
npm run preview
```

## 🗂️ Struttura Progetto

```
/
├── public/              # File statici
│   ├── media/          # Immagini e media
│   ├── scripts/        # Script client-side
│   ├── robots.txt      # SEO robots
│   └── _redirects      # Netlify redirects
├── extracted_content/   # Contenuti markdown
├── src/
│   ├── components/     # Componenti Astro riutilizzabili
│   ├── layouts/        # Layout pagine
│   ├── pages/          # Route del sito
│   ├── styles/         # CSS globali
│   └── utils/          # Utility functions
├── seo_metadata.json   # Metadata SEO
└── astro.config.mjs    # Configurazione Astro
```

## 🎨 Design System

### Colori

- **Accent Gold**: `#b8860b`
- **Black**: `#0b0b0b`
- **Text Light**: `#6b7280`
- **Background**: `#ffffff`

### Font

- **Serif (Headings)**: Playfair Display
- **Sans (Body)**: Inter

## 🔧 Sviluppo

### Aggiungere una nuova pagina

1. Crea file markdown in `extracted_content/`
2. Aggiungi metadata SEO in `seo_metadata.json`
3. La pagina sarà automaticamente generata via `[...slug].astro`

### Modificare componenti

I componenti principali sono in `src/components/`:
- `Header.astro` - Navigazione
- `Footer.astro` - Footer
- `SEO.astro` - Meta tags
- `LocalBusinessSchema.astro` - Schema.org markup

## 📊 SEO & Performance

- ✅ Sitemap automatico (`/sitemap.xml`)
- ✅ Robots.txt configurato
- ✅ Meta tags Open Graph e Twitter
- ✅ Schema.org LocalBusiness
- ✅ Preconnect per font esterni
- ✅ Lazy loading immagini
- ✅ Security headers (CSP, X-Frame-Options)

## 🚀 Deployment

### Netlify

Il sito è configurato per deployment automatico su Netlify:

```bash
# Build command
npm run build

# Publish directory
dist

# Headers e redirects
netlify.toml
```

### Variabili d'Ambiente

Nessuna variabile d'ambiente necessaria per il funzionamento base.

## 📝 Contenuti

I contenuti sono gestiti tramite file markdown in `extracted_content/`.

### Struttura Content

```markdown
# Titolo Pagina

**URL:** https://europolinvestigazioni.it/path/
**Meta Title:** ...
**Meta Description:** ...
**Canonical:** ...

---

Contenuto della pagina...
```

## 🔒 Sicurezza

- CSP headers configurati
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Consent GDPR nel form contatti
- Honeypot anti-spam nei form

## 📋 Form AWeber

Il sito utilizza form AWeber per la gestione delle richieste di contatto e lead generation.

### Form Contatti (`/contatti`)

**Configurazione:**
- Form ID: `1491414836`
- Ad Tracking: `EUROPOL_Contact_Form`
- Tag: `contact-form`
- Redirect: `/richiesta-inviata/`

**Campi:**
- **Obbligatori**: Nome, Email, Telefono
- **Opzionali**: Città, Orario di contatto preferito, Dettagli della Richiesta

**Campi Custom AWeber:**
- `custom Telefono` - Telefono (obbligatorio)
- `custom Citta` - Città (opzionale)
- `custom Orario` - Orario di contatto preferito (opzionale)
- `custom Dettagli Caso` - Dettagli della Richiesta (opzionale, textarea)

### Form Landing Page (`/ottieni-informazioni-prove-4`)

**Configurazione:**
- Form ID: `1491414836`
- Ad Tracking: `V2`
- Tag: `v2`, `ty-oto`, `gen`
- Redirect: `/richiesta-inviata/`

**Campi:**
- **Obbligatori**: Nome, Email, Telefono
- **Opzionali**: Dettagli del Caso

**Campi Custom AWeber:**
- `custom Telefono` - Telefono (obbligatorio)
- `custom Dettagli Caso` - Dettagli del Caso (opzionale, textarea)

### Note Importanti

⚠️ **Non modificare il Form ID** senza verificare la configurazione in AWeber. Cambiare il Form ID può causare problemi di iscrizione (utenti marcati come "unsubscribed").

Per modificare i campi del form:
1. Verifica la configurazione del form in AWeber
2. Aggiorna `meta_required` e `meta_tooltip` nei campi hidden
3. Aggiungi/rimuovi i campi HTML corrispondenti
4. Testa l'iscrizione su AWeber dopo le modifiche

## 📞 Contatti & Support

- **Email**: info@europolinvestigazioni.it
- **Indirizzo**: Via G. Perego 58 – Roma
- **Website**: https://europolinvestigazioni.it

## 📄 Licenza

© 2024 EUROPOL® Istituto di Investigazioni. Tutti i diritti riservati.

---

Sviluppato con ❤️ utilizzando Astro + Tailwind CSS
