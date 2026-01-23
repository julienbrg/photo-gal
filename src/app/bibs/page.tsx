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
import { LuPlus, LuRefreshCw } from 'react-icons/lu'

interface BibItem {
  id: number
  type: string
  created_at: string
  comment: string | null
}

const ITEM_TYPES = ['Biberon (prélait)', "Biberon (lait mat')", 'Têtée', 'Selles', 'Urine']

// Parse date string as UTC (database stores UTC but may return without Z suffix)
const parseAsUTC = (dateString: string) => {
  // If already has timezone info (Z or +/-offset), parse directly
  if (dateString.endsWith('Z') || /[+-]\d{2}:?\d{2}$/.test(dateString)) {
    return new Date(dateString)
  }
  // Otherwise, append Z to treat as UTC
  return new Date(dateString.replace(' ', 'T') + 'Z')
}

const formatTime = (dateString: string) => {
  const date = parseAsUTC(dateString)
  const hours = date.getHours()
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hours}h${minutes}`
}

// Get the "logical day" key (7am to 7am) for grouping
const getLogicalDay = (dateString: string) => {
  const date = parseAsUTC(dateString)

  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()

  // If hour is before 7am local time, it belongs to the previous day
  if (date.getHours() < 7) {
    const prevDay = new Date(year, month, day - 1)
    year = prevDay.getFullYear()
    month = prevDay.getMonth()
    day = prevDay.getDate()
  }

  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

// Format day header in French (e.g., "Vendredi 23 janvier")
const formatDayHeader = (logicalDayKey: string) => {
  const [year, month, day] = logicalDayKey.split('-').map(Number)
  const date = new Date(year, month - 1, day)

  const formatted = date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })

  return formatted.charAt(0).toUpperCase() + formatted.slice(1)
}

// Group items by logical day
const groupByDay = (items: BibItem[]) => {
  const groups: { [key: string]: BibItem[] } = {}

  items.forEach(item => {
    const dayKey = getLogicalDay(item.created_at)
    if (!groups[dayKey]) {
      groups[dayKey] = []
    }
    groups[dayKey].push(item)
  })

  // Return as array of [dayKey, items] sorted by dayKey descending
  return Object.entries(groups).sort((a, b) => b[0].localeCompare(a[0]))
}

const formatCountdown = (createdAt: string, now: Date) => {
  const created = parseAsUTC(createdAt)
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
  const [comment, setComment] = useState('')
  const [list, setList] = useState<BibItem[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
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

  const handleRefresh = async () => {
    try {
      setRefreshing(true)
      const response = await fetch('/api/bibs')
      const data = await response.json()
      setList(data)
      setNow(new Date())
    } catch (error) {
      console.error('Failed to refresh items:', error)
    } finally {
      setRefreshing(false)
    }
  }

  const handleOpenDialog = () => {
    setDateTime(getLocalDateTimeString())
    setSelectedType(ITEM_TYPES[0])
    setComment('')
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setSelectedType(ITEM_TYPES[0])
    setDateTime(getLocalDateTimeString())
    setComment('')
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
          comment: comment || null,
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
          <Heading size="lg">Milan</Heading>
          <HStack gap={2}>
            <IconButton
              aria-label="Rafraîchir"
              onClick={handleRefresh}
              variant="ghost"
              rounded="full"
              size="lg"
              loading={refreshing}
            >
              <LuRefreshCw />
            </IconButton>
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
        </HStack>

        {list.length === 0 ? (
          <Text color="gray.400" textAlign="center" py={8}>
            Aucun élément enregistré
          </Text>
        ) : (
          (() => {
            const latestBiberonId = list.find(
              item => item.type === 'Biberon (prélait)' || item.type === "Biberon (lait mat')"
            )?.id
            const groupedItems = groupByDay(list)

            return groupedItems.map(([dayKey, items]) => (
              <Box key={dayKey} mb={6}>
                <Text fontSize="lg" fontWeight="semibold" color="gray.300" mb={4} mt={4}>
                  {formatDayHeader(dayKey)}
                </Text>
                <VStack gap={5} align="stretch">
                  {items.map(item => (
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
                            {formatTime(item.created_at)}
                          </Text>
                          {item.comment && (
                            <Text fontSize="sm" color="gray.300">
                              {item.comment}
                            </Text>
                          )}
                        </VStack>
                        {(item.type === 'Biberon (prélait)' ||
                          item.type === "Biberon (lait mat')") &&
                          item.id === latestBiberonId &&
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
                                color={
                                  isOver3Hours ? 'red.500' : isOver2Hours ? 'green.500' : 'gray.400'
                                }
                              >
                                {diffHours}h {diffMinutes}m
                              </Text>
                            )
                          })()}
                      </HStack>
                    </Box>
                  ))}
                </VStack>
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
                <Field label="Commentaire">
                  <Input
                    type="text"
                    placeholder="Optionnel"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
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
