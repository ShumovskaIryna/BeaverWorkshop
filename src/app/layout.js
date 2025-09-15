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
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className={raleway.variable}>
      <body className="font-raleway bg-white text-black">{children}</body>
    </html>
  );
}
