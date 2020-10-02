const { pipeline } = require('stream')
const {argv} = require('./argvHandler')
const readFromFileOrStdin = require('./readFromFileOrStdin')
const caesarCipherTransform = require('./caesarCipherTransform')
const writeToFileOrStdout = require('./writeToFileOrStdout')

pipeline(
  readFromFileOrStdin(argv.input),
  caesarCipherTransform(argv.shift, argv.action),
  writeToFileOrStdout(argv.output),
  (err) => {
    if (err) {
      console.error(err.message)
      process.exitCode = 1
    } else {
      console.info('Success')
    }
  }
)
