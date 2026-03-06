import test from 'ava'
import generate_bases from './src/generate_bases.js'
import generate_sentences from './src/generate_sentences.js'
import generate_reverse_dictionary from './src/generate_reverse_dictionary.js'
import generate_forward_dictionary from './src/generate_forward_dictionary.js'
import generate_bases_deck from './src/generate_bases_deck.js'
import generate_words_deck from './src/generate_words_deck.js'

test('page: bases', t => {
	generate_bases('out/bases.html')
	t.pass()
})

test('page: forward dictionary', t => {
	const console = new MockConsole()
	generate_forward_dictionary('out/dictionary.html', console)
	t.deepEqual(console.logged, [])
})

test('page: reverse dictionary', t => {
	const console = new MockConsole()
	generate_reverse_dictionary('out/dictionary_reverse.html', console)
	t.deepEqual(console.logged, [])
})

test('page: sentences', t => {
	const console = new MockConsole()
	generate_sentences('out/sentences.html', console)
	t.deepEqual(console.logged, [])
})

test('deck: bases', t => {
	generate_bases_deck(null)
	t.pass()
})

test('deck: words', t => {
	generate_words_deck(null, new MockConsole())
	t.pass()
})

class MockConsole {
	logged = []
	log(...args) { this.logged.push(args) }
}
