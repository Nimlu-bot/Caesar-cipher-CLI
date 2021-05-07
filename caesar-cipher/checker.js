import fs from 'fs';

const ENCODE = 'encode';
const DECODE = 'decode';

const checkOptions = async (options) => {
  
  if (!options.shift) {
    throw Error('required option "-s, --shift <num>" not specified');
  }

  if (!options.action) {
    throw new Error('required option "-a, --action <action>" not specified');
  }
  if (options.action.toLowerCase() !== ENCODE && options.action.toLowerCase() !== DECODE) {
    throw Error(`action must be ${ENCODE} or ${DECODE}`);
  }

  const numShift = Number.isInteger(Number(options.shift));
  if (!numShift) {
    throw Error(`shift must be integer`);
  }

  try {
    await fs.promises.access(options.input, fs.constants.F_OK);
  } catch (error) {
    throw Error(`input file not found or inaccessible`);
  }
  try {
    await fs.promises.access(options.output, fs.constants.F_OK);
  } catch (error) {
    throw Error(`output file not found or inaccessible`);
  }
  return options;
};

export { checkOptions };
