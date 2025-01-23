import localFont from 'next/font/local';

import './globals.css';

import { Toaster } from 'react-hot-toast';

const nunito_regular = localFont({
  src: '../assets/fonts/Nunito-Regular.ttf',
  variable: '--font-nunito-regular',
});

const poppins_regular = localFont({
  src: '../assets/fonts/Poppins-Regular.ttf',
  variable: '--font-poppins-regular',
});

const tenor_regular = localFont({
  src: '../assets/fonts/TenorSans-Regular.ttf',
  variable: '--font-tenor-regular',
});

export const metadata = {
  title: 'MaraJewelry / Прикраси ручної роботи',
  description: 'Вишукані прикраси, зроблені з натурального каміння',
  keywords: ['Прикраси', 'Натуральне каміння', 'Mara Jewelry'],
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'MaraJewelry / Прикраси ручної роботи',
    description: 'Вишукані прикраси, зроблені з натуральних каменів',
    url: 'https://mara-jewelry.vercel.app',
    siteName: 'MaraJewelry / Прикраси ручної роботи',
    images: [
      {
        url: 'https://mara-jewelry.vercel.app/opengraph-image.jpg',
        width: 124,
        height: 124,
      },
    ],
    locale: 'uk_UA',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body
        className={`${nunito_regular.variable} ${poppins_regular.variable} ${tenor_regular.variable}`}
      >
        {children}
        <div id="modal-root"></div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
            style: {
              background: '#333',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  );
}
