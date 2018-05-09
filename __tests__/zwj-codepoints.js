const unicode_string_width = require('../index')

describe('zero-width-join codepoints', () => {
  test('properly calculates width of emojis with zwj codepoints', () => {
    ['👶', '👶🏽', '👩‍👩‍👦‍👦', '⚠️', '🛑'].forEach(e => {
      expect(unicode_string_width(e)).toEqual(1)
    })
  })
})