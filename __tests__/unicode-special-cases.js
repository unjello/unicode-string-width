const unicodeStringWidth = require('../index')

describe('unicode special cases', () => {
  ['⚠️', '🛑', '🚷'].forEach(e => {
    test(`for extra variant selector in apple '${e}' (${[...e].map((c, i) => e.codePointAt(i))})`, () => {
      expect(unicodeStringWidth(e)).toEqual(2)
    })
  })

  test('combining characters should be ignored', () => {
    ['a͐', 'c͒'].forEach(e => expect(unicodeStringWidth(e)).toEqual(1))
  })
})
