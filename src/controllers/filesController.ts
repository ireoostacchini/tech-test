import express from "express";

import business from "../business";

const filesController = (() => {
  const registerRoutes = (router: any) => {
    router.get(
      "/files",
      async (req: express.Request, res: express.Response, next: any) => {
        try {
          res.json(await business.filesManager().getFiles());
        } catch (err) {
          next(err);
        }
      }
    );
  };

  return {
    registerRoutes,
  };
})();

export default filesController;
