const request = require("supertest");
const app = require("../src/app");
// jest.setTimeout(30000);

describe("📄 GET /api/articles", () => {
  it("should return 200 and return empty data list", async () => {
    const res = await request(app).get("/api/articles");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("success", true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.msg).toBe("Articles fetched successfully");
  });
});
