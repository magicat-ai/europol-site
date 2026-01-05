# EUROPOL Investigazioni - Nuovo Sito

Sito web statico per EUROPOL Investigazioni, costruito con Astro.

## 🚀 Quick Start

### Sviluppo Locale
```bash
npm install
npm run dev
```
Il sito sarà disponibile su `http://localhost:4322`

### Build Produzione
```bash
npm run build
```
I file compilati saranno in `dist/`

### Preview Build
```bash
npm run preview
```

## 📁 Struttura Progetto

```
site/
├── src/
│   ├── components/     # Componenti Astro riutilizzabili
│   ├── layouts/        # Layout base
│   ├── pages/          # Pagine del sito
│   ├── scripts/        # Script JavaScript
│   ├── styles/         # CSS globale
│   └── utils/          # Utility functions
├── public/             # File statici (immagini, favicon, ecc.)
├── extracted_content/ # Contenuti markdown (fuori da questo repo)
└── dist/              # Build output (generato)

```

## 🛠️ Tecnologie

- **Astro** - Framework statico
- **Tailwind CSS** - Styling
- **MDX** - Markdown esteso
- **Lucide Icons** - Icone

## 📝 Deploy

Vedi [DEPLOY.md](./DEPLOY.md) per istruzioni complete sul deploy.

### Deploy Rapido
1. `npm run build`
2. Carica il contenuto di `dist/` su GitHub Pages

### Deploy Automatico
Il workflow `.github/workflows/deploy.yml` gestisce il deploy automatico su GitHub Pages.

## 🔗 Link Utili

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [MDX](https://mdxjs.com)
