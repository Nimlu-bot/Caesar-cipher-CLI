import { checkOptions } from './checker.js';
import { parseArguments } from './parser.js';
import { HandleErrors } from './handleErrors.js';
import { transformPipeline } from './transformPipeline.js';

checkOptions(parseArguments())
  .then((options) => transformPipeline(options))
  .catch((error) => HandleErrors(error));
