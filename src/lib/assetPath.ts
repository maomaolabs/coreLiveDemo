/**
 * Prefija la ruta de un asset con el basePath de la aplicación.
 *
 * En desarrollo local: NEXT_PUBLIC_BASE_PATH está vacío → devuelve la ruta tal cual.
 * En GitHub Pages: NEXT_PUBLIC_BASE_PATH="/coreLiveDemo" → prefija correctamente.
 *
 * IMPORTANTE: Solo usar con <img> nativos. next/image ya respeta el basePath
 * configurado automáticamente por la GitHub Action "configure-pages".
 */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
