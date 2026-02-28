import fs from 'node:fs'
import load_primitives from './load_primitives.js'

export default function load_dictionary() {
  const dictionary = fs.readFileSync('in/dictionary.txt')
    .toString()
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.length
      && !l.startsWith('#')
      && l.includes(':'))
    .map(l => l.split(':').map(s => s.trim()))
    .map(([word, translation]) => ({
      word,
      translation,
      primitives: translation.split(' ')
    }))

  for (const primitive of load_primitives()) {
    for (const word of primitive.meaning) {
      dictionary.push({
        word,
        translation: '(primitive)',
        primitives: [primitive.syllable],
      })
    }
    for (const word of primitive.anti) {
      dictionary.push({
        word,
        translation: '(anti primitive)',
        primitives: [primitive.syllable, 'na'],
      })
    }
  }

  return dictionary
}
