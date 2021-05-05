/* eslint-disable import/extensions */
import { Transform } from 'stream';
import { cipher } from './cipher.js';

const transformSteam = (shift, action) =>
  new Transform({
    transform(chunk, _, callback) {
      this.push(cipher(chunk, shift, action));
      callback();
    },
  });

export { transformSteam };
