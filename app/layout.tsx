import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { Bounce, ToastContainer } from 'react-toastify';

import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';

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
        <TanStackProvider>
          {' '}
          <Header />
          {children}
          <Footer />
        </TanStackProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
