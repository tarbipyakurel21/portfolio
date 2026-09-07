import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tarbi Pyakurel',
  description: 'Education, experience, projects, and technical skills from Tarbi Pyakurel’s resume.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
