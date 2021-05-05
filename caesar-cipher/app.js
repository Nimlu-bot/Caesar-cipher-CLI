/* eslint-disable import/extensions */
import { program } from 'commander/esm.mjs';
import { checkOptions } from './checker.js';
import { HandleErrors } from './handleErrors.js';
import { transformPipeline } from './transformPipeline.js';

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

checkOptions(parseCLIOptions())
  .then((opt) => transformPipeline(opt))
  .catch((error, opt) => HandleErrors(error, opt));
