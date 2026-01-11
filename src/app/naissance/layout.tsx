import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Liste de naissance | Céline et Julien',
  description: 'Liste de naissance de Céline et Julien',

  openGraph: {
    title: 'Liste de naissance | Céline et Julien',
    description: 'Liste de naissance de Céline et Julien',
    siteName: 'Céline et Julien',
    images: [
      {
        url: '/public/srilanka-2024.jpg',
        width: 1200,
        height: 630,
        alt: 'Liste de naissance de Céline et Julien',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Liste de naissance | Céline et Julien',
    description: 'Liste de naissance de Céline et Julien',
    images: ['/public/srilanka-2024.jpg'],
    creator: '@julienbrg',
  },
}

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
