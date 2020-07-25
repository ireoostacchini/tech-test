import FilesRepository from "./FilesRepository";
import DbConnectionManager from "./DbConnectionManager";
import IDb from "./IDb";
import { injectable, inject } from "inversify";
import { TYPES } from "../constants/types";

@injectable()
class Db implements IDb {
  dbConnectionManager: DbConnectionManager;

  constructor(
    @inject(TYPES.DbConnectionManager) dbConnectionManager: DbConnectionManager
  ) {
    this.dbConnectionManager = dbConnectionManager;
  }

  filesRepository(): FilesRepository {
    return new FilesRepository(this.dbConnectionManager);
  }
}
export default Db;
