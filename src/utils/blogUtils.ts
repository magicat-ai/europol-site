/**
 * Utility functions for blog posts
 */

/**
 * Calculate reading time based on word count
 * Average reading speed: 200 words per minute
 */
export function calculateReadingTime(content: string): number {
  const wordCount = content.split(/\s+/).filter(word => word.length > 0).length;
  return Math.ceil(wordCount / 200);
}

/**
 * Get blog category from URL path
 */
export function getBlogCategory(urlPath: string): string {
  if (urlPath.includes('dipendenti') || urlPath.includes('spionaggio') || urlPath.includes('antitaccheggio')) {
    return 'Investigazioni Aziendali';
  }
  if (urlPath.includes('infedelta') || urlPath.includes('tradimento') || urlPath.includes('affidamento')) {
    return 'Investigazioni Private';
  }
  if (urlPath.includes('caso-reale')) {
    return 'Case Studies';
  }
  if (urlPath.includes('bitcoin')) {
    return 'Criptovalute';
  }
  return 'Guide e Approfondimenti';
}

/**
 * Check if a URL path is a blog post
 */
export function isBlogPost(urlPath: string): boolean {
  const blogPostPattern = /^\/(assenteismo|falsa-malattia|investigatore-privato-chi-e|infedelta-coniugale|spionaggio-industriale|consulenza-bitcoin|caso-reale|il-tradimento|le-investigazioni-per-affidamento|controllo-dipendenti|indagini-su-dipendenti|antitaccheggio|come-assumere|perche-rivolgersi|i-5-metodi|agenzia-investigativa-a-(roma|milano))/;
  return blogPostPattern.test(urlPath);
}

