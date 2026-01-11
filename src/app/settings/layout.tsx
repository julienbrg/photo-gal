import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Settings | Céline et Julien',
  description: 'Manage your accounts, backups, and recovery options for your w3pk wallet.',

  openGraph: {
    title: 'Settings | Céline et Julien',
    description: 'Manage your accounts, backups, and recovery options for your w3pk wallet.',
    siteName: 'Céline et Julien',
    images: [
      {
        url: '/srilanka-2024-resized.jpg',
        width: 840,
        height: 630,
        alt: 'Manage your accounts, backups, and recovery options for your w3pk wallet.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Settings | Céline et Julien',
    description: 'Manage your accounts, backups, and recovery options for your w3pk wallet.',
    images: ['/srilanka-2024-resized.jpg'],
    creator: '@julienbrg',
  },
}

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
