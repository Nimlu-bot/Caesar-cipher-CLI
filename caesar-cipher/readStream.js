import fs from 'fs';

const readStream = (input) => (input ? fs.createReadStream(input) : process.stdin);

export { readStream };
