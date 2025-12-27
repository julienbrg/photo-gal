import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { id, name } = await request.json()

    if (!id) {
      return NextResponse.json({ error: 'Item ID is required' }, { status: 400 })
    }

    // Update the item status to 1 and add the participant name
    await sql`
      UPDATE naissance
      SET status = 1,
          participants = CASE
            WHEN participants = '' THEN ${name}
            ELSE participants || ', ' || ${name}
          END,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ${id} AND status = 0
    `

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ error: 'Failed to reserve item' }, { status: 500 })
  }
}
