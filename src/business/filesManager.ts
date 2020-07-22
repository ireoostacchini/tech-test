import FileInfoDto from "../dto/FileInfoDto";

const filesManager = () => {
  // ## use async/await to catch errors (ie avoid callbacks)
  const getFiles = async () => {
    // const models = await db.filesRepository.getFiles();

    const models = [
      {
        uuid: "q",
        name: "qqqq",
      },
      {
        uuid: "z",
        name: "zzz",
      },
    ];

    const dtos = models.map((model) => {
      return new FileInfoDto(model.uuid, model.name);
    });

    return { files: dtos };
  };

  return {
    getFiles,
  };
};

export default filesManager;
