import FilesManager from "./FilesManager";
import Db from "../db";

class Business {
  private _db: Db;

  constructor(db: Db) {
    this._db = db;
  }

  filesManager() {
    return new FilesManager(this._db);
  }
}
export default Business;
