import FileInfo from "../entities/FIleInfo";
import dbConnectionManager from "./dbConnectionManager";

class FilesRepository {
  async getFiles() {
    const knex = dbConnectionManager.getKnex();
    const files = await knex("files");

    const result = files.map((file) => {
      return new FileInfo(file.uuid, file.name);
    });

    return result;
  }
}

export default FilesRepository;
