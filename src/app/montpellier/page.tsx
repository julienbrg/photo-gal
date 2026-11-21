'use client'

import { Box, Button, Flex, Grid, Heading, Input, Link, Stack, Text } from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import { CATEGORIES, PLACES, type Category, type Place } from './places'

const ALL = 'Tout'
type Filter = Category | typeof ALL

const ROUND_UPS: Category = 'Sélections'

const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

const INDEX = PLACES.map(p => ({ place: p, text: fold(`${p.name} ${p.description} ${p.address}`) }))

const COUNTS = PLACES.reduce(
  (acc, p) => ({ ...acc, [p.category]: (acc[p.category] ?? 0) + 1 }),
  {} as Partial<Record<Category, number>>
)

const mapUrl = (p: Place) =>
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(
    p.address ? `${p.name.replace(/\s*\(.*\)$/, '')}, ${p.address}` : `${p.name}, Montpellier`
  )

const linkColor = { base: 'brand.primary', _dark: 'purple.300' }

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" color={linkColor} fontWeight="600">
      {children}
    </Link>
  )
}

function PlaceRow({ place }: { place: Place }) {
  const isPlace = place.category !== ROUND_UPS
  return (
    <Grid
      as="li"
      templateColumns={{ base: '1fr', md: 'minmax(0, 1.6fr) minmax(0, 1fr)' }}
      gap={{ base: 1, md: 6 }}
      py={4}
      borderBottomWidth="1px"
    >
      <Box>
        <Text fontWeight="600" fontSize="lg">
          {place.name}
        </Text>
        <Text mt={0.5} maxW="65ch">
          {place.description}
        </Text>
      </Box>
      <Stack gap={1} fontSize="sm">
        {place.address ? (
          <Text>{place.address}</Text>
        ) : (
          isPlace && (
            <Text color="fg.warning" fontStyle="italic">
              Adresse non précisée
            </Text>
          )
        )}
        <Flex wrap="wrap" columnGap={3} rowGap={1}>
          {isPlace && <ExternalLink href={mapUrl(place)}>Carte</ExternalLink>}
          {place.posts.map((url, i) => (
            <ExternalLink key={url} href={url}>
              {place.posts.length > 1 ? `Post ${i + 1}` : 'Post'}
            </ExternalLink>
          ))}
        </Flex>
      </Stack>
    </Grid>
  )
}

export default function MontpellierPage() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState<Filter>(ALL)

  const sections = useMemo(() => {
    const q = fold(query.trim())
    const hits = INDEX.filter(
      ({ place, text }) => (active === ALL || place.category === active) && text.includes(q)
    ).map(({ place }) => place)
    return CATEGORIES.map(c => ({ category: c, items: hits.filter(p => p.category === c) })).filter(
      s => s.items.length > 0
    )
  }, [query, active])

  return (
    <Box pb={16}>
      <Box pt={8} pb={4}>
        <Heading as="h1" size="3xl">
          Montpellier
        </Heading>
        <Text color="fg.muted" mt={2} maxW="65ch">
          Nos adresses repérées sur Instagram : restaurants, cafés, bars, sorties et balades, à
          Montpellier et aux alentours. Quand le post ne donne pas d&apos;adresse, le lien « Carte »
          cherche le lieu par son nom.
        </Text>
      </Box>

      <Stack position="sticky" top="72px" zIndex={5} bg="bg" py={3} gap={3} borderBottomWidth="1px">
        <label htmlFor="montpellier-search" className="sr-only">
          Chercher une adresse
        </label>
        <Input
          id="montpellier-search"
          type="search"
          placeholder="Chercher un nom, un plat, une rue…"
          autoComplete="off"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <Flex wrap="wrap" gap={2} role="group" aria-label="Filtrer par catégorie">
          {([ALL, ...CATEGORIES] as Filter[]).map(c => {
            const pressed = c === active
            return (
              <Button
                key={c}
                size="xs"
                rounded="full"
                variant={pressed ? 'solid' : 'outline'}
                bg={pressed ? 'brand.primary' : undefined}
                borderColor={pressed ? 'brand.primary' : undefined}
                color={pressed ? 'white' : undefined}
                aria-pressed={pressed}
                onClick={() => setActive(c)}
              >
                {c}
                <Text as="span" opacity={0.7} fontVariantNumeric="tabular-nums">
                  {c === ALL ? PLACES.length : COUNTS[c]}
                </Text>
              </Button>
            )
          })}
        </Flex>
      </Stack>

      {sections.length === 0 ? (
        <Text color="fg.muted" py={6}>
          Aucune adresse ne correspond à « {query.trim()} ». Effacez la recherche ou choisissez une
          autre catégorie.
        </Text>
      ) : (
        sections.map(({ category, items }) => (
          <Box as="section" key={category} mt={8}>
            <Heading as="h2" size="lg" display="flex" gap={2} alignItems="baseline">
              {category}
              <Text as="span" fontSize="sm" fontWeight="normal" color="fg.muted">
                {items.length}
              </Text>
            </Heading>
            <Box as="ul" listStyleType="none" m={0} p={0}>
              {items.map(p => (
                <PlaceRow key={`${p.category}-${p.name}`} place={p} />
              ))}
            </Box>
          </Box>
        ))
      )}
    </Box>
  )
}
