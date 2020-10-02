# Caesar cipher CLI tool

Console tool for text encoding/decoding by Caesar cipher.
It gets as an input some text file or ```stdin``` and returns transformed text to another file or ```stdout```.

To run it you should 4 options:
1.  **-s, --shift**: a shift
2.  **-a, --action**: an action encode/decode
3.  **-i, --input**: an input file
4.  **-o, --output**: an output file


Options **shift** and **action** are required. Tool would not work if you does not set them.
You can omit options **input** or **output**. And in that case text will be received from ```stdin``` and printed to ```stdout```.

**Usage:**
1. Download or clone this repo
2. Install dependencies ```$ npm install```
3. Run ```$ node caesar_cli -a encode -s 7 -i "./your_input_file.txt" -o "./your_output_file.txt"```


**Usage example:**

```bash
$ node caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
$ node caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
```

```bash
$ node caesar_cli --action decode --shift 7 --input decoded.txt --output plain.txt
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`