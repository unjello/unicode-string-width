const ansiRegex = require('ansi-regex')()

module.exports = s => {
  if (!s || s.length === 0) return 0;
  
  s = s.replace(ansiRegex, '')

  return s.length
}