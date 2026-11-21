import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

export type Credit = {
  name: string
  role: string
}

export type Recording = {
  performer: string
  year?: number
  spotify?: string
  youtube?: string
  label?: string
}

export type Block = {
  label?: string
  lines: string[]
}

export type Song = {
  id: string
  kind: 'song' | 'poem' | 'text'
  title: string
  lang?: string
  date?: string
  tags?: string[]
  credits: Credit[]
  recordings?: Recording[]
  blocks: Block[]
  source?: string
  notes?: string
}

const SONGS_DIR = path.join(process.cwd(), 'public', 'songs')

const readSong = async (file: string): Promise<Song> =>
  JSON.parse(await readFile(path.join(SONGS_DIR, file), 'utf8'))

export async function getSongIds(): Promise<string[]> {
  return (await readdir(SONGS_DIR)).filter(f => f.endsWith('.json')).map(f => f.slice(0, -5))
}

export async function getSongs(): Promise<Song[]> {
  const songs = await Promise.all((await getSongIds()).map(id => readSong(`${id}.json`)))
  return songs.sort((a, b) => a.title.localeCompare(b.title, 'fr'))
}

export async function getSong(id: string): Promise<Song | undefined> {
  if (!(await getSongIds()).includes(id)) return undefined
  return readSong(`${id}.json`)
}

export function groupCredits(credits: Credit[]): { name: string; roles: string[] }[] {
  const byName = new Map<string, string[]>()
  for (const { name, role } of credits) byName.set(name, [...(byName.get(name) ?? []), role])
  return [...byName].map(([name, roles]) => ({ name, roles }))
}
