import { checkOptions } from './checker.js';
import { HandleErrors } from './handleErrors.js';
import { parseArguments } from './parser.js';
import { transformPipeline } from './transformPipeline.js';

checkOptions(parseArguments())
  .then((opt) => transformPipeline(opt))
  .catch((error, opt) => HandleErrors(error, opt));
