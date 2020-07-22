import express from "express";
import methodOverride from "method-override";
import bodyParser from "body-parser";

const router = express.Router();

const expressSetup = (app: any) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use("/api", router);

  // define a route handler for the default home page
  app.get("/", (req: express.Request, res: express.Response) => {
    res.send({ greeting: "Hello world!" });
  });

  return app;
};

export default expressSetup;
