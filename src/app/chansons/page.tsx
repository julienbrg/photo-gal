import { Box, Container, Heading, Link, Stack, Text } from '@chakra-ui/react'
import { getSongs } from './songs'

const SITE = 'https://celineetjulien.com'

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
              <Link href={`${SITE}/${song.id}`} fontWeight="600" fontSize="lg">
                {song.title}
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
