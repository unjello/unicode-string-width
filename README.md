# unicode-string-width

Get the visual width of a unicode string - the number of columns required to display it

Handles:

- [fullwidth](https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms) characters
- [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code) escape codes (terminal corols)
- ASCII control characters
- additional variation selector characters in [iOS/OSX](http://www.iemoji.com/view/emoji/503/symbols/heavy-large-circle)

## Install

```bash
$ npm install unicode-string-width
```

## Usage

```javascript
const unicodeStringWidth = require('unicode-string-width');

unicodeStringWidth('古');
//=> 2

unicodeStringWidth('\u001b[1mဤဥဩဪါ\u001b[22m');
//=> 5

unicodeStringWidth('a');
//=> 1
```

## License

- Unlicense (~Public Domain)

## Related Work

- [string-width](https://github.com/sindresorhus/string-width) - Same stuff, just with a bug. I should have probably just make a PR with a bug fix, but by the time I understood what the bug was, I had this fully functional :)
