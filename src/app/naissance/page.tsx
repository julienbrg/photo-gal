'use client'

import { Box, Heading, Text, VStack, Link } from '@chakra-ui/react'
import { brandColors } from '@/theme'
import { useState } from 'react'
import { Dialog } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Field } from '@/components/ui/field'
import { Button } from '@/components/ui/button'

const list = [
  {
    name: 'Casque anti-bruit',
    link: 'https://casque-anti-bruit.com',
    description:
      'Il ne le portera pas tout de suite, mais il en aura besoin dans ce monde parfois bruyant !',
    participants: '',
    status: 0,
  },
  {
    name: 'Ateliers massage',
    link: '',
    description: 'Pour apprendre à masser à Montpellier',
    participants: '',
    status: 0,
  },
  {
    name: 'Sessions de massage',
    link: '',
    description: 'Sessions de massage à Montpellier.',
    participants: 'Frank, Grace, Henry, Iris',
    status: 0,
  },
  {
    name: 'Sessions de massage',
    link: '',
    description: 'Sessions de massage à Montpellier.',
    participants: 'Frank, Grace, Henry, Iris',
    status: 0,
  },
]

export default function NaissancePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null)
  const [name, setName] = useState('')

  const handleOpenDialog = (index: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedItemIndex(index)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setName('')
  }

  const handleSubmit = () => {
    // Submit logic will go here
    console.log('Submitted name:', name, 'for item:', selectedItemIndex)
    handleClose()
  }

  return (
    <>
      <VStack gap={6} py={8} mt={30} align="stretch">
        {list.map((item, index) => (
          <Box
            key={index}
            border="3px solid"
            borderColor={brandColors.accent}
            borderRadius="xl"
            p={6}
            mb={6}
            w="full"
            transition="all 0.3s"
            _hover={{
              borderColor: brandColors.primary,
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
            onClick={e => handleOpenDialog(index, e)}
          >
            <VStack align="start" gap={3}>
              <Heading size="md">{item.name}</Heading>
              <Text fontSize="sm" color="gray.300">
                {item.description}
              </Text>
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                <Text fontSize="sm" color="blue.500" _hover={{ textDecoration: 'underline' }}>
                  {item.link}
                </Text>
              </Link>
            </VStack>
          </Box>
        ))}
      </VStack>

      <Dialog.Root open={isOpen} onOpenChange={e => (e.open ? null : handleClose())}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>
                {selectedItemIndex !== null ? list[selectedItemIndex].name : 'Réserver'}
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body py={6}>
              <Field label="Prénom(s)">
                <Input
                  placeholder="Alice, Francis et Bertrand"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Field>
            </Dialog.Body>
            <Dialog.Footer gap={3}>
              <Button variant="ghost" onClick={handleClose}>
                Annuler
              </Button>
              <Button colorScheme="blue" onClick={handleSubmit}>
                Réserver
              </Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger />
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  )
}
