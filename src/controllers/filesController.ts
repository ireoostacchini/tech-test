import express from "express";

const filesController = (() => {
  const registerRoutes = (router: any, business: any, db: any) => {
    router.get(
      "/files",
      async (req: express.Request, res: express.Response, next: any) => {
        try {
          const fileManager = business.filesManager(db);

          res.json(await fileManager.getFiles());
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
