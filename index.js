const ansiRegex = require('ansi-regex')()
const isFullwidthCodePoint = require('is-fullwidth-code-point')

module.exports = s => {
  if (!s || s.length === 0) return 0;
  
  s = s.replace(ansiRegex, '')

  let count = 0
  const graphemes = [...s]
  for (let i = 0; i < graphemes.length; i++) {
    const code = graphemes[i].codePointAt(0)
    count += isFullwidthCodePoint(code) ? 2 : 1;
  }

  return count
}