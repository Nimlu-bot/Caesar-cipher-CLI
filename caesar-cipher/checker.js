import fs from 'fs';
const ENCODE = 'encode';
const DECODE = 'decode';

const checkOptions = async (options) => {
  if (options.action.toLowerCase() !== ENCODE && options.action.toLowerCase() !== DECODE) {
    throw Error(`action must be ${ENCODE} or ${DECODE}`);
  }
  const numShift = parseInt(options.shift, 10);
  if (!numShift) {
    throw Error(`shift must be integer`);
  }

  const checkFile = async (files) => {
    await Promise.all(files.filter((file) => file).map((file) => fs.promises.access(file, fs.constants.F_OK)));
  };
  try {
    await checkFile([options.input, options.output]);
  } catch (error) {
    throw Error(`files not found`);
  }

  return options;
};

export { checkOptions };
