import load_dictionary from './load_dictionary.js'
import save from './save.js'
import translate from './translate.js'
import { page, title, table } from './html.js'

export default function generate_reverse_dictionary(out) {
  save(out, page(
    title('Dictionary (Reverse)'),
    table(translate(load_dictionary())
      .toSorted((a, b) => a.bases.join('') < b.bases.join('') ? -1 : 1)
      .map(e => [
        `<strong>${e.bases.join(' ')}</strong>`,
        e.bases.map(p => `<img src="../glyphs/${p}.png" height="20">`).join(''),
        e.word,
        `<i>${e.translation}</i>`,
      ]), { 0: 3, 1: 4 })))
}
