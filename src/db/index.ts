import FilesRepository from "./FilesRepository";
import DbConnectionManager from "./dbConnectionManager";
import IDb from "./IDb";

class Db implements IDb {
  private _dbConnectionManager: DbConnectionManager;

  constructor(dbConnectionManager: DbConnectionManager) {
    this._dbConnectionManager = dbConnectionManager;
  }

  filesRepository(): FilesRepository {
    return new FilesRepository(this._dbConnectionManager);
  }
}
export default Db;
