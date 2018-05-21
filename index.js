const ansiRegex = require('ansi-regex')()
const isFullwidthCodePoint = require('is-fullwidth-code-point')

const isVariationSelector = c => c >= 0xfe00 && c <= 0xfe0f
const isCombiningCharacter = c => c >= 0x300 && c <= 0x36f
const isAsciiControlCharacter = c => c <= 0x1f || (c >= 0x7f && c <= 0x9f)

/**
 * Calculates a width in characters of a unicode string. Most unicode chars don't match monospace
 * anyway, so don't be surprised if it won't look pretty in the console. Counts full-width characters
 * and emoji as 2.
 *
 * Supports emojis with an extra Variation Selector, [introduced](http://www.iemoji.com/view/emoji/503/symbols/heavy-large-circle)
 * by iOS/macOS.
 *
 * @param {string} s - unicode string
 * @returns {number} - width in characters
 */
module.exports = s => {
  if (!s || typeof s !== 'string' || s.length === 0) return 0
  s = s.replace(ansiRegex, '')

  let count = 0
  const graphemes = [...s]
  for (let i = 0; i < graphemes.length; i++) {
    const code = graphemes[i].codePointAt(0)

    if (isVariationSelector(code)) {
      continue
    }

    if (
      (code >= 0x1F600 && code <= 0x1F64F) || // Emoticons
      (code >= 0x1F300 && code <= 0x1F5FF) || // Misc Symbols and Pictographs
      (code >= 0x1F680 && code <= 0x1F6FF) || // Transport and Map
      (code >= 0x2600 && code <= 0x26FF) || // Misc symbols
      (code >= 0x2700 && code <= 0x27BF) || // Dingbats
      (code >= 0xFE00 && code <= 0xFE0F) || // Variation Selectors
      (code >= 0x1F900 && code <= 0x1F9FF) || // Supplemental Symbols and Pictographs
      (code >= 65024 && code <= 65039) || // Variation selector
      (code >= 8400 && code <= 8447) // Combining Diacritical Marks for Symbols
    ) {
      if (code >= 0x1F3FB && code <= 0x1F3FF) continue // emoji modifier fitzpatrick type
      count += 2
      continue
    }

    if (isCombiningCharacter(code) || isAsciiControlCharacter(code)) continue

    count += isFullwidthCodePoint(code) ? 2 : 1
  }

  return count
}
