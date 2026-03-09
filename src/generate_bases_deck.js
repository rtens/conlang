import load_bases from './load_bases.js'
import save from './save.js'

export default function generate_bases_deck(out) {
  const cards = []

  for (const base of load_bases()) {
    cards.push([
      `bf_${base.syllable}`,
      'forward',
      base.syllable,
      `<img src="${base.syllable}.png">`,
      base.meaning
    ])

    cards.push([
      `br_${base.syllable}`,
      'reverse',
      base.syllable,
      `<img src="${base.syllable}.png">`,
      base.meaning
    ])
  }

  save.deck(out, 'bases', cards)
}
