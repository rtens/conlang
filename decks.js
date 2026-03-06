import generate_bases_deck from './src/generate_bases_deck.js'
import generate_words_deck from './src/generate_words_deck.js'

generate_bases_deck('out/decks/bases.csv')
generate_words_deck('out/decks/words.csv', console)
