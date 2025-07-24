const request = require("supertest");
const app = require("../src/app");
// jest.setTimeout(30000);


describe("GET /api/lawyers", () => {
    it("should render lawyers page with list of lawyers", async () => {
        const res = await request(app).get("/api/lawyers");

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("success", true);
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.msg).toBe("Lawyers fetched successfully");
    });
});