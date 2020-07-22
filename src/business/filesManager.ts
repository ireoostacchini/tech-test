import FileInfo from "../entities/FileInfo";
import FileInfoDto from "../dto/FileInfoDto";
import Db from "../db";

class FilesManager {
  private _db: Db;

  constructor(db: Db) {
    this._db = db;
  }
  async getFiles() {
    const entities = await this._db.filesRepository().getFiles();

    const dtos = entities.map((entity: FileInfo) => {
      return new FileInfoDto(entity.uuid, entity.name);
    });

    return { files: dtos };
  }
}

export default FilesManager;
