import load_bases from './load_bases.js'
import save from './save.js'
import { page, title, section, heading, table, row, col } from './html.js'

export default function generate_bases(out) {
  const bases = load_bases()

  const groups = bases
    .map(p => p.group)
    .reduce((a, g) => [...a, ...(a.includes(g) ? [] : [g])], [])

  const content = []

  const cols = 3
  for (let i = 0; i < groups.length; i += cols) {
    content.push(row(...groups.slice(i, i + cols)
      .map(group => col(`lg-${12 / cols}`,
        heading(group),
        table(bases
          .filter(b => b.group == group)
          .map(b => [
            `<img src="../glyphs/${b.syllable}.png" height="30">`,
            b.syllable,
            `<i>${b.meaning}</i>`
          ]),
          [2, 1, 2])))))
  }

  save(out, page(
    title('Bases'),
    ...content))
}
