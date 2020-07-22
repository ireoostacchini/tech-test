import express from "express";

const homeController = (() => {
  const registerRoutes = (router: any) => {
    router.get(
      "/",
      (req: express.Request, res: express.Response, next: any) => {
        try {
          res.json({ q: "w" });
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

export default homeController;
