import express from "express";
import methodOverride from "method-override";
import bodyParser from "body-parser";
import Controllers from "./Controllers";
import Db from "./Db";
import Business from "./business";
import DbConnectionManager from "./db/DbConnectionManager";
import container from "../inversify.config";
import IBusiness from "./business/IBusiness";
import IDb from "./db/IDb";

const router = express.Router();

const expressSetup = (app: any) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use("/api", router);

  var db = container.get<IDb>("IDb");
  var business = container.get<IBusiness>("IBusiness");

  // poor person's DI...
  const dbConfig = new DbConnectionManager();
  // const db = new Db(dbConfig);
  //const business = new Business(db);

  new Controllers().registerRoutes(router, business);

  return app;
};

export default expressSetup;
