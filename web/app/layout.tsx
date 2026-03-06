import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FigmaDesigner Control Center',
  description: 'Remote control center for FigmaDesigner plugin'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
