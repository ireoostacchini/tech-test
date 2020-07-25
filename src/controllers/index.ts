import FilesController from "./FilesController";
import Business from "../business";
import IBusiness from "src/business/IBusiness";

class Controllers {
  registerRoutes(router: any, business: IBusiness) {
    new FilesController().registerRoutes(router, business);
  }
}

export default Controllers;
