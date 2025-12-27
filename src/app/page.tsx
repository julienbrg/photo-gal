'use client'

import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={8}>
      <Box
        onClick={handleClick}
        cursor="pointer"
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 0.4s ease-in-out',
          transformStyle: 'preserve-3d',
        }}
      >
        <Image
          src={isFlipped ? '/chantegrue-2023.jpg' : '/srilanka-2024.jpg'}
          alt={isFlipped ? 'Chantegrue 2023' : 'Sri Lanka 2024'}
          width={1200}
          height={800}
          style={{ borderRadius: '1.5rem' }}
        />
      </Box>
    </Box>
  )
}
