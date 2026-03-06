import load_bases from './load_bases.js'
import save from './save.js'

export default function generate_bases_deck(out) {
  const cards = []

  for (const base of load_bases()) {
    const words = [base.noun, base.qualifier, base.verb].filter(x => x.length)

    for (const word of words) {
      cards.push([
        `b_${base.syllable}_f${words.indexOf(word) + 1}`,
        'forward',
        base.syllable,
        `<img src="${base.syllable}.png">`,
        word
      ])
    }

    cards.push([
      `b_${base.syllable}_r`,
      'reverse',
      base.syllable,
      `<img src="${base.syllable}.png">`,
      words.join(', ')
    ])
  }

  save.deck(out, 'bases', cards)
}
