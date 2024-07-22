import localFont from 'next/font/local';

import './globals.css';

const nunito_regular = localFont({
  src: './styles/fonts/Nunito-Regular.ttf',
  variable: '--font-nunito-regular',
});

const poppins_regular = localFont({
  src: './styles/fonts/Poppins-Regular.ttf',
  variable: '--font-poppins-regular',
});

const catallina_regular = localFont({
  src: './styles/fonts/Catallina-Regular.ttf',
  variable: '--font-catallina-regular',
});

const tenor_regular = localFont({
  src: './styles/fonts/TenorSans-Regular.ttf',
  variable: '--font-tenor-regular',
});

export const metadata = {
  title: 'Mara Jewelry',
  description: 'Perfect jewelry made of natural stones',
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body
        className={`${nunito_regular.variable} ${catallina_regular.variable} ${poppins_regular.variable} ${tenor_regular.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
