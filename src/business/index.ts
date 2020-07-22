import FilesManager from "./FilesManager";

class Business {
  private _db: any;

  constructor(db: any) {
    this._db = db;
  }

  filesManager() {
    return new FilesManager(this._db);
  }
}
export default Business;
