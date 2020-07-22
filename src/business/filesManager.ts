import FileEntity from "../entities/FileEntity";
import FileDto from "../dto/FileDto";
import Db from "../db";

class FilesManager {
  private _db: Db;

  constructor(db: Db) {
    this._db = db;
  }
  async getFiles() {
    const entities = await this._db.filesRepository().getFiles();

    const dtos = entities.map((entity: FileEntity) => {
      return new FileDto(
        entity.id,
        entity.name,
        entity.type,
        entity.userId,
        entity.duration,
        entity.size
      );
    });

    return { files: dtos };
  }
}

export default FilesManager;
