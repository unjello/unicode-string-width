const unicodeStringWidth = require('../index')

describe('plaintext', () => {
  test('returns zero for empty string', () => {
    [undefined, '', null].forEach(s => {
      expect(unicodeStringWidth(s)).toEqual(0)
    })
  })

  test('properly calculates width of plain text', () => {
    const data = {
      'a': 1,
      'test': 4,
      'W1d7h': 5,
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.': 56
    }

    Object.keys(data).forEach(e => expect(unicodeStringWidth(e)).toEqual(data[e]))
  })

  test('ignores control characters', () => {
    [
      '\u0010\u001f',
      '\u007f\u0098\u009f'
    ].forEach(e => expect(unicodeStringWidth(e)).toEqual(0))
  })
})
