import { Box, Container, Heading, Link, Stack, Text } from '@chakra-ui/react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Markdown from 'react-markdown'
import { getSong, getSongIds, groupCredits } from '../chansons/songs'

export const dynamicParams = false

type Props = { params: Promise<{ slug: string }> }

const ROLES: Record<string, string> = {
  author: 'texte',
  words: 'paroles',
  music: 'musique',
  translator: 'traduction',
  arranger: 'arrangement',
  editor: 'édition',
}

const linkColor = { base: 'brand.primary', _dark: 'purple.300' }

export async function generateStaticParams() {
  return (await getSongIds()).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const song = await getSong((await params).slug)
  if (!song) return {}
  const title = `${song.title} | Céline et Julien`
  const description = `Les paroles de ${song.title}`
  const images = ['/srilanka-2024-resized.jpg']
  return {
    title,
    description,
    openGraph: { title, description, siteName: 'Céline et Julien', images, locale: 'fr_FR' },
    twitter: { card: 'summary_large_image', title, description, images, creator: '@julienbrg' },
  }
}

export default async function SongPage({ params }: Props) {
  const song = await getSong((await params).slug)
  if (!song) notFound()

  return (
    <Container maxW="2xl" py={12}>
      <Heading as="h1" size="2xl">
        {song.title}
      </Heading>
      <Text mt={2} color="fg.muted">
        {groupCredits(song.credits)
          .map(({ name, roles }) => `${name} (${roles.map(r => ROLES[r] ?? r).join(', ')})`)
          .join(' · ')}
        {song.date && ` · ${song.date}`}
      </Text>

      <Stack gap={6} mt={10} lang={song.lang ?? 'fr'}>
        {song.blocks.map((block, i) => (
          <Box key={i}>
            {block.lines.map((line, j) => (
              <Text key={j} fontSize="lg" lineHeight="tall">
                {line}
              </Text>
            ))}
          </Box>
        ))}
      </Stack>

      {song.recordings && song.recordings.length > 0 && (
        <Box mt={12}>
          <Heading as="h2" size="md" mb={3}>
            Enregistrements
          </Heading>
          <Stack as="ul" gap={1} listStyleType="none">
            {song.recordings.map(r => (
              <Text as="li" key={`${r.performer}-${r.year}`}>
                {r.performer}
                {r.year && ` (${r.year})`}
                {r.spotify && (
                  <>
                    {' · '}
                    <Link
                      href={r.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      color={linkColor}
                      fontWeight="600"
                    >
                      Spotify
                    </Link>
                  </>
                )}
                {r.youtube && (
                  <>
                    {' · '}
                    <Link
                      href={r.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      color={linkColor}
                      fontWeight="600"
                    >
                      YouTube
                    </Link>
                  </>
                )}
              </Text>
            ))}
          </Stack>
        </Box>
      )}

      {song.notes && (
        <Box mt={12}>
          <Markdown
            components={{
              h2: ({ children }) => (
                <Heading as="h2" size="md" mt={8} mb={3}>
                  {children}
                </Heading>
              ),
              p: ({ children }) => <Text mb={3}>{children}</Text>,
              a: ({ href, children }) => (
                <Link href={href} target="_blank" rel="noopener noreferrer" color={linkColor}>
                  {children}
                </Link>
              ),
            }}
          >
            {song.notes}
          </Markdown>
        </Box>
      )}
    </Container>
  )
}
