import { Transform } from 'stream';
import { cipher } from './cipher.js';

const transformSteam = (shift, action) => {
  return new Transform({
    transform(chunk) {
      this.push(cipher(chunk, shift, action));
    },
  });
};

export { transformSteam };
