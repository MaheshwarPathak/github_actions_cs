import { readFile } from 'node:fs/promises'

const source = await readFile(new URL('./src/message.js', import.meta.url), 'utf8')

if (!source.includes('export const message')) {
  throw new Error('message.js must export message')
}

console.log('Lint passed')
