const fs = require('fs')
const path = require('path')

function writeToFileOrStdout(outputFile) {
  if (outputFile) {
    outputFile = path.resolve(__dirname, outputFile)
    return fs.createWriteStream(outputFile, {flags: 'a'})
  } 
  return process.stdout
}

module.exports = writeToFileOrStdout
