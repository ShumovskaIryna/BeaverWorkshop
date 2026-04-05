import './globals.css';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-raleway',
});

export const metadata = {
  title: 'Beaver Workshop',
  description: 'Сайт з обробки дерева',
icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://www.beaverworkshop.com.ua",
    siteName: "Beaver Workshop",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Beaver Workshop Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className={raleway.variable}>
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="google-site-verification" content="7P7DMHmaU46yyNH9Weby-SDDnlvd0X3ZsNmZLX1l9SU" />
      <body className="font-raleway bg-white text-black">{children}</body>
    </html>
  );
}
