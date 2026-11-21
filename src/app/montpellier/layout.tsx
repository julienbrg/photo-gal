import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Montpellier | Céline et Julien',
  description: 'Une sélection de bons plans sur Montpellier',

  openGraph: {
    title: 'Montpellier | Céline et Julien',
    description: 'Une sélection de bons plans sur Montpellier',
    siteName: 'Céline et Julien',
    images: [
      {
        url: '/srilanka-2024-resized.jpg',
        width: 840,
        height: 630,
        alt: 'Une sélection de bons plans sur Montpellier',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Montpellier | Céline et Julien',
    description: 'Une sélection de bons plans sur Montpellier',
    images: ['/srilanka-2024-resized.jpg'],
    creator: '@julienbrg',
  },
}

export default function MontpellierLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
