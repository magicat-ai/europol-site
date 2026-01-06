/**
 * Helper function to safely join BASE_URL with paths
 * Prevents double slashes and protocol-relative URLs
 * 
 * @param path - Path to join (with or without leading slash)
 * @returns Properly formatted path with BASE_URL
 * 
 * Examples:
 * - getPath('') → '/' (when base is '/')
 * - getPath('contatti/') → '/contatti/' (when base is '/')
 * - getPath('/contatti/') → '/contatti/' (when base is '/')
 * - getPath('contatti/') → '/europol-site/contatti/' (when base is '/europol-site')
 */
export function getPath(path: string = ''): string {
  const base = (import.meta.env.BASE_URL ?? '').trim();
  const cleanPath = path.replace(/^\/+/, ''); // rimuove slash iniziali

  if (base === '' || base === '/') {
    return cleanPath === '' ? '/' : `/${cleanPath}`;
  }

  const baseClean = base.replace(/\/+$/, ''); // rimuove slash finali
  return cleanPath === '' ? `${baseClean}/` : `${baseClean}/${cleanPath}`;
}

