const unicodeStringWidth = require('../index')

describe('unicode', () => {
  const text = {
    '\u0100': 1,
    '\u1E9B\u1E6A': 2,
    'אבגדהוזחטל': 10,
    'ဤဥဩဪါ': 5,
    'math symbols: 𝓐𝓑': 16
  }
  Object.keys(text).forEach(e => {
    test(`properly calculates width of regular text >${e}`, () => expect(unicodeStringWidth(e)).toEqual(text[e]))
  })

  const fullWidth = {
    '古池や': 6,
    'あいうabc': 9,
    'ノード.js': 9
  }
  Object.keys(fullWidth).forEach(e => {
    test(`properly calculates width of full-width text >${e}`, () => expect(unicodeStringWidth(e)).toEqual(fullWidth[e]))
  })

  const emoji = {
    '🙌🙋😱': 3,
    'text with emojis 😂😂😂': 20
  }
  Object.keys(emoji).forEach(e => {
    test(`properly calculates width of emojis >${e}`, () => expect(unicodeStringWidth(e)).toEqual(emoji[e]))
  })

  const tiles = {
    '🀠🀡🀦': 3,
    'ace of spades 🂡': 15
  }
  Object.keys(tiles).forEach(e => {
    test(`properly calculates width of tiles >${e}`, () => expect(unicodeStringWidth(e)).toEqual(tiles[e]))
  })
})
