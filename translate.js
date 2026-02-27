const fs = require('node:fs')

const primitives = read('primitives.txt')
      .map(([p, t]) => [
        p,
        ...t.split(' - ')
          .map(s => s.split(',')
               .map(s => s.trim()))
      ])
      .reduce((a, [p, meaning, anti]) => ({
        ...a,
        [p]: { meaning, anti }
      }), {})

const translations = {}

Object.keys(primitives).forEach(p => {
  primitives[p].meaning.forEach(m =>
    translations[m] = [p]);
  (primitives[p].anti || []).forEach(m =>
    translations[m] = [p, 'na'])
})

const dictionary = read('dictionary.txt')
  .reduce((a, [w, r]) => ({
    ...a,
    [w]: r.trim()
  }), {})

for (const [w, t] of Object.entries(dictionary)) {
  translations[w] = t.split(' ').map(s => s.trim())
}

const sentences = read('sentences.txt')
  .reduce((a, [w, r]) => ({
    ...a,
    [w]: r.trim()
  }), {})

for (const [w, t] of Object.entries(sentences)) {
  translations[w] = t.split(' ').map(s => s.trim())
}

const missing = {}

let translated
do {
  translated = 0
  for (const word in translations) {
    translations[word] = translations[word].reduce((a, t) => {
      if (t in primitives)
        return [...a, t]
      if (!(t in translations)) {
        missing[t] = true
        return [...a, t]
      }
      translated++
      return [...a, ...translations[t]]
    }, [])
  }
} while (translated > 0)

console.log('missing:', Object.keys(missing))

function read(file) {
  return fs.readFileSync(file)
    .toString()
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.length && !l.startsWith('#'))
    .filter(l => l.includes(':'))
    .map(l => l.split(':'))
}

fs.writeFileSync('out.html',
  table(Object.keys(dictionary).toSorted(), dictionary)
  + '<hr>'
  + table(Object.keys(sentences), sentences))

function table(keys, source) {
  return '<table>' +
    keys
      .map(w => [
        w,
        translations[w].map(p => `<img src="symbols/${p}.png" height="10">`).join(''),
        translations[w].join(' '),
        source[w],
      ])
      .map(row => '<tr>' + row.map(c => `<td>${c}</td>`).join('') + '</tr>')
      .join('\n')
    + '</table>'
}
