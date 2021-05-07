import parseArgs from 'minimist';
import { HandleErrors } from './handleErrors.js';

const parseArguments = () => {
  const args = parseArgs(process.argv.slice(2));
  delete args._;

  const options = {
    shift: undefined,
    action: undefined,
    output: undefined,
    input: undefined,
  };

  try {
    Object.keys(args).forEach((key) => {
      if (Array.isArray(args[key])) {
        throw Error(`something wrong with argument ${key}`);
      }

      if (key === 'shift' || key === 's') {
        if (args[key] !== true) {
          options.shift = args[key];
        }
      }

      if (key === 'action' || key === 'a') {
        options.action = args[key];
      }

      if (key === 'output' || key === 'o') {
        options.output = args[key] !== true ? args[key] : null;
      }

      if (key === 'input' || key === 'i') {
        options.input = args[key] !== true ? args[key] : null;
      }
    });
  } catch (error) {
    HandleErrors(error);
  }

  console.log(options);
  return options;
};

export { parseArguments };
