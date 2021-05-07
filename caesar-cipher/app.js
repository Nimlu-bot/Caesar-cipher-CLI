/* eslint-disable import/extensions */
import { program } from 'commander/esm.mjs';
import { checkOptions } from './checker.js';
import { HandleErrors } from './handleErrors.js';
import { transformPipeline } from './transformPipeline.js';

const parseCLIOptions = () => {
  const options = program
    .storeOptionsAsProperties(false)
    .option('-s, --shift <num>', 'a shift', '')
    .option('-i, --input <file>', 'an input file')
    .option('-a, --action <action>', 'an action encode/decode')
    .option('-o, --output <file>', 'an output file')
    .parse(process.argv)
    .opts();
  console.log(options);
  return options;
};

checkOptions(parseCLIOptions())
  .then((opt) => transformPipeline(opt))
  .catch((error, opt) => HandleErrors(error, opt));
