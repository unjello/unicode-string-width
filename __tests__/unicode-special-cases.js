const unicodeStringWidth = require('../index')

describe('unicode special cases', () => {
  test('for extra variant selector in apple systems', () => {
    ['⚠️', '🛑'].forEach(e => {
      expect(unicodeStringWidth(e)).toEqual(1)
    })
  })
})
