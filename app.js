import { checkOptions } from "./utils/checker.js";
import { parseArguments } from "./utils/parser.js";
import { errorHandler } from "./utils/errorHandler.js";
import { transformPipeline } from "./utils/transformPipeline.js";

checkOptions(parseArguments())
  .then((options) => transformPipeline(options))
  .catch((error) => errorHandler(error));
