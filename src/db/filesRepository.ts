import FileInfo from "../entities/FileEntity";
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
      return new FileInfo(
        file.id,
        file.name,
        file.type,
        file.userId,
        file.duration,
        file.size
      );
    });

    return result;
  }
}

export default FilesRepository;
