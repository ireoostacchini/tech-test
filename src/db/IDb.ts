import FilesRepository from "./FilesRepository";
import DbConnectionManager from "./dbConnectionManager";

interface IDb {
  dbConnectionManager: DbConnectionManager;

  filesRepository(): FilesRepository;
}

export default IDb;
