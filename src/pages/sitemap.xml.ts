import type { APIRoute } from 'astro';
import { getAllPages } from '../utils/content';

export const GET: APIRoute = () => {
  const allPages = getAllPages();
  const baseUrl = 'https://europolinvestigazioni.it';
  
  // Redirect sources (exclude from sitemap)
  const redirectSources = [
    '/agenzia-investtigativa/',
    '/agenzia-investigativa-aziendale/',
    '/agenzia-investigativa-privata/',
    '/istituto-europol/',
  ];
  
  // Noindex pages (exclude from sitemap)
  const noindexPages = [
    '/richiesta-inviata/',
    '/studi-legali-e-avvocati-grazie/',
    '/test/',
  ];
  
  // Filter out redirect sources and noindex pages
  const indexablePages = allPages.filter(path => {
    return !redirectSources.includes(path) && !noindexPages.includes(path);
  });
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexablePages.map(path => {
    const url = `${baseUrl}${path === '/' ? '' : path}`;
    return `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
  }).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};

