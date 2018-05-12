const unicode_string_width = require('../index')

describe('ansi codes', () => {
  test('returns zero for string with just ansi codes', () => {
    [
      '\033[31;1;4m\033[0m',
      '\033[38;2;255;82;197;48;2;155;106;0m'
    ].forEach(s => {
      expect(unicode_string_width(s)).toEqual(0)
    })
  })

  test('properly calculates width of text without ansi codes', () => {
    const data = {
      '\033[31;1;4mHello\033[0m': 5,
      '\033[38;2;255;82;197;48;2;155;106;0mHello': 5
    }

    Object.keys(data).forEach(e => expect(unicode_string_width(e)).toEqual(data[e]))
  })
})

