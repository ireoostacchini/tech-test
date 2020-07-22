import express from "express";
import methodOverride from "method-override";
import bodyParser from "body-parser";
import Controllers from "./Controllers";
import Db from "./Db";
import Business from "./business";
import DbConnectionManager from "./db/DbConnectionManager";

const router = express.Router();

const expressSetup = (app: any) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use("/api", router);

  //poor person's DI...
  const dbConfig = new DbConnectionManager();
  const db = new Db(dbConfig);
  const business = new Business(db);

  new Controllers().registerRoutes(router, business);

  return app;
};

export default expressSetup;
