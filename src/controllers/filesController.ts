import express from "express";
import Business from "../business";

class FilesController {
  registerRoutes(router: any, business: Business) {
    router.get(
      "/files",
      async (req: express.Request, res: express.Response, next: any) => {
        try {
          const result = await business.filesManager.getFiles();

          //   res.json({ Q: "QQ" });
          res.json(result);
        } catch (err) {
          next(err);
        }
      }
    );
  }
}

export default FilesController;
