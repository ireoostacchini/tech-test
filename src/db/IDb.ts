import FilesRepository from "./FilesRepository";

interface IDb {
  filesRepository(): FilesRepository;
}

export default IDb;
