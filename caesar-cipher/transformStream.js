import { Transform } from 'stream';
import { cipher } from './cipher.js';

export const transformSteam = (shift, action) =>
  new Transform({
    transform(chunk, _, callback) {
      this.push(cipher(chunk, shift, action));
      callback();
    },
  });
