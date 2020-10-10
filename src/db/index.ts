import FilesRepository from "./filesRepository";
import DbConnectionManager from "./dbConnectionManager";
import IDb from "./IDb";
import { injectable, inject } from "inversify";
import { TYPES } from "../constants/types";
import IDbConnectionManager from "./IDbConnectionManager";

@injectable()
class Db implements IDb {
  dbConnectionManager: IDbConnectionManager;

  constructor(
    @inject(TYPES.IDbConnectionManager) dbConnectionManager: IDbConnectionManager
  ) {
    this.dbConnectionManager = dbConnectionManager;
  }

  filesRepository(): FilesRepository {
    return new FilesRepository(this.dbConnectionManager);
  }
}
export default Db;
