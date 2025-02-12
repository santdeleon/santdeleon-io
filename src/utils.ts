/**
 * Returns a color from a hex string and alpha numeric
 * @param hex A hex string.
 * @param alpha An alpha numeric.
 * @returns A formatted rgba string.
 */
export function hexToRGBA(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}
