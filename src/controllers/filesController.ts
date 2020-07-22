import express from "express";

const filesController = (() => {
  const registerRoutes = (router: any, business: any, db: any) => {
    router.get(
      "/files",
      async (req: express.Request, res: express.Response, next: any) => {
        try {
          const fileManager = business.filesManager(db);

          const result = await fileManager.getFiles();

          res.json(result);
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
