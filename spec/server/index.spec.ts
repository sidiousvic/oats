/**
 * @jest-environment node
 */
const request = require("supertest");
const app = require("../../server/server.js");

describe("The root path", () => {
  test("Should respond to GET", async () => {
    return request(app)
      .get("/oats/notes")
      .expect(200);
  });
});
