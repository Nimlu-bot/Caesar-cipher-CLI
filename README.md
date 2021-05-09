# Caesar-cipher-CLI

You must have the following programs installed:

    Node.js 14+ LTS & npm
    git  (optional)

You can check it:

    node -v
    npm -v

Installation instructions:

- Clone repository

  In the command prompt run this command

      git clone git@github.com:Nimlu-bot/Caesar-cipher-CLI.git

- Install app dependencies

  In the command prompt open the directory containing the app and run following commands:

      cd caesar-cipher
      npm i

Usage:

To launch the Caesar-cipher-CLI, open the command prompt, change current working directory to the caesar-cipher folder and run the following command:

```
node app.js options

options:
  -s, --shift     Set the shift for decode/encode data            [required] [number]
  -a, --action    Specify what action you want to perform         [required] [choices: "encode", "decode"]
  -i, --input     Specify the file where to get the data from     [string]
  -o, --output    Specify the file to save the data to            [string]
```

Examples:

```
  node app.js --shift 7 --action encode    Encode data from stdin with shift 7 and print result to stdout
  node app.js -s 2 -a decode -i input.txt  Decode innput.txt with shift 2 and print result to stdout
  node app.js -s 1 -a encode -i input.txt -o output.txt  Encode innput.txt with shift 1 and append result to output.txt

```

1.  If input or output file isn't exist it wouldn't be created.
2.  If --input option is omitted - STDIN is used as an input source. Use Ctrl+C for break input.
3.  If --output option is omitted - STDOUT is used as an output destination.
4.  --shift value can be negative and can exceed the size of the alphabet.
5.  Only English alphabet characters are encoded/decoded, all other characters will be kept intact.
