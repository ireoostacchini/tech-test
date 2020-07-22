import express from "express";
import methodOverride from "method-override";
import bodyParser from "body-parser";
import controllers from "./controllers";

const router = express.Router();

const expressSetup = (app: any) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use("/api", router);

  controllers.registerRoutes(router);

  return app;
};

export default expressSetup;
