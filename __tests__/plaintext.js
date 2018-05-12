const unicode_string_width = require('../index')

describe('plaintext', () => {
  test('returns zero for empty string', () => {
    [undefined, '', null].forEach(s => {
      expect(unicode_string_width(s)).toEqual(0)
    })
  })

  test('properly calculates width of plain text', () => {
    const data = {
      'a': 1,
      'test': 4,
      'W1d7h': 5,
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.':   56
    }

    Object.keys(data).forEach(e => expect(unicode_string_width(e)).toEqual(data[e]))
  })
})