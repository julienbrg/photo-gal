'use client'

import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = ['/srilanka-2024.jpg', '/chantegrue-2023.jpg']
  const alts = ['Sri Lanka 2024', 'Chantegrue 2023']

  const handleClick = () => {
    setCurrentImage(prev => (prev + 1) % images.length)
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={8}>
      <Box onClick={handleClick} cursor="pointer" transition="opacity 0.3s ease-in-out">
        <Image
          src={images[currentImage]}
          alt={alts[currentImage]}
          width={1200}
          height={800}
          style={{ borderRadius: '1.5rem' }}
        />
      </Box>
    </Box>
  )
}
