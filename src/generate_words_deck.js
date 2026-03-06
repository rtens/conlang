import load_dictionary from './load_dictionary.js'
import save from './save.js'
import translate from './translate.js'

export default function generate_bases_deck(out, console) {
  const cards = []

  const entries = translate(load_dictionary(), console)
    .filter(e => !e.translation.startsWith('('))
    .reduce((a, c) => ({ ...a, [c.bases]: [...(a[c.bases] || []), c.word] }), {})

  for (const [key, words] of Object.entries(entries)) {
    const bases = key.split(',')

    for (const word of words) {
      cards.push([
        `wf_${word}`,
        'forward',
        bases.join(' '),
        bases.map(b => `<img src="${b}.png" height="40">`).join(''),
        word
      ])
    }

    if (bases.length == 1) continue

    cards.push([
      `wr_${bases.join('')}`,
      'reverse',
      bases.join(' '),
      bases.map(b => `<img src="${b}.png" height="40">`).join(''),
      words.join(', ')
    ])
  }

  save.deck(out, 'words', cards)
}
