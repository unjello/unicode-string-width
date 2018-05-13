const unicodeStringWidth = require('../index')

describe('ansi codes', () => {
  test('returns zero for string with just ansi codes', () => {
    [
      '\x1b[31;1;4m\x1b[0m',
      '\x1b[38;2;255;82;197;48;2;155;106;0m'
    ].forEach(s => {
      expect(unicodeStringWidth(s)).toEqual(0)
    })
  })

  test('properly calculates width of text without ansi codes', () => {
    const data = {
      '\x1b[31;1;4mHello\x1b[0m': 5,
      '\x1b[38;2;255;82;197;48;2;155;106;0mHello': 5
    }

    Object.keys(data).forEach(e => expect(unicodeStringWidth(e)).toEqual(data[e]))
  })
})
