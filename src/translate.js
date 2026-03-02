import load_dictionary from './load_dictionary.js'
import load_bases from './load_bases.js'

const missing = {}

export default function translate(list) {
  const dictionary = load_dictionary()
  const bases = load_bases()

  let translated
  do {
    translated = 0
    for (const entry of list) {
      for (const [i, word] of entry.bases.entries()) {
        if (bases.find(p => p.syllable == word)) continue
        const translation = dictionary.find(e => e.word == word)
        if (!translation) {
          if (!(word in missing))
            console.log('Missing: ' + word)
          missing[word] = true
          continue
        }
        translated++
        entry.bases.splice(i, 1, ...translation.bases)
      }
    }
  } while (translated > 0)

  return list
}
