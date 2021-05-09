import fs from 'fs';

const ENCODE = 'encode';
const DECODE = 'decode';

const checkOptions = async (options) => {

  const isShiftEmpty = ['-a', '-i', '-o'].includes(options.shift);

  if (options.shift === undefined || isShiftEmpty) {
    throw Error('required option -s or --shift <num> not specified');
  }

  if (!options.action || options.action === true) {
    throw new Error('required option -a or --action <string> not specified');
  }

  if (options.action.toLowerCase() !== ENCODE && options.action.toLowerCase() !== DECODE) {
    throw Error(`action must be ${ENCODE} or ${DECODE}`);
  }

  const numShift = Number.isInteger(Number(options.shift));

  if (!numShift) {
    throw Error(`shift must be integer`);
  }

  if (options.input === true || options.output === true) {
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
