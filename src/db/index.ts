import FilesRepository from "./FilesRepository";
import DbConnectionManager from "./dbConnectionManager";
import IDb from "./IDb";
import { injectable, inject } from "inversify";

@injectable()
class Db implements IDb {
  dbConnectionManager: DbConnectionManager;

  constructor(
    @inject("DbConnectionManager") dbConnectionManager: DbConnectionManager
  ) {
    this.dbConnectionManager = dbConnectionManager;
  }

  filesRepository(): FilesRepository {
    return new FilesRepository(this.dbConnectionManager);
  }
}
export default Db;
