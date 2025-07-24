const request = require("supertest");
const app = require("../src/app");
// jest.setTimeout(30000);

describe("📄 GET /api/documents", () => {
  it("should return 200 and a list of documents", async () => {
    const res = await request(app).get("/api/documents");

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.msg).toBe("Documents fetched successfully");
  });
});
