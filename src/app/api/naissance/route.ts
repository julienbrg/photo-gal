import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function GET() {
  try {
    const items = await sql`
      SELECT id, name, link, description, participants, status
      FROM naissance
      WHERE status = 0
      ORDER BY id ASC
    `
    return NextResponse.json(items)
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ error: 'Failed to fetch items' }, { status: 500 })
  }
}
