import { Box, Container, Heading, Link, Stack, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { getSongs } from './songs'

const linkColor = { base: 'brand.primary', _dark: 'purple.300' }

export default async function ChansonsPage() {
  const songs = await getSongs()

  return (
    <Container maxW="3xl" py={20}>
      <Heading as="h1" size="2xl" textAlign="center" mb={10}>
        Chansons
      </Heading>
      <Box as="ul" listStyleType="none">
        {songs.map(song => {
          const recording = song.recordings?.[0]
          return (
            <Stack as="li" key={song.id} gap={1} py={4} borderBottomWidth="1px">
              <Link asChild fontWeight="600" fontSize="lg">
                <NextLink href={`/${song.id}`}>{song.title}</NextLink>
              </Link>
              {recording && (
                <Text fontSize="sm">
                  {recording.performer}
                  {recording.spotify && (
                    <>
                      {' · '}
                      <Link
                        href={recording.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        color={linkColor}
                        fontWeight="600"
                      >
                        Spotify
                      </Link>
                    </>
                  )}
                </Text>
              )}
            </Stack>
          )
        })}
      </Box>
    </Container>
  )
}
