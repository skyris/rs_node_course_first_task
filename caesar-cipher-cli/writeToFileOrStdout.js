const fs = require('fs')

function writeToFileOrStdout(outputFile) {
  if (outputFile) {
    return fs.createWriteStream(outputFile, {flags: 'a'})
  } 
  return process.stdout
}

module.exports = writeToFileOrStdout
