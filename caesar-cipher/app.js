import { program } from 'commander/esm.mjs';
import { checkOptions } from './checker.js';

const parseCLIOptions = () => {
  const options = program
    .requiredOption('-s, --shift <num>', 'a shift')
    .requiredOption('-a, --action <action>', 'an action encode/decode')
    .option('-i, --input <file>', 'an input file')
    .option('-o, --output <file>', 'an output file')
    .parse(process.argv)
    .opts();
  return options;
};

try {
  const result = checkOptions(parseCLIOptions());

  console.log(result);
} catch (error) {
  console.log('fdkfjdkfjdk   ' + error);
}

console.log('hi');
