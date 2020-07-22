import express from "express";

const router = express.Router();

const expressSetup = (app: any) => {
  app.use("/api", router);

  // define a route handler for the default home page
  app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello world!");
  });

  return app;
};

export default expressSetup;
