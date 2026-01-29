'use client'

import { Box, Heading, Text, VStack, Link } from '@chakra-ui/react'
import { brandColors } from '@/theme'
import { useState, useEffect } from 'react'
import { Dialog } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Field } from '@/components/ui/field'
import { Button } from '@/components/ui/button'
import Spinner from '@/components/Spinner'
import { jsPDF } from 'jspdf'

interface NaissanceItem {
  id: number
  name: string
  link: string
  description: string
  participants: string
  status: number
}

export default function NaissancePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<NaissanceItem | null>(null)
  const [name, setName] = useState('')
  const [list, setList] = useState<NaissanceItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/naissance')
      const data = await response.json()
      setList(data)
    } catch (error) {
      console.error('Failed to fetch items:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleOpenDialog = (item: NaissanceItem, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedItem(item)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setName('')
    setSelectedItem(null)
  }

  const generatePdf = (item: NaissanceItem) => {
    const doc = new jsPDF()

    doc.setFontSize(20)
    doc.text(item.name, 20, 30)

    doc.setFontSize(12)
    const descriptionLines = doc.splitTextToSize(item.description, 170)
    doc.text(descriptionLines, 20, 50)

    let yPosition = 50 + descriptionLines.length * 7 + 10

    if (item.link) {
      doc.setTextColor(0, 0, 255)
      doc.textWithLink(item.link, 20, yPosition, { url: item.link })
      yPosition += 15
    }

    const postalAddress = process.env.NEXT_PUBLIC_POSTAL_ADDRESS
    if (postalAddress) {
      doc.setTextColor(0, 0, 0)
      doc.setFontSize(11)
      doc.text('Adresse:', 20, yPosition)
      yPosition += 7
      const addressLines = postalAddress.split(',').map(line => line.trim())
      addressLines.forEach(line => {
        doc.text(line, 20, yPosition)
        yPosition += 6
      })
    }

    yPosition += 20
    doc.setFontSize(24)
    doc.setTextColor(0, 0, 0)
    doc.text("Merci d'avance !", 20, yPosition)

    doc.save('cadeau-pour-milan.pdf')
  }

  const handleSubmit = async () => {
    if (!selectedItem || !name.trim()) {
      return
    }

    try {
      const response = await fetch('/api/naissance/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: selectedItem.id,
          name: name.trim(),
        }),
      })

      if (response.ok) {
        generatePdf(selectedItem)
        // Remove the item from the list (it's now status 1)
        setList(prevList => prevList.filter(item => item.id !== selectedItem.id))
        handleClose()
      } else {
        console.error('Failed to reserve item')
      }
    } catch (error) {
      console.error('Error reserving item:', error)
    }
  }

  if (loading) {
    return (
      <VStack gap={6} py={8} mt={30} align="stretch">
        <Spinner />
      </VStack>
    )
  }

  return (
    <>
      <VStack gap={6} py={8} mt={30} align="stretch">
        <Text fontSize="lg">Cliquez sur un des cadeaux de la liste pour le réserver.</Text>
        <Text mb={10} fontSize="lg">
          Merci d&apos;avance ! ❤️{' '}
        </Text>
        {list.map(item => (
          <Box
            key={item.id}
            border="1px solid"
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
            onClick={e => handleOpenDialog(item, e)}
          >
            <VStack align="start" gap={3}>
              <Heading size="md">{item.name}</Heading>
              <Text fontSize="sm" color="gray.300">
                {item.description}
              </Text>
              {item.link && (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  style={{ maxWidth: '100%' }}
                >
                  <Text
                    fontSize="sm"
                    color="blue.500"
                    _hover={{ textDecoration: 'underline' }}
                    wordBreak="break-all"
                    overflowWrap="anywhere"
                  >
                    {item.link}
                  </Text>
                </Link>
              )}
            </VStack>
          </Box>
        ))}
      </VStack>

      <Dialog.Root open={isOpen} onOpenChange={e => (e.open ? null : handleClose())}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{selectedItem ? selectedItem.name : 'Réserver'}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body py={6}>
              <Field label="Prénom(s)">
                <Input
                  placeholder="Alice, Francis et Bertrand"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Field>
              <Text fontSize="xs" color="gray.400" mt={2}>
                Visible uniquement par Céline et Julien
              </Text>
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
