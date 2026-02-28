import fs from 'node:fs'

export default function load_primitives() {
  const input = fs.readFileSync('in/primitives.txt')
    .toString()
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.length)

  const primitives = []
  let group
  for (const line of input) {
    if (line.startsWith('#')) {
      group = line.slice(1).trim()

    } else {
      const [syllable, meaning_anti] = line.split(':')
      let [meaning, anti] = meaning_anti.split(' - ')
      meaning = meaning.split(',').map(s => s.trim())
      anti = anti ? anti.split(',').map(s => s.trim()) : []

      primitives.push({ group, syllable, meaning, anti })
    }
  }
  return primitives
}
