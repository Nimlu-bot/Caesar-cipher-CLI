import { pipeline } from 'stream';
import { HandleErrors } from './handleErrors.js';
import { readStream } from './readStream.js';
import { transformSteam } from './transformStream.js';
import { writeStream } from './writeStream.js';

const transformPipeline = (options) => {
  pipeline(
    readStream(options.input),
    transformSteam(options.shift, options.action),
    writeStream(options.output),
    (err) => HandleErrors(err)
  );
};

export { transformPipeline };
