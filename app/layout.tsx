import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NoteHub — All-in-One Workspace for Smart Notes',
  description:
    'Take notes, add tags, and stay organized with NoteHub — a simple and modern app designed to keep your ideas clear and accessible anywhere.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
