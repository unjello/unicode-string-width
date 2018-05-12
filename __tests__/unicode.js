const unicode_string_width = require('../index')

describe('unicode', () => {
  const text = {
    '\u0100': 1,
    '\u1E9B\u1E6A': 2,
    'אבגדהוזחטל': 10,
    'ဤဥဩဪါ': 5,
    'math symbols: 𝓐𝓑': 16
  }
  Object.keys(text).forEach(e => {
    test(`properly calculates width of regular text >${e}`, () => {
      expect(unicode_string_width(e)).toEqual(text[e])
   }) 
  })

  const emoji = {
    '🙌🙋😱': 3,
    'text with emojis 😂😂😂': 20
  }
  Object.keys(emoji).forEach(e => {
    test(`properly calculates width of emojis >${e}`, () => {
      expect(unicode_string_width(e)).toEqual(emoji[e])
   }) 
  })

  const tiles = {
    '🀠🀡🀦': 3,
    'ace of spades 🂡': 15
  }
  Object.keys(tiles).forEach(e => {
    test(`properly calculates width of tiles >${e}`, () => {
      expect(unicode_string_width(e)).toEqual(tiles[e])
   }) 
  })
})