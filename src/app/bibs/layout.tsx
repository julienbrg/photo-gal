import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Suivi | Céline et Julien',
  description: 'Suivi des biberons et soins',

  openGraph: {
    title: 'Suivi | Céline et Julien',
    description: 'Suivi des biberons et soins',
    siteName: 'Céline et Julien',
    images: [
      {
        url: '/srilanka-2024-resized.jpg',
        width: 840,
        height: 630,
        alt: 'Suivi',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Suivi | Céline et Julien',
    description: 'Suivi des biberons et soins',
    images: ['/srilanka-2024-resized.jpg'],
    creator: '@julienbrg',
  },
}

export default function BibsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
