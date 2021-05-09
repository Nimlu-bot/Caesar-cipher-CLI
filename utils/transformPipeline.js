import { pipeline } from "stream";
import { errorHandler } from "./errorHandler.js";
import { readStream } from "../streams/readStream.js";
import { transformSteam } from "../streams/transformStream.js";
import { writeStream } from "../streams/writeStream.js";

export const transformPipeline = ({input,output,shift,action}) => {
  pipeline(
    readStream(input),
    transformSteam(shift,action),
    writeStream(output),
    (error) => errorHandler(error)
  );
};
