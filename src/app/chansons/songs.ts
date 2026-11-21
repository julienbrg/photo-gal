import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

export type Recording = {
  performer: string
  year?: number
  spotify?: string
  youtube?: string
  label?: string
}

export type Song = {
  id: string
  kind: 'song' | 'poem' | 'text'
  title: string
  recordings?: Recording[]
}

const SONGS_DIR = path.join(process.cwd(), 'public', 'songs')

export async function getSongs(): Promise<Song[]> {
  const files = (await readdir(SONGS_DIR)).filter(f => f.endsWith('.json'))
  const songs = await Promise.all(
    files.map(async f => JSON.parse(await readFile(path.join(SONGS_DIR, f), 'utf8')) as Song)
  )
  return songs.sort((a, b) => a.title.localeCompare(b.title, 'fr'))
}
