import generate_bases from './src/generate_bases.js'
import generate_sentences from './src/generate_sentences.js'
import generate_reverse_dictionary from './src/generate_reverse_dictionary.js'
import generate_forward_dictionary from './src/generate_forward_dictionary.js'

generate_bases('out/bases.html')
generate_forward_dictionary('out/dictionary.html', console)
generate_reverse_dictionary('out/dictionary_reverse.html', console)
generate_sentences('out/sentences.html', console)
