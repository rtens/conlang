import fs from 'node:fs'

export default function save(file, content) {
		if (!file) return
	fs.writeFileSync(file, content)
}
