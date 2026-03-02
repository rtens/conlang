import load_dictionary from './load_dictionary.js'
import save from './save.js'
import translate from './translate.js'
import { page, title, table } from './html.js'

export default function generate_forward_dictionary(out, console) {
	const translated = translate(load_dictionary(), console)

	const counts = translated.reduce((a, c) => ({
		...a,
		[c.word]: (a[c.word] || 0) + 1
	}), {})
	const dups = Object.keys(counts)
		.filter(word => counts[word] > 1)

	if (dups.length)
		console.log('duplicates:', dups)

	save(out, page(
		title('Dictionary'),
		table(translated
			.toSorted((a, b) => a.word.toLowerCase() < b.word.toLowerCase() ? -1 : 1)
			.map(e => [
				`<strong>${e.word}</strong>`,
				`<i>${e.translation}</i>`,
				e.bases.map(p => `<img src="../glyphs/${p}.png" height="20">`).join(''),
				e.bases.join(' ')
			]), { 0: 2, 1: 3 })))
}
