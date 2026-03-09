import fs from 'node:fs'

export default function load_bases() {
  const input = fs.readFileSync('in/bases.txt')
    .toString()
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.length)

  const bases = []
  let group
  for (const line of input) {
    if (line.startsWith('#')) {
      group = line.slice(1).trim()

    } else if (line.includes(':')) {
      let [syllable, meaning] = line.split(':')
      meaning = meaning.trim()
      bases.push({ group, syllable, meaning })
    }
  }
  return bases
}
