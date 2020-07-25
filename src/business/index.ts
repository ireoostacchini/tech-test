import { injectable, inject } from "inversify";
import "reflect-metadata";

import FilesManager from "./FilesManager";
import Db from "../db";
import IBusiness from "./IBusiness";
import IDb from "../db/IDb";

@injectable()
class Business implements IBusiness {
  private _db: Db;

  constructor(@inject("IDb") db: IDb) {
    this._db = db;
  }

  filesManager(): FilesManager {
    return new FilesManager(this._db);
  }
}
export default Business;
