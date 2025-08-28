import Layout from '@/components/Layout';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'hasabTech',
  description: 'Shaping Developers & Shipping Products.',
  icons: [
    {
      url: '/favicon.png',
      type: 'image/png',
      sizes: 'any',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
