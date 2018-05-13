const ansiRegex = require('ansi-regex')()
const isFullwidthCodePoint = require('is-fullwidth-code-point')

const isVariationSelector = c => c >= 0xfe00 && c <= 0xfe0f

module.exports = s => {
  if (!s || s.length === 0) return 0
  s = s.replace(ansiRegex, '')

  let count = 0
  const graphemes = [...s]
  for (let i = 0; i < graphemes.length; i++) {
    const code = graphemes[i].codePointAt(0)

    // according to: http://www.iemoji.com/view/emoji/503/symbols/heavy-large-circle
    // some emojis that used to be 1 character, were added a variation selector to be
    // easily identified and shown in OSX and iOS
    if (isVariationSelector(code)) continue

    count += isFullwidthCodePoint(code) ? 2 : 1
  }

  return count
}
