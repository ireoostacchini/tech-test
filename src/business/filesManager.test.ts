import FilesManager from "./FilesManager";
import Db from "../db";
import FileEntity from "../entities/FileEntity";

const data: FileEntity[] = [
  { id: "12345", name: "hi", type: "mp4", userId: "xyz" },
  { id: "67890", name: "hi again", type: "wav", userId: "abcd" },
];
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
