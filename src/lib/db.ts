import { neon } from '@neondatabase/serverless'

let sqlInstance: ReturnType<typeof neon> | null = null

export const sql = ((query: TemplateStringsArray, ...values: unknown[]) => {
  if (!sqlInstance) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is not defined')
    }
    sqlInstance = neon(process.env.DATABASE_URL)
  }
  return sqlInstance(query, ...values)
}) as ReturnType<typeof neon>
