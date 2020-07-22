import FileInfo from "../entities/FIleInfo";
import dbConnectionManager from "./dbConnectionManager";

const filesRepository = (() => {
  const knex = dbConnectionManager.getKnex();

  const getFiles = async () => {
    const files = await knex("files");

    const result = files.map((file) => {
      return new FileInfo(file.uuid, file.name);
    });

    return result;
  };

  return {
    getFiles,
  };
})();

export default filesRepository;
