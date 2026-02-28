import fs from 'node:fs'
import save from './save.js'
import translate from './translate.js'
import { page, title, table } from './html.js'

export default function generate_sentences(out) {
  const sentences = fs.readFileSync('in/sentences.txt')
    .toString()
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.length
      && !l.startsWith('#')
      && l.includes(':'))
    .map(l => l.split(':').map(s => s.trim()))
    .map(([sentence, translation]) => ({
      sentence,
      translation,
      primitives: translation.split(' ')
    }))

  save(out, page(
    title('Dictionary (Reverse)'),
    table(translate(sentences)
      .map(e => [
        `<strong>${e.sentence}</strong>`,
        `<i>${e.translation}</i>`,
        e.primitives.map(p => `<img src="../symbols/${p}.png" height="20">`).join(''),
        e.primitives.join(' ')
      ]), { 0: 2, 1: 2 })))
}
