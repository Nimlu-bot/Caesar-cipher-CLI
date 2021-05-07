import fs from 'fs';

const ENCODE = 'encode';
const DECODE = 'decode';

const checkOptions = async (options) => {
  if (options.shift === undefined) {
    throw Error('required option -s or --shift <num> not specified');
  }

  if (!options.action) {
    throw new Error('required option -a or --action <string> not specified');
  }

  if (options.action.toLowerCase() !== ENCODE && options.action.toLowerCase() !== DECODE) {
    throw Error(`action must be ${ENCODE} or ${DECODE}`);
  }

  const numShift = Number.isInteger(options.shift);

  if (!numShift) {
    throw Error(`shift must be integer`);
  }

  if (options.input === null || options.output === null) {
    throw Error(`an empty file path`);
  }

  if (options.input) {
    try {
      await fs.promises.access(options.input, fs.constants.F_OK);
    } catch (error) {
      throw Error(`input file not found or inaccessible`);
    }
  }

  if (options.output) {
    try {
      await fs.promises.access(options.output, fs.constants.F_OK);
    } catch (error) {
      throw Error(`output file not found or inaccessible`);
    }
  }

  return options;
};

export { checkOptions };
