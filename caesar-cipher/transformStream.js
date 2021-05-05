import { Transform } from 'stream';
import { callbackify } from 'util';
import { cipher } from './cipher.js';

const transformSteam = (shift, action) => {
  return new Transform({
    transform(chunk, _, callback) {
      this.push(cipher(chunk, shift, action));
      callback();
    },
  });
};

export { transformSteam };
