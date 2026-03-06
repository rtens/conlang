import fs from 'node:fs'

export default function save(file, content) {
	if (!file) return
	fs.writeFileSync(file, content)
}

save.deck = function (file, name, cards) {
	const date = new Date().toISOString().slice(0, 16)

	save(file, [
		`#deck:conlang::${name}`,
		'#html:true',
		'#tags column:1',
		'#guid column:2',
		'#notetype column:3',
		cards.map(fields => [date, ...fields].join(';')).join('\n')
	].join('\n'))
}
