import { Pool } from 'pg'

// Initialize the connection pool once
const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
})

// Test the connection during service initialization
;(async () => {
  try {
    const client = await pool.connect()
    console.log('Successfully connected to Neon PostgreSQL database')
    client.release()
  } catch (err) {
    console.error('Failed to connect to Neon PostgreSQL database:', err)
  }
})()

export { pool }

// Helper function for executing queries
export async function executeQuery(query: string, params: any[] = []) {
  const client = await pool.connect()
  try {
    const result = await client.query(query, params)
    return result
  } finally {
    client.release()
  }
}
