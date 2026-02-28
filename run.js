import generate_primitives from './src/generate_primitives.js'
import generate_sentences from './src/generate_sentences.js'
import generate_reverse_dictionary from './src/generate_reverse_dictionary.js'
import generate_forward_dictionary from './src/generate_forward_dictionary.js'

generate_primitives('out/primitives.html')
generate_forward_dictionary('out/dictionary.html')
generate_reverse_dictionary('out/dictionary_reverse.html')
generate_sentences('out/sentences.html')
