import FilesManager from "./FilesManager";
import Db from "../db";
import FileInfo from "../entities/FileInfo";

const data = [new FileInfo("12345", "hi"), new FileInfo("98765", "hi again")];
const mock = jest.fn((x) => data);

jest.mock("../db/FilesRepository", () => {
  return jest.fn().mockImplementation(() => {
    return { getFiles: mock };
  });
});

describe("FileManager", () => {
  it("can get files", async () => {
    const filesManager = new FilesManager(new Db(null));

    const result = await filesManager.getFiles();

    expect(result.files).toEqual(data);
  });
});
