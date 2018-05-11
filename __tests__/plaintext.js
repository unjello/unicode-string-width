const unicode_string_width = require('../index')

describe('plaintext', () => {
  test('returns zero for empty string', () => {
    [undefined, '', null].forEach(s => {
      expect(unicode_string_width(s)).toEqual(0)
    })
  })
})