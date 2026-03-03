import load_bases from './load_bases.js'
import save from './save.js'
import { page, title, section, heading, table } from './html.js'

export default function generate_bases(out) {
  const bases = load_bases()

  const groups = bases
    .map(p => p.group)
    .reduce((a, g) => [...a, ...(a.includes(g) ? [] : [g])], [])

  save(out, page(
    title('Bases'),
    ...groups.map(group => section(
      heading(group),
      table(bases
        .filter(b => b.group == group)
        .map(b => [
          `<img src="../glyphs/${b.syllable}.png" height="20">`,
          `<strong>${b.syllable}</strong>`,
          b.noun.join(', '),
          b.qualifier.join(', '),
          b.verb.join(', '),
        ]),
        [1, 1, '3 col-lg-2', '3 col-lg-2', '3 col-lg-2'])))))
}
