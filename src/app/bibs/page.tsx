'use client'

import { Box, Heading, Text, VStack, HStack, NativeSelect } from '@chakra-ui/react'
import { brandColors } from '@/theme'
import { useState, useEffect } from 'react'
import { Dialog } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Field } from '@/components/ui/field'
import { Button } from '@/components/ui/button'
import { IconButton } from '@/components/ui/icon-button'
import Spinner from '@/components/Spinner'
import { LuPlus } from 'react-icons/lu'

interface BibItem {
  id: number
  type: string
  created_at: string
}

const ITEM_TYPES = ['Biberon (prélait)', "Biberon (lait mat')", 'Têtée', 'Selles', 'Urine']

const formatDateTime = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

const formatCountdown = (createdAt: string, now: Date) => {
  const created = new Date(createdAt)
  const diffMs = now.getTime() - created.getTime()
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))

  return { diffHours, diffMinutes, totalHours: diffMs / (1000 * 60 * 60) }
}

const getLocalDateTimeString = () => {
  const now = new Date()
  const offset = now.getTimezoneOffset()
  const localDate = new Date(now.getTime() - offset * 60 * 1000)
  return localDate.toISOString().slice(0, 16)
}

export default function BibsPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedType, setSelectedType] = useState(ITEM_TYPES[0])
  const [dateTime, setDateTime] = useState(getLocalDateTimeString())
  const [list, setList] = useState<BibItem[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    fetchItems()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  const fetchItems = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/bibs')
      const data = await response.json()
      setList(data)
    } catch (error) {
      console.error('Failed to fetch items:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleOpenDialog = () => {
    setDateTime(getLocalDateTimeString())
    setSelectedType(ITEM_TYPES[0])
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setSelectedType(ITEM_TYPES[0])
    setDateTime(getLocalDateTimeString())
  }

  const handleSubmit = async () => {
    try {
      setSubmitting(true)
      const response = await fetch('/api/bibs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: selectedType,
          created_at: new Date(dateTime).toISOString(),
        }),
      })

      if (response.ok) {
        const newItem = await response.json()
        setList(prevList => [newItem, ...prevList])
        handleClose()
      } else {
        console.error('Failed to add item')
      }
    } catch (error) {
      console.error('Error adding item:', error)
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <VStack gap={6} py={8} mt={30} align="stretch">
        <HStack justify="center" py={4}>
          <Spinner size="200px" />
        </HStack>
      </VStack>
    )
  }

  return (
    <>
      <VStack gap={6} py={8} mt={30} align="stretch">
        <HStack justify="space-between" align="center">
          <Heading size="lg">Suivi</Heading>
          <IconButton
            aria-label="Ajouter"
            onClick={handleOpenDialog}
            colorScheme="blue"
            rounded="full"
            size="lg"
          >
            <LuPlus />
          </IconButton>
        </HStack>

        {list.length === 0 ? (
          <Text color="gray.400" textAlign="center" py={8}>
            Aucun élément enregistré
          </Text>
        ) : (
          (() => {
            const latestPrelaitId = list.find(item => item.type === 'Biberon (prélait)')?.id
            return list.map(item => (
              <Box
                key={item.id}
                border="1px solid"
                borderColor={brandColors.accent}
                borderRadius="xl"
                p={6}
                w="full"
                transition="all 0.3s"
                _hover={{
                  borderColor: brandColors.primary,
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                <HStack justify="space-between" w="full" align="center">
                  <VStack align="start" gap={2}>
                    <Heading size="md">{item.type}</Heading>
                    <Text fontSize="sm" color="gray.400">
                      {formatDateTime(item.created_at)}
                    </Text>
                  </VStack>
                  {((item.type === 'Biberon (prélait)' && item.id === latestPrelaitId) ||
                    item.type === "Biberon (lait mat')") &&
                    (() => {
                      const { diffHours, diffMinutes, totalHours } = formatCountdown(
                        item.created_at,
                        now
                      )
                      const isOver3Hours = totalHours >= 2.5
                      const isOver2Hours = totalHours >= 2
                      return (
                        <Text
                          fontSize="xl"
                          fontWeight="bold"
                          color={isOver3Hours ? 'red.500' : isOver2Hours ? 'green.500' : 'gray.400'}
                        >
                          {diffHours}h {diffMinutes}m
                        </Text>
                      )
                    })()}
                </HStack>
              </Box>
            ))
          })()
        )}
      </VStack>

      <Dialog.Root open={isOpen} onOpenChange={e => (e.open ? null : handleClose())}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Ajouter un élément</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body py={6}>
              <VStack gap={4}>
                <Field label="Type">
                  <NativeSelect.Root>
                    <NativeSelect.Field
                      value={selectedType}
                      onChange={e => setSelectedType(e.target.value)}
                      pl={4}
                    >
                      {ITEM_TYPES.map(type => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </NativeSelect.Field>
                  </NativeSelect.Root>
                </Field>
                <Field label="Date et heure">
                  <Input
                    type="datetime-local"
                    value={dateTime}
                    onChange={e => setDateTime(e.target.value)}
                  />
                </Field>
              </VStack>
            </Dialog.Body>
            <Dialog.Footer gap={3}>
              <Button variant="ghost" onClick={handleClose}>
                Annuler
              </Button>
              <Button colorScheme="blue" onClick={handleSubmit} loading={submitting}>
                Ajouter
              </Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger />
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  )
}
