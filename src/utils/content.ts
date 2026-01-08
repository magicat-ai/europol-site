import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load SEO metadata
let seoMetadata: Record<string, { title: string; meta_description: string }> = {};

try {
  const seoPath = path.join(__dirname, '../../seo_metadata.json');
  const seoData = JSON.parse(fs.readFileSync(seoPath, 'utf-8'));
  seoData.forEach((item: any) => {
    const key = item.path || '/';
    seoMetadata[key] = {
      title: item.title || '',
      meta_description: item.meta_description || ''
    };
  });
} catch (e) {
  console.warn('Could not load SEO metadata:', e);
}

// Load markdown content
function loadMarkdownContent(urlPath: string): string | null {
  try {
    // Convert URL path to filename
    let filename = urlPath === '/' ? 'home' : urlPath.replace(/\//g, '-').replace(/^-|-$/g, '');

    // Handle special cases
    if (filename === '') filename = 'home';

    const contentPath = path.join(__dirname, `../../extracted_content/${filename}.md`);

    if (fs.existsSync(contentPath)) {
      return fs.readFileSync(contentPath, 'utf-8');
    }

    // Fallback: try without trailing slash
    if (urlPath.endsWith('/') && urlPath !== '/') {
      const altPath = urlPath.slice(0, -1);
      const altFilename = altPath.replace(/\//g, '-').replace(/^-|-$/g, '');
      const altContentPath = path.join(__dirname, `../../extracted_content/${altFilename}.md`);
      if (fs.existsSync(altContentPath)) {
        return fs.readFileSync(altContentPath, 'utf-8');
      }
    }

    return null;
  } catch (e) {
    console.warn(`Could not load content for ${urlPath}:`, e);
    return null;
  }
}

// Extract SEO metadata from markdown content
function extractSEOFromContent(content: string | null): { title: string; meta_description: string; canonical: string } {
  if (!content) {
    return { title: '', meta_description: '', canonical: '' };
  }

  const titleMatch = content.match(/\*\*Meta Title:\*\*\s*(.+)/);
  const descMatch = content.match(/\*\*Meta Description:\*\*\s*(.+)/);
  const canonicalMatch = content.match(/\*\*Canonical:\*\*\s*(.+)/);
  const urlMatch = content.match(/\*\*URL:\*\*\s*(.+)/);

  return {
    title: titleMatch ? titleMatch[1].trim() : '',
    meta_description: descMatch ? descMatch[1].trim() : '',
    canonical: canonicalMatch ? canonicalMatch[1].trim() : (urlMatch ? urlMatch[1].trim() : '')
  };
}

export function getPageContent(urlPath: string) {
  const content = loadMarkdownContent(urlPath);

  // Try multiple path variations for SEO lookup
  const pathVariations = [
    urlPath,
    urlPath.replace(/\/$/, ''), // without trailing slash
    urlPath.replace(/^\/|\/$/g, ''), // without both slashes
  ];

  let seo = { title: '', meta_description: '', canonical: '' };
  for (const pathVar of pathVariations) {
    if (seoMetadata[pathVar]) {
      seo = seoMetadata[pathVar];
      break;
    }
  }

  // Fallback: extract SEO from markdown content if not found in JSON
  const contentSEO = extractSEOFromContent(content);
  if (!seo.title && contentSEO.title) {
    seo.title = contentSEO.title;
  }
  if (!seo.meta_description && contentSEO.meta_description) {
    seo.meta_description = contentSEO.meta_description;
  }

  // Use canonical from content if available, otherwise construct it
  const canonical = contentSEO.canonical ||
    seo.canonical ||
    `https://europolinvestigazioni.it${urlPath === '/' ? '' : urlPath}`;

  return {
    content: content || '',
    seo: {
      title: seo.title || 'EUROPOL® Istituto di Investigazioni',
      meta_description: seo.meta_description || '',
      canonical: canonical
    }
  };
}

export function getAllPages(): string[] {
  const pages: string[] = ['/'];

  // Add all pages from sitemap
  const sitemapUrls = [
    '/blog/',
    '/agenzia-investigativa-aziendale/',
    '/agenzia-investigativa-milano/',
    '/agenzia-investigativa-privata/',
    '/agenzia-investigativa-roma/',
    '/agenzia-investtigativa/',
    '/blog/',
    '/contatti/',
    '/europol-istituto-di-investigazioni/',
    '/investigatore-privato-milano/',
    '/investigatore-privato-roma/',
    '/investigazioni-aziendali/',
    '/investigazioni-aziendali/investigazioni-ammanchi-differenze-inventariali/',
    '/investigazioni-aziendali/investigazioni-concorrenza-sleale/',
    '/investigazioni-aziendali/investigazioni-licenziamento-giusta-causa/',
    '/investigazioni-aziendali/investigazioni-pre-assunzione/',
    '/investigazioni-private/',
    '/investigazioni-private-milano/',
    '/investigazioni-private-roma/',
    '/investigazioni-private/investigazioni-affidamento-minori/',
    '/investigazioni-private/investigazioni-infedelta-coniugale-tradimento/',
    '/investigazioni-private/investigazioni-pre-matrimoniali/',
    '/investigazioni-private/investigazioni-separazione-divorzio/',
    '/investigazioni-private/investigazioni-sicurezza-personale-familiare/',
    '/istituto-europol/',
    '/landing-nuova/',
    '/landing-nuova-2/',
    '/landing-nuova-italia/',
    '/landing-nuova-lombardia/',
    '/landing-nuova-sicilia/',
    '/landing-nuova-tradimenti/',
    '/landing-nuova-tradimenti-2/',
    '/ottieni-informazioni-prove-4/',
    '/news/',
    '/richiesta-inviata/',
    '/sistema-prova/',
    '/studi-legali-e-avvocati/',
    '/studi-legali-e-avvocati-grazie/',
    '/test/',
    '/valutazioni-dei-clienti/',
    '/privacy-policy/',
    '/termini-e-condizioni/',
    // Nuove pagine Intelligence & Servizi Specializzati
    '/intelligence-e-servizi-speciali/',
    '/intelligence-e-servizi-speciali/business-intelligence/',
    '/intelligence-e-servizi-speciali/tracciamento-fondi-blockchain-crypto-truffe/',
    '/intelligence-e-servizi-speciali/due-diligence-background-check/',
    '/intelligence-e-servizi-speciali/antispionaggio-industriale/',
    '/intelligence-e-servizi-speciali/digital-forensics-investigazioni-digitali/',
    '/intelligence-e-servizi-speciali/asset-tracing-tracciamento-patrimoniale/',
    // Blog posts e articoli
    '/assenteismo-dipendenti/',
    '/falsa-malattia-dipendenti/',
    '/controllo-dipendenti-si-puo-fare/',
    '/indagini-su-dipendenti/',
    '/antitaccheggio-investigativo/',
    '/come-assumere-investigatore-privato/',
    '/investigatore-privato-chi-e-e-cosa-fa/',
    '/perche-rivolgersi-ad-agenzia-investigazioni/',
    '/i-5-metodi-illegali-di-raccolta-prove-da-conoscere-assolutamente-prima-di-affidarsi-ad-unagenzia-investigativa-ed-evitare-di-rischiare-dai-3-ai-5-anni-di-carcere-e-multe-fino-a-60-0/',
    '/il-tradimento-e-reato/',
    '/infedelta-coniugale/',
    '/le-investigazioni-per-affidamento-controllo-e-tutela-dei-minori/',
    '/spionaggio-industriale/',
    '/consulenza-bitcoin/',
    // Case studies
    '/caso-reale-la-tua-ex-moglie-ti-sta-derubando/',
    '/caso-reale-il-tuo-ex-marito-mette-in-pericolo-i-tuoi-bambini/',
    '/caso-reale-lei-e-solo-una-dipendente-o-la-sua-amante/',
    // Legal Authority Hub
    '/validita-legale-prove-investigatore-privato/',
  ];

  return pages.concat(sitemapUrls);
}

