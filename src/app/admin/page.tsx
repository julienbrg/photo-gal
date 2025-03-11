'use client'

import { useState, useEffect } from 'react'
import {
  Container,
  Heading,
  Text,
  Box,
  VStack,
  List,
  ListItem,
  Flex,
  Badge,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Alert,
  AlertIcon,
  useColorModeValue,
  Card,
  CardBody,
  Divider,
} from '@chakra-ui/react'
import { SearchIcon, LinkIcon } from '@chakra-ui/icons'
import { useTranslation } from '@/hooks/useTranslation'

export default function Admin() {
  const [addresses, setAddresses] = useState<string[]>([])
  const [filteredAddresses, setFilteredAddresses] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const t = useTranslation()

  // Define interface for address with metadata
  interface AddressWithMeta {
    address: string
    label: string | null
    created_at: string
  }

  const [addressesWithMeta, setAddressesWithMeta] = useState<AddressWithMeta[]>([])

  // Fetch addresses when component mounts
  useEffect(() => {
    async function fetchAddresses() {
      try {
        setIsLoading(true)
        const response = await fetch('/api/addresses')

        if (!response.ok) {
          throw new Error('Failed to fetch addresses')
        }

        const data = await response.json()

        // Check if we got the enhanced data structure
        if (data.addressesWithMeta) {
          setAddressesWithMeta(data.addressesWithMeta)
          // Still set the addresses array for backward compatibility
          setAddresses(data.addresses)
          setFilteredAddresses(data.addresses)
        } else {
          // Fall back to just addresses if enhanced data not available
          setAddresses(data.addresses)
          setFilteredAddresses(data.addresses)
        }
      } catch (err) {
        console.error('Error fetching addresses:', err)
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    fetchAddresses()
  }, [])

  // Filter addresses based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredAddresses(addresses)
    } else {
      const filtered = addresses.filter(address =>
        address.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredAddresses(filtered)
    }
  }, [searchQuery, addresses])

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  // Format address for display (truncate middle)
  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
  }

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="xl" mb={2}>
            Admin dashboard
          </Heading>
          <Text color="gray.400" fontSize="lg">
            Check all whitelisted addresses
          </Text>
        </Box>

        {/* Search input */}
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.500" />
          </InputLeftElement>
          <Input
            placeholder="Search addresses..."
            value={searchQuery}
            onChange={handleSearchChange}
            bg="whiteAlpha.100"
            border="1px"
            borderColor="whiteAlpha.300"
            _hover={{ borderColor: 'whiteAlpha.400' }}
            _focus={{ borderColor: '#45a2f8', boxShadow: '0 0 0 1px #45a2f8' }}
          />
        </InputGroup>

        {/* Error state */}
        {error && (
          <Alert status="error" borderRadius="md">
            <AlertIcon />
            {error}
          </Alert>
        )}

        {/* Loading state */}
        {isLoading ? (
          <Flex justify="center" py={10}>
            <Spinner size="xl" color="#45a2f8" thickness="4px" />
          </Flex>
        ) : (
          <Card variant="filled" bg="whiteAlpha.100" borderRadius="xl">
            <CardBody>
              <VStack spacing={2} align="stretch">
                <Flex justify="space-between" px={4} py={2}>
                  <Text fontWeight="bold">Address</Text>
                  <Text fontWeight="bold">Action</Text>
                </Flex>
                <Divider borderColor="whiteAlpha.300" />

                {filteredAddresses.length > 0 ? (
                  <List spacing={2}>
                    {filteredAddresses.map((address, index) => {
                      // Find the metadata for this address if available
                      const metadata = addressesWithMeta.find(a => a.address === address)

                      return (
                        <ListItem key={index}>
                          <Flex
                            justify="space-between"
                            align="center"
                            p={3}
                            borderRadius="md"
                            _hover={{ bg: 'whiteAlpha.200' }}
                            transition="background 0.2s"
                          >
                            <Box>
                              <Flex align="center">
                                <Text fontFamily="mono" fontSize="md">
                                  {address}
                                </Text>
                                {metadata?.label && (
                                  <Badge ml={2} colorScheme="purple" fontSize="xs">
                                    {metadata.label}
                                  </Badge>
                                )}
                              </Flex>
                              <Text
                                fontSize="xs"
                                color="gray.400"
                                display={{ base: 'block', md: 'none' }}
                              >
                                {formatAddress(address)}
                              </Text>
                              {metadata?.created_at && (
                                <Text fontSize="xs" color="gray.500" mt={1}>
                                  Added: {new Date(metadata.created_at).toLocaleDateString()}
                                </Text>
                              )}
                            </Box>

                            <a
                              href={`https://etherscan.io/address/${address}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Badge
                                display="flex"
                                alignItems="center"
                                colorScheme="blue"
                                cursor="pointer"
                                px={2}
                                py={1}
                              >
                                <LinkIcon mr={1} />
                                View
                              </Badge>
                            </a>
                          </Flex>
                          {index < filteredAddresses.length - 1 && (
                            <Divider borderColor="whiteAlpha.200" />
                          )}
                        </ListItem>
                      )
                    })}
                  </List>
                ) : (
                  <Box textAlign="center" py={10}>
                    <Text>No addresses found</Text>
                  </Box>
                )}
              </VStack>
            </CardBody>
          </Card>
        )}

        {/* Summary */}
        {!isLoading && !error && (
          <Box textAlign="center">
            <Text color="gray.400">
              Showing {filteredAddresses.length} of {addresses.length} addresses
            </Text>
          </Box>
        )}
      </VStack>
    </Container>
  )
}
