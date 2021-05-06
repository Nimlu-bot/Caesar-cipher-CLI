import fs from "fs";

const readStream = (input) => {
  return input ? fs.createReadStream(input) : process.stdin;
};

export { readStream };
