import load_dictionary from './load_dictionary.js'
import save from './save.js'
import translate from './translate.js'
import { page, title, table } from './html.js'

export default function generate_reverse_dictionary(out, console) {
	save(out, page(
		title('Dictionary (reverse)'),
		table(translate(load_dictionary(), console)
			.toSorted((a, b) => a.bases.join('') < b.bases.join('') ? -1 : 1)
			.map(e => [
				e.bases.map(p => `<img src="../glyphs/${p}.png" height="20">`).join(''),
				`<strong>${e.bases.join(' ')}</strong>`,
				e.word,
				`<i>${e.translation}</i>`,
			]), ['6 col-lg', '6 col-lg', '6 col-lg-1', '6 col-lg-2'])))
}
