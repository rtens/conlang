import load_dictionary from './load_dictionary.js'
import save from './save.js'
import translate from './translate.js'
import { page, title, table } from './html.js'

export default function generate_forward_dictionary(out) {
  save(out, page(
    title('Dictionary'),
    table(translate(load_dictionary())
      .toSorted((a, b) => a.word.toLowerCase() < b.word.toLowerCase() ? -1 : 1)
      .map(e => [
        `<strong>${e.word}</strong>`,
        `<i>${e.translation}</i>`,
        e.primitives.map(p => `<img src="../symbols/${p}.png" height="20">`).join(''),
        e.primitives.join(' ')
      ]), { 0: 2, 1: 3 })))
}
