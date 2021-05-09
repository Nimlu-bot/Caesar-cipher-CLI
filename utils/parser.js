import { program } from 'commander/esm.mjs';

export const parseArguments = () => {
  const options = program
    .storeOptionsAsProperties(false)
    .option('-s, --shift <number>', 'a shift')
    .option('-a, --action [string]', 'an action encode/decode')
    .option('-i, --input [string]', 'an input file')
    .option('-o, --output [string]', 'an output file')
    .parse(process.argv)
    .opts();
  return options;
};
