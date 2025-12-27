'use client'

import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const images = ['/srilanka-2024.jpg', '/chantegrue-2023.jpg']
  const alts = ['Sri Lanka 2024', 'Chantegrue 2023']

  const handleClick = () => {
    setIsFlipping(true)
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
      setIsFlipping(false)
    }, 100)
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={8}>
      <Box
        onClick={handleClick}
        cursor="pointer"
        style={{
          transform: isFlipping ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 0.2s ease-in-out',
          transformStyle: 'preserve-3d',
        }}
      >
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
