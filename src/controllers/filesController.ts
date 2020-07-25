import express from "express";
import IBusiness from "../business/IBusiness";

class FilesController {
  registerRoutes(router: any, business: IBusiness) {
    router.get(
      "/files",
      async (req: express.Request, res: express.Response, next: any) => {
        try {
          const result = await business.filesManager().getFiles();

          res.json(result);
        } catch (err) {
          next(err);
        }
      }
    );
  }
}

export default FilesController;
