import FilesManager from "./FilesManager";
import Db from "../db";
import FileInfo from "../entities/FileInfo";

const data = [new FileInfo("12345", "hi"), new FileInfo("98765", "hi again")];
const mock = jest.fn((x) => data);
const db = new Db(null);

jest.mock("../db/FilesRepository", () => {
  return jest.fn().mockImplementation(() => {
    return { getFiles: mock };
  });
});

describe("FileManager", () => {
  test("can get files", async () => {
    const filesManager = new FilesManager(db);

    const result = await filesManager.getFiles();

    expect(result.files).toEqual(data);
  });
});
