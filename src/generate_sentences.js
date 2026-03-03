import fs from 'node:fs'
import save from './save.js'
import translate from './translate.js'
import { page, title, table } from './html.js'

export default function generate_sentences(out, console) {
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
			bases: translation.split(' ')
		}))

	save(out, page(
		title('Sentences'),
		table(translate(sentences, console)
			.map(e => [
				`<strong>${e.sentence}</strong>`,
				`<i>${e.translation}</i>`,
				e.bases.map(p =>
					`<img src="../glyphs/${p}.png" height="20">`)
					.join(''),
				e.bases.join(' ')
			]), ['6 col-lg-2', '6 col-lg-2', '6 col-lg', '6 col-lg'])))
}
