/**
 * Utility for combining conditional CSS class names.
 * Lightweight, zero external dependencies.
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ');
}

