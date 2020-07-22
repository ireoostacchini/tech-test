import FilesRepository from "./FilesRepository";
import DbConnectionManager from "./dbConnectionManager";

class Db {
  private _dbConnectionManager: DbConnectionManager;

  constructor(dbConnectionManager: DbConnectionManager) {
    this._dbConnectionManager = dbConnectionManager;
  }

  filesRepository() {
    return new FilesRepository(this._dbConnectionManager);
  }
}
export default Db;
