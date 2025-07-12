import type { Metadata } from 'next';
import { GeistSans, GeistMono } from 'geist/font/sans';
import { ThemeProvider } from '@/components/providers/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Next.js 15 Frontend Template',
    template: '%s | Next.js 15 Frontend Template',
  },
  description: 'A modern Next.js 15 frontend template with TypeScript, Tailwind CSS v4, and dark mode support',
  keywords: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Dark Mode',
    'Frontend Template',
    'Modern UI',
    'Responsive Design',
  ],
  authors: [
    {
      name: 'Your Name',
      url: 'https://yourwebsite.com',
    },
  ],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    title: 'Next.js 15 Frontend Template',
    description: 'A modern Next.js 15 frontend template with TypeScript, Tailwind CSS v4, and dark mode support',
    siteName: 'Next.js 15 Frontend Template',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Next.js 15 Frontend Template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js 15 Frontend Template',
    description: 'A modern Next.js 15 frontend template with TypeScript, Tailwind CSS v4, and dark mode support',
    images: ['/images/og-image.png'],
    creator: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
  },
  alternates: {
    canonical: 'https://yourwebsite.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
} 