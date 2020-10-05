const fs = require('fs')
const path = require('path')

function readFromFileOrStdin(inputFile) {
  if (inputFile) {
    inputFile = path.resolve(__dirname, inputFile)
    return fs.createReadStream(inputFile)
  } 
  return process.stdin
}

module.exports = readFromFileOrStdin
