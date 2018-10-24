import express, { Request, Response } from "express";
import logger from "./util/logger";
import { MONGODB_URI } from "./util/secrets";

const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!!");
});

console.log(MONGODB_URI);

export default app;
