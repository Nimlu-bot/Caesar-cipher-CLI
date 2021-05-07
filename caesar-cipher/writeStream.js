import fs from 'fs';

const writeStream = (output) => (output ? fs.createWriteStream(output, { flags: 'a' }) : process.stdout);

export { writeStream };
