import express from "express";
import methodOverride from "method-override";
import bodyParser from "body-parser";
import Controllers from "./Controllers";
import container from "../inversify.config";
import IBusiness from "./business/IBusiness";
import { TYPES } from "./constants/types";

const router = express.Router();

const expressSetup = (app: any) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use("/api", router);

  const business = container.get<IBusiness>(TYPES.IBusiness);

  new Controllers().registerRoutes(router, business);

  return app;
};

export default expressSetup;
