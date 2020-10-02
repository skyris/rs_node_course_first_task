const { program } = require('commander')

program
  .storeOptionsAsProperties(false)
  .option('-s, --shift <value>', 'a shift', v => parseInt(v, 10))
  .option('-i, --input <input_file>', 'an input file')
  .option('-o, --output <output_file>', 'an output file')
  .option('-a, --action <action>', 'an action encode/decode')
  .parse(process.argv)

module.exports = {
  argv: program.opts()
}
