import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ethereum Addresses | Genji',
  description: 'View and search whitelisted Ethereum addresses',

  openGraph: {
    title: 'Admin dashboard | Genji',
    description: 'View and search whitelisted Ethereum addresses',
    url: 'https://genji-app.netlify.app/admin',
    siteName: 'Genji',
    images: [
      {
        url: '/huangshan.png',
        width: 1200,
        height: 630,
        alt: 'Genji Web3 Application - Admin dashboard',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ethereum Addresses | Genji',
    description: 'View and search whitelisted Ethereum addresses',
    images: ['/huangshan.png'],
  },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
