import test from 'ava'
import generate_bases from './src/generate_bases.js'
import generate_sentences from './src/generate_sentences.js'
import generate_reverse_dictionary from './src/generate_reverse_dictionary.js'
import generate_forward_dictionary from './src/generate_forward_dictionary.js'

test('bases', t => {
	generate_bases('out/bases.html')
	t.pass()
})

test('forward dictionary', t => {
	const logged = []
	generate_forward_dictionary('out/dictionary.html', {
		log: (...args) => logged.push(args)
	})
	t.deepEqual(logged, [])
})

test('reverse dictionary', t => {
	const logged = []
	generate_reverse_dictionary('out/dictionary_reverse.html', {
		log: (...args) => logged.push(args)
	})
	t.deepEqual(logged, [])
})

test('sentences', t => {
	const logged = []
	generate_sentences('out/sentences.html', {
		log: (...args) => logged.push(args)
	})
	t.deepEqual(logged, [])
})
