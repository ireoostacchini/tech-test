import FilesRepository from "./FilesRepository";

const db = (() => {
  return { filesRepository: new FilesRepository() };
})();

export default db;
