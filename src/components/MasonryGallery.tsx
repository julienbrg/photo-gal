'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Button,
  Grid,
  GridItem,
  Skeleton,
} from '@chakra-ui/react'
import { useTranslation } from '@/hooks/useTranslation'

// In a real application, we would fetch images from an API
// For this example, we'll use the placeholder image with varied heights
const generatePlaceholderImages = (count: number) => {
  // Generate random heights between 200 and 400px to create masonry effect
  return Array(count)
    .fill(null)
    .map((_, index) => {
      const height = Math.floor(Math.random() * 200) + 200 // 200 to 400px
      return {
        id: index + 1,
        src: '/huangshan.png',
        alt: `Gallery image ${index + 1}`,
        height: `${height}px`,
      }
    })
}

interface GalleryImage {
  id: number
  src: string
  alt: string
  height: string
}

export default function MasonryGallery() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const t = useTranslation()

  // Simulate loading images
  useEffect(() => {
    setLoading(true)
    // Simulate API call delay
    setTimeout(() => {
      if (page === 1) {
        setImages(generatePlaceholderImages(12))
      } else {
        setImages(prev => [...prev, ...generatePlaceholderImages(8)])
      }
      setLoading(false)
    }, 1000)
  }, [page])

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image)
    onOpen()
  }

  const loadMore = () => {
    setPage(prev => prev + 1)
  }

  return (
    <Container maxW="container.xl" py={8}>
      <Box textAlign="center" mb={8}>
        <Heading as="h1" size="xl" mb={2}>
          {t.gallery?.title || 'Photo Gallery'}
        </Heading>
        <Text fontSize="lg" color="gray.400">
          {t.gallery?.subtitle || 'A collection of beautiful moments'}
        </Text>
      </Box>

      {/* Masonry Layout */}
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap={6}
      >
        {images.map(image => (
          <GridItem key={image.id}>
            <Box
              borderRadius="xl"
              overflow="hidden"
              transition="all 0.3s"
              cursor="pointer"
              _hover={{
                transform: 'scale(1.03)',
                boxShadow: '0 0 0 2px #45a2f8',
              }}
              onClick={() => handleImageClick(image)}
              height={image.height}
            >
              <Image
                src={image.src}
                alt={image.alt}
                objectFit="cover"
                width="100%"
                height="100%"
                loading="lazy"
              />
            </Box>
          </GridItem>
        ))}

        {/* Loading skeletons */}
        {loading &&
          page === 1 &&
          Array(12)
            .fill(null)
            .map((_, i) => (
              <GridItem key={`skeleton-${i}`}>
                <Skeleton borderRadius="xl" height={`${Math.floor(Math.random() * 200) + 200}px`} />
              </GridItem>
            ))}
      </Grid>

      {/* Load more button */}
      <Flex justify="center" mt={10}>
        <Button
          bg="#45a2f8"
          color="white"
          isLoading={loading && page > 1}
          loadingText="Loading..."
          _hover={{
            bg: '#3182ce',
          }}
          onClick={loadMore}
        >
          {t.gallery?.loadMore || 'Load More Photos'}
        </Button>
      </Flex>

      {/* Fullscreen Lightbox Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay bg="black" />
        <ModalContent bg="black" boxShadow="none" w="100vw" h="100vh" m={0} p={0}>
          <ModalCloseButton color="white" size="lg" zIndex="popover" />
          <ModalBody
            p={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="100%"
            h="100%"
          >
            {selectedImage && (
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                maxW="100%"
                maxH="100vh"
                objectFit="contain"
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  )
}
