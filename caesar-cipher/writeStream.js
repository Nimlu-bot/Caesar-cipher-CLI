import fs from "fs";

const writeStream = (output) => {
  return output ? fs.createWriteStream(output, { flags: "a" }) : process.stdout;
};

export { writeStream };
