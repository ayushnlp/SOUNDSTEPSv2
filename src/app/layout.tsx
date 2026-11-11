import type { Metadata } from 'next';
import { fraunces, plusJakartaSans } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'SOUNDSTEPS | Child Development Centre',
  description: 'Multidisciplinary paediatric therapy, audiological assessment, and early intervention.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/20 selection:text-foreground">
        {children}
      </body>
    </html>
  );
}

