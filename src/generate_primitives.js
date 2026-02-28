import load_primitives from './load_primitives.js'
import save from './save.js'
import { page, title, section, heading, table } from './html.js'

export default function generate_primitives(out) {
  const primitives = load_primitives()

  const groups = primitives
    .map(p => p.group)
    .reduce((a, g) => [...a, ...(a.includes(g) ? [] : [g])], [])

  save(out, page(
    title('Primitives'),
    ...groups.map(group => section(
      heading(group),
      table(primitives
        .filter(p => p.group == group)
        .map(p => [
          `<strong>${p.syllable}</strong>`,
          `<img src="../symbols/${p.syllable}.png" height="20">`,
          p.meaning.join(', '),
          p.anti.join(', ')
        ]),
        { 0: 1, 1: 1 })))))
}
