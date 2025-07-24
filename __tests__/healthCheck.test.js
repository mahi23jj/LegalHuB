const request = require("supertest");
const app = require("../src/app"); // your Express app

describe("🔍 Health Check Endpoint", () => {
    it("should return 200 OK with health data", async () => {
        const res = await request(app).get("/api/healthcheck");

        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.data).toHaveProperty("status", "OK");
        expect(res.body.data).toHaveProperty("uptime");
        expect(res.body.data).toHaveProperty("timestamp");
    });

    it("should return valid JSON structure", async () => {
        const res = await request(app).get("/api/healthcheck");

        expect(res.body).toHaveProperty("success");
        expect(res.body).toHaveProperty("data");
        expect(res.body).toHaveProperty("msg");
    });
});
