import fs from 'node:fs'
import load_bases from './load_bases.js'

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
      bases: translation.split(' ')
    }))

  for (const base of load_bases()) {
    dictionary.push({
      word: base.meaning,
      translation: '(base)',
      bases: [base.syllable],
    })
  }

  return dictionary
}
