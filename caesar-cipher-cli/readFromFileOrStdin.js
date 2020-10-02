const fs = require('fs')

function readFromFileOrStdin(inputFile) {
  if (inputFile) {
    return fs.createReadStream(inputFile)
  } 
  return process.stdin
}

module.exports = readFromFileOrStdin
