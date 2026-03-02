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
      let [syllable, meanings] = line.split(':')
      meanings = (meanings).split(' / ')
        .map(words => words.split(',').map(s => s.trim()))
      let [noun, qualifier, verb] = meanings
      qualifier ||= []
      verb ||= []

      bases.push({ group, syllable, noun, qualifier, verb })
    }
  }
  return bases
}
