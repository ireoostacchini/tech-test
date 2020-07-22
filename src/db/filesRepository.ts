import FileInfo from "../entities/FIleInfo";
import DbConnectionManager from "./dbConnectionManager";

class FilesRepository {
  private _dbConnectionManager: DbConnectionManager;

  constructor(dbConnectionManager: DbConnectionManager) {
    this._dbConnectionManager = dbConnectionManager;
  }

  async getFiles() {
    const knex = this._dbConnectionManager.getKnex();
    const files = await knex("files");

    const result = files.map((file: any) => {
      return new FileInfo(file.uuid, file.name);
    });

    return result;
  }
}

export default FilesRepository;
