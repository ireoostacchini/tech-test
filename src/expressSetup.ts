import express from "express";
import methodOverride from "method-override";
import bodyParser from "body-parser";
import controllers from "./controllers";
import business from "./business";
import db from "./db";

const router = express.Router();

const expressSetup = (app: any) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use("/api", router);

  controllers.registerRoutes(router, business, db);

  return app;
};

export default expressSetup;
