import load_dictionary from './load_dictionary.js'
import load_primitives from './load_primitives.js'

export default function translate(list) {
  const dictionary = load_dictionary()
  const primitives = load_primitives()

  let translated
  do {
    translated = 0
    for (const entry of list) {
      for (const [i, word] of entry.primitives.entries()) {
        if (primitives.find(p => p.syllable == word)) continue
        const translation = dictionary.find(e => e.word == word)
        if (!translation) {
          console.log('Missing: ' + word)
          continue
        }
        translated++
        entry.primitives.splice(i, 1, ...translation.primitives)
      }
    }
  } while (translated > 0)

  return list
}
