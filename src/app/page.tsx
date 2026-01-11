'use client'

import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)
  const images = ['/srilanka-2024.jpg', '/chantegrue-2023.jpg']
  const alts = ['Sri Lanka 2024', 'Chantegrue 2023']

  const handleClick = () => {
    setIsSpinning(true)
    setTimeout(() => {
      setCurrentImage(prev => (prev + 1) % images.length)
    }, 150)
    setTimeout(() => {
      setIsSpinning(false)
    }, 300)
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={8} pb={500}>
      {/* Preload all images */}
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={alts[index]}
          width={1200}
          height={800}
          priority
          style={{ display: 'none' }}
        />
      ))}

      <Box onClick={handleClick} cursor="pointer" style={{ perspective: '1000px' }}>
        <Box
          style={{
            transition: 'transform 0.3s ease-in-out',
            transformStyle: 'preserve-3d',
            transform: isSpinning ? 'rotateY(360deg)' : 'rotateY(0deg)',
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
    </Box>
  )
}
