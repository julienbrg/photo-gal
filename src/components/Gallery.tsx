'use client'

import { useState } from 'react'
import {
  Box,
  SimpleGrid,
  Image,
  Container,
  Heading,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
} from '@chakra-ui/react'
import { useTranslation } from '@/hooks/useTranslation'

// This would typically come from an API or data source
// For now we'll use the placeholder image multiple times
const generatePlaceholderImages = (count: number) => {
  return Array(count)
    .fill('/huangshan.png')
    .map((src, index) => ({
      id: index + 1,
      src,
      alt: `Gallery image ${index + 1}`,
    }))
}

interface GalleryImage {
  id: number
  src: string
  alt: string
}

export default function Gallery() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const t = useTranslation()
  const images = generatePlaceholderImages(12)

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image)
    onOpen()
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

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
        {images.map(image => (
          <Box
            key={image.id}
            borderRadius="xl"
            overflow="hidden"
            transition="all 0.3s"
            cursor="pointer"
            _hover={{
              transform: 'scale(1.03)',
              boxShadow: '0 0 0 2px #45a2f8',
            }}
            onClick={() => handleImageClick(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              objectFit="cover"
              width="100%"
              height="230px"
              loading="lazy"
            />
          </Box>
        ))}
      </SimpleGrid>

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
