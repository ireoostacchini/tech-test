import FilesRepository from "./FilesRepository";
import DbConnectionManager from "./DbConnectionManager";

interface IDb {
  dbConnectionManager: DbConnectionManager;

  filesRepository(): FilesRepository;
}

export default IDb;
