const unicode_string_width = require('../index')

describe('unicode special cases', () => {
  test('for extra variant selector in apple systems', () => {
    ['⚠️', '🛑'].forEach(e => {
      expect(unicode_string_width(e)).toEqual(1)
    })
  })
})