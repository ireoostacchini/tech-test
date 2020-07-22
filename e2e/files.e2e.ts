/* eslint-disable no-undef */
const axios = require("axios").default;

describe("files endpoint", () => {
  it("returns a list of files", async (done) => {
    const result = await axios.get(`${process.env.BASE_URL}/files`);

    expect(result.status).toEqual(200);
    expect(result.data.files.length).toBeGreaterThan(0);

    done();
  });
});
