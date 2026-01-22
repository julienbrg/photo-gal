import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function GET() {
  try {
    const items = await sql`
      SELECT id, type, created_at, comment
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
    const { type, created_at, comment } = body

    if (!type || !created_at) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const result = await sql`
      INSERT INTO bibs (type, created_at, comment)
      VALUES (${type}, ${created_at}, ${comment || null})
      RETURNING id, type, created_at, comment
    `

    return NextResponse.json((result as Record<string, unknown>[])[0])
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ error: 'Failed to add item' }, { status: 500 })
  }
}
