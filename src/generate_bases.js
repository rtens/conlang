import load_bases from './load_bases.js'
import save from './save.js'
import { page, title, section, heading, table } from './html.js'

export default function generate_bases(out) {
  const bases = load_bases()

  const groups = bases
    .map(p => p.group)
    .reduce((a, g) => [...a, ...(a.includes(g) ? [] : [g])], [])

  save(out, page(
    title('bases'),
    ...groups.map(group => section(
      heading(group),
      table(bases
        .filter(b => b.group == group)
        .map(b => [
          `<strong>${b.syllable}</strong>`,
          `<img src="../glyphs/${b.syllable}.png" height="20">`,
          b.noun.join(', '),
          b.qualifier.join(', '),
          b.verb.join(', '),
        ]),
        { 0: 1, 1: 1 })))))
}
