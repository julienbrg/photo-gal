import { NextResponse } from 'next/server'
import { executeQuery } from '@/lib/db'

export async function GET() {
  try {
    // Query to fetch all ethereum addresses
    const result = await executeQuery(
      'SELECT * FROM whitelisted_addresses ORDER BY created_at DESC'
    )

    // Extract addresses and add label if available
    const addresses = result.rows.map(row => ({
      address: row.address,
      label: row.label || null,
      created_at: row.created_at,
    }))

    return NextResponse.json({
      addresses: addresses.map(item => item.address), // For backward compatibility with the frontend
      addressesWithMeta: addresses, // Include metadata for enhanced frontend features
      count: addresses.length,
      success: true,
    })
  } catch (error) {
    console.error('Error fetching addresses from Neon:', error)
    return NextResponse.json(
      { error: 'Failed to fetch addresses from database', success: false },
      { status: 500 }
    )
  }
}
