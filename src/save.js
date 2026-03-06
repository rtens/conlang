import fs from 'node:fs'

export default function save(file, content) {
	if (!file) return
	fs.writeFileSync(file, content)
}

save.deck = function (file, name, cards) {
	save(file, [
		`#deck:conlang::${name}`,
		'#html:true',
		'#guid column:1',
		'#notetype column:2',
		cards.map(fields => fields.join(';')).join('\n')
	].join('\n'))
}
