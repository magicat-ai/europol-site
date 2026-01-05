# 🚀 Guida al Deploy - EUROPOL Investigazioni

## 📋 Checklist Pre-Deploy

### ✅ Configurazione Completata
- [x] `site` configurato in `astro.config.mjs`
- [x] GitHub Actions workflow creato
- [x] Build testato localmente

### ⚠️ Da Fare Prima del Deploy

1. **Test Locale Finale**
   ```bash
   cd site
   npm run build
   npm run preview
   ```
   Verifica che tutte le pagine funzionino correttamente.

2. **Configurazione GitHub Pages**
   - Vai su GitHub → Settings → Pages
   - Source: "GitHub Actions"
   - Salva

3. **Configurazione Redirect sul Server** (se non usi Netlify/Vercel)
   - Aggiungi le regole da `redirects.json` al tuo server web
   - Nginx: aggiungi le regole nel server block
   - Apache: aggiungi in `.htaccess`

## 🎯 Opzioni di Deploy

### Opzione A: Deploy Manuale (Rapido)

1. **Build Locale**
   ```bash
   cd site
   npm run build
   ```

2. **Carica su GitHub**
   - Crea un nuovo repository (es. `europol-site`)
   - Carica SOLO il contenuto di `site/dist/` (non la cartella dist stessa)
   - Struttura:
     ```
     repository/
       ├── index.html
       ├── contatti/
       ├── media/
       ├── sitemap.xml
       └── robots.txt
     ```

3. **Configura GitHub Pages**
   - Settings → Pages → Source: "Deploy from a branch"
   - Branch: `main` / Root: `/` (root)

### Opzione B: Deploy Automatico con GitHub Actions (Consigliato)

1. **Carica il Progetto Completo**
   - Carica tutta la cartella `site/` su GitHub
   - Include: `src/`, `public/`, `package.json`, `astro.config.mjs`, `.github/`

2. **Configura GitHub Pages**
   - Settings → Pages → Source: "GitHub Actions"
   - Il workflow `.github/workflows/deploy.yml` farà tutto automaticamente

3. **Push e Deploy**
   ```bash
   git add .
   git commit -m "Initial deploy"
   git push origin main
   ```
   - GitHub Actions farà il build automaticamente
   - Il sito sarà disponibile su `https://tuousername.github.io/repository-name/`
   - Per dominio personalizzato, configura in Settings → Pages → Custom domain

## 🔧 Configurazione Dominio Personalizzato

Se vuoi usare `europolinvestigazioni.it`:

1. **Su GitHub Pages**
   - Settings → Pages → Custom domain
   - Inserisci: `europolinvestigazioni.it`
   - Abilita "Enforce HTTPS"

2. **Nel DNS del Dominio**
   - Aggiungi record CNAME:
     ```
     www.europolinvestigazioni.it → tuousername.github.io
     ```
   - Oppure record A (per dominio senza www):
     ```
     europolinvestigazioni.it → IP di GitHub Pages
     ```

## 📝 File Importanti

- `astro.config.mjs` - Configurazione Astro con dominio
- `.github/workflows/deploy.yml` - Workflow per deploy automatico
- `redirects.json` - Redirect da configurare sul server
- `site/dist/` - File compilati pronti per il deploy

## ✅ Verifica Post-Deploy

Dopo il deploy, verifica:

1. ✅ Tutte le pagine caricano correttamente
2. ✅ Form di contatto funziona (AWeber)
3. ✅ Immagini si caricano correttamente
4. ✅ Sitemap accessibile: `/sitemap.xml`
5. ✅ Robots.txt accessibile: `/robots.txt`
6. ✅ Redirect funzionano (se configurati)
7. ✅ SEO: meta tags, canonical URLs corretti

## 🆘 Troubleshooting

### Build Fallisce
- Verifica che tutte le dipendenze siano in `package.json`
- Controlla i log di GitHub Actions

### Pagine Non Caricano
- Verifica che `site` sia configurato correttamente in `astro.config.mjs`
- Controlla che i percorsi siano corretti

### Immagini Non Caricano
- Verifica che le immagini siano in `public/media/`
- Controlla i percorsi nelle pagine

## 📞 Supporto

Per problemi o domande, consulta:
- [Astro Docs - Deploy](https://docs.astro.build/en/guides/deploy/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

