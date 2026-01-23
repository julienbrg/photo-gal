import { NextResponse } from 'next/server'
import { verifyMessage } from 'ethers'

// Parse allowed addresses from environment variable (comma-separated)
const ALLOWED_ADDRESSES = (process.env.ALLOWED_ADDRESSES || '')
  .split(',')
  .map(addr => addr.trim())
  .filter(addr => addr.length > 0)

// Parse SIWE message to extract address and nonce
function parseSiweMessage(message: string): { address: string; nonce: string; domain: string } {
  const lines = message.split('\n')

  // Parse header (domain + address)
  const domainLine = lines[0]
  const domainMatch = domainLine.match(/^(.+) wants you to sign in with your Ethereum account:$/)
  if (!domainMatch) {
    throw new Error('Invalid SIWE message: malformed domain line')
  }
  const domain = domainMatch[1]

  const address = lines[1]
  if (!address.match(/^0x[a-fA-F0-9]{40}$/)) {
    throw new Error('Invalid SIWE message: malformed address')
  }

  // Find nonce
  let nonce = ''
  for (const line of lines) {
    if (line.startsWith('Nonce: ')) {
      nonce = line.substring(7)
      break
    }
  }

  if (!nonce) {
    throw new Error('Invalid SIWE message: missing nonce')
  }

  return { address, nonce, domain }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { message, signature } = body

    if (!message || !signature) {
      return NextResponse.json({ error: 'Missing message or signature' }, { status: 400 })
    }

    // Parse the SIWE message
    const parsed = parseSiweMessage(message)

    // Verify the signature using ethers
    const recoveredAddress = verifyMessage(message, signature)

    // Check if recovered address matches the claimed address in the message
    if (recoveredAddress.toLowerCase() !== parsed.address.toLowerCase()) {
      return NextResponse.json(
        { error: 'Access denied', reason: 'Signature does not match address' },
        { status: 403 }
      )
    }

    // Check if the address is in the allowed list
    const isAllowed = ALLOWED_ADDRESSES.some(
      addr => addr.toLowerCase() === recoveredAddress.toLowerCase()
    )

    if (!isAllowed) {
      return NextResponse.json(
        { error: 'Access denied', reason: 'Address not authorized' },
        { status: 403 }
      )
    }

    return NextResponse.json({ authorized: true, address: recoveredAddress })
  } catch (error) {
    console.error('Authorization error:', error)
    return NextResponse.json(
      { error: 'Access denied', reason: error instanceof Error ? error.message : 'Unknown error' },
      { status: 403 }
    )
  }
}
