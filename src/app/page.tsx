'use client'

import { Box, Container, Text, Button, Flex, Heading } from '@chakra-ui/react'
import { useAppKitAccount } from '@reown/appkit/react'
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import Gallery from '@/components/Gallery'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const { isConnected } = useAppKitAccount()
  const t = useTranslation()

  return (
    <Box>
      {/* Hero Section */}
      <Box
        width="100%"
        bgImage="url('/huangshan.png')"
        bgSize="cover"
        bgPosition="center"
        position="relative"
        height="70vh"
      >
        <Box position="absolute" top="0" left="0" width="100%" height="100%" bg="blackAlpha.700" />
        <Container maxW="container.lg" height="100%" position="relative" zIndex="1">
          <Flex
            direction="column"
            justify="center"
            align="center"
            textAlign="center"
            height="100%"
            color="white"
          >
            <Heading as="h1" size="2xl" mb={4}>
              {t.gallery?.mainTitle || 'Your Personal Photo Gallery'}
            </Heading>
            <Text fontSize="xl" maxW="container.md" mb={8}>
              {t.gallery?.mainSubtitle || 'A beautiful way to showcase and preserve your memories'}
            </Text>
            {isConnected ? (
              <Button
                bg="#45a2f8"
                color="white"
                size="lg"
                _hover={{
                  bg: '#3182ce',
                }}
                onClick={() => window.scrollTo({ top: 700, behavior: 'smooth' })}
              >
                {t.gallery?.viewGalleryButton || 'View Gallery'}
              </Button>
            ) : (
              <Text p={4} bg="blackAlpha.600" borderRadius="md" fontSize="md">
                {t.gallery?.connectPrompt || 'Connect your wallet to access your photo gallery'}
              </Text>
            )}
          </Flex>
        </Container>
      </Box>

      {/* Gallery Section */}
      <Box bg="black" py={10}>
        <Gallery />
      </Box>
    </Box>
  )
}
