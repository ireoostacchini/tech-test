import FilesController from "./FilesController";
import Business from "../business";

class Controllers {
  registerRoutes(router: any, business: Business) {
    new FilesController().registerRoutes(router, business);
  }
}

export default Controllers;
