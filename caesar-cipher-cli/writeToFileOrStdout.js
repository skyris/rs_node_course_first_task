const fs = require('fs')

function writeToFileOrStdout(outputFile) {
  if (outputFile) {
    if (fs.existsSync(outputFile)) {
      return fs.createWriteStream(outputFile, {flags: 'a'})
    } else {
      console.error(`Output file ${outputFile} does not exist!`)
      process.exit(1)
    }
  } 
  return process.stdout
}

module.exports = writeToFileOrStdout
