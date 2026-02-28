import fs from 'node:fs'

export default function save(file, content) {
  fs.writeFileSync(file, content)
}
