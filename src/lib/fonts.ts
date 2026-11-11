import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';

/**
 * Self-hosted typography tokens configured via next/font.
 * Approved SOUNDSTEPS typography pairing:
 * - Display / Headings: Fraunces (warm editorial serif)
 * - Body / Interface: Plus Jakarta Sans (clear, accessible sans-serif)
 */

export const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});
