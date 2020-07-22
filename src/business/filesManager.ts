import FileInfo from "../entities/FileInfo";
import FileInfoDto from "../dto/FileInfoDto";

const filesManager = (db: any) => {
  const getFiles = async () => {
    const entities = await db.filesRepository.getFiles();

    const dtos = entities.map((entity: FileInfo) => {
      return new FileInfoDto(entity.uuid, entity.name);
    });

    return { files: dtos };
  };

  return {
    getFiles,
  };
};

export default filesManager;
