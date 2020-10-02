const { Transform } = require('stream')

const CODE = {
  A: 'A'.charCodeAt(0),
  Z: 'Z'.charCodeAt(0),
  a: 'a'.charCodeAt(0),
  z: 'z'.charCodeAt(0),
}
const ALPHABET_LENGTH = 26

function getShiftedChar(charCode, codeA, shift) {
  return String.fromCharCode(
    ((charCode - codeA + shift) % ALPHABET_LENGTH + ALPHABET_LENGTH)
      % ALPHABET_LENGTH + codeA
  )
}

class CaesarCipherTransform extends Transform {
  constructor(shift, action, options) {
    super(options)
    if (shift === undefined || isNaN(shift)) {
      console.error(
        'Argument "shift" (--shift, -s) is required and has to be a number!'
      )
      process.exit(1)
    }
    if (action === 'encode') {
      this.shift = shift
    } else if (action === 'decode') {
      this.shift = -shift
    } else {
      console.error(
        'Argument "action" (--action, -a) is required and has to be "encode" or "decode"!'
      )
      process.exit(1)
    }
  }

  _transform(data, encoding, callback) {
    const transformed = []
    let charCode
    for (let char of data.toString()) {
      charCode = char.charCodeAt(0)
      if (CODE.A <= charCode && charCode <= CODE.Z) {
        char = getShiftedChar(charCode, CODE.A, this.shift)
      } else if (CODE.a <= charCode && charCode <= CODE.z) {
        char = getShiftedChar(charCode, CODE.a, this.shift)
      }
      transformed.push(char)
    }
    this.push(transformed.join(''))
    callback()
  }
}

function caesarCipherTransform(shift, action) {
  return new CaesarCipherTransform(shift, action)
} 


module.exports = caesarCipherTransform
