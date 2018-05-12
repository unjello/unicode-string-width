const unicode_string_width = require('../index')

describe('unicode', () => {
  const text = {
    '\u0100': 1,
    '\u1E9B\u1E6A': 2,
    'אבגדהוזחטל': 10,
    'ဤဥဩဪါ': 5
  }
  Object.keys(text).forEach(e => {
    test(`properly calculates width of regular text >${e}`, () => {
      expect(unicode_string_width(e)).toEqual(text[e])
   }) 
  })
})

/* 
    '\u2651\u2652\u2653\u2654\u2655': 5,
    'ﬠ‬ﬡﬢﬣﬤﬦﬧﬨ﬩שׁשׂשּׁשּׂאַאָ‬': 16,
    'だちぢっつづてでとどなにぬねのは': 16
*/