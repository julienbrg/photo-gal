import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chansons | Céline et Julien',
  description: 'Les paroles de quelques belles chansons',

  openGraph: {
    title: 'Chansons | Céline et Julien',
    description: 'Les paroles de quelques belles chansons',
    siteName: 'Céline et Julien',
    images: [
      {
        url: '/srilanka-2024-resized.jpg',
        width: 840,
        height: 630,
        alt: 'Les paroles de quelques belles chansons',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Chansons | Céline et Julien',
    description: 'Les paroles de quelques belles chansons',
    images: ['/srilanka-2024-resized.jpg'],
    creator: '@julienbrg',
  },
}

export default function ChansonsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
