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
      const dto: FileDto = {
        id: entity.id,
        name: entity.name,
        type: entity.type,
        userId: entity.userId,
        duration: entity.duration,
        size: entity.size,
      };

      return dto;
    });

    return { files: dtos };
  }
}

export default FilesManager;
