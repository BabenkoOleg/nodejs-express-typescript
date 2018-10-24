import bluebird from "bluebird";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import logger from "./util/logger";
import { MONGODB_URI } from "./util/secrets";

mongoose.Promise = bluebird;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => logger.debug("MongoDB connection established"))
  .catch((error) => logger.error(`MongoDB connection error: ${error}`));

const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!!");
});

export default app;
