import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function GET() {
  try {
    const items = await sql`
      SELECT id, type, created_at
      FROM bibs
      ORDER BY created_at DESC
    `
    return NextResponse.json(items)
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ error: 'Failed to fetch items' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { type, created_at } = body

    if (!type || !created_at) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const result = await sql`
      INSERT INTO bibs (type, created_at)
      VALUES (${type}, ${created_at})
      RETURNING id, type, created_at
    `

    return NextResponse.json((result as Record<string, unknown>[])[0])
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ error: 'Failed to add item' }, { status: 500 })
  }
}
