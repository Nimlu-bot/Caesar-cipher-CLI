import fs from "fs";

const ENCODE = "encode";
const DECODE = "decode";

const checkOptions = async ({ input, output, shift, action }) => {
  const isShiftEmpty = ["-a", "-i", "-o"].includes(shift);

  if (shift === undefined || isShiftEmpty) {
    throw Error("required option -s or --shift <num> not specified");
  }

  if (!action || action === true) {
    throw new Error("required option -a or --action <string> not specified");
  }

  if (action.toLowerCase() !== ENCODE && action.toLowerCase() !== DECODE) {
    throw Error(`action must be ${ENCODE} or ${DECODE}`);
  }

  const numShift = Number.isInteger(Number(shift));

  if (!numShift) {
    throw Error(`shift must be integer`);
  }

  if (input === true || output === true) {
    throw Error(`an empty file path`);
  }

  if (input) {
    try {
      await fs.promises.access(input, fs.constants.F_OK);
    } catch (error) {
      throw Error(`input file not found or inaccessible`);
    }
  }

  if (output) {
    try {
      await fs.promises.access(output, fs.constants.F_OK);
    } catch (error) {
      throw Error(`output file not found or inaccessible`);
    }
  }

  return { input, output, shift, action };
};

export { checkOptions };
