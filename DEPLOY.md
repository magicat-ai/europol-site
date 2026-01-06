# 🚀 Guida al Deploy - EUROPOL Investigazioni

## 📋 Checklist Pre-Deploy

### ✅ Configurazione Completata
- [x] `site` configurato in `astro.config.mjs` → `https://europolinvestigazioni.it`
- [x] `base` configurato a `/` per Netlify
- [x] `netlify.toml` configurato con headers e redirect
- [x] `public/_redirects` configurato per redirect 301
- [x] Build testato localmente

### ⚠️ Da Fare Prima del Deploy

1. **Test Locale Finale**
   ```bash
   npm run build
   npm run preview
   ```
   Verifica che tutte le pagine funzionino correttamente senza il path `/europol-site`.

## 🎯 Deploy su Netlify (Configurazione Attuale)

### Step 1: Connetti Repository su Netlify

1. **Crea/Accedi Account Netlify**
   - Vai su https://app.netlify.com
   - Accedi con GitHub

2. **Importa Progetto**
   - Click "Add new site" → "Import an existing project"
   - Connetti GitHub → seleziona `magicat-ai/europol-site`
   - Netlify rileverà automaticamente:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`

3. **Configurazione Build**
   - Verifica che siano corretti:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

### Step 2: Configura Dominio Custom

1. **Su Netlify**
   - Site settings → Domain management → Add custom domain
   - Inserisci: `europolinvestigazioni.it`
   - Netlify ti fornirà i record DNS da configurare

2. **Configura DNS su OVH**
   
   **Opzione A: Record CNAME (consigliato per www)**
   ```
   Tipo: CNAME
   Nome: www
   Destinazione: [nome-sito].netlify.app
   TTL: 3600
   ```
   
   **Opzione B: Record A per dominio root**
   Netlify ti fornirà 4 indirizzi IP da configurare:
   ```
   Tipo: A
   Nome: @ (o lasciare vuoto)
   Destinazione: [IP fornito da Netlify]
   TTL: 3600
   ```
   Ripeti per tutti e 4 gli IP forniti da Netlify.

3. **Abilita HTTPS**
   - Netlify lo farà automaticamente dopo la configurazione DNS
   - Verifica che "Force HTTPS" sia attivo in Site settings → Domain management

### Step 3: Deploy Automatico

Ogni push su `main` triggererà automaticamente:
- Build del sito
- Deploy su Netlify
- Aggiornamento del sito live

## 🔧 Configurazione File

### File Importanti già Configurati:
- ✅ `astro.config.mjs` - Site URL: `https://europolinvestigazioni.it`, base: `/`
- ✅ `netlify.toml` - Headers di sicurezza e cache configurati
- ✅ `public/_redirects` - Redirect 301 configurati

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

