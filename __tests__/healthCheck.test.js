const request = require("supertest");
const app = require("../src/app"); // Import Express app

describe("🔍 Health Check API", () => {
    it("✅ should return 200 OK with health status data", async () => {
        const res = await request(app).get("/api/healthcheck");

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("success", true);
        expect(res.body).toHaveProperty("data");

        const { status, uptime, timestamp } = res.body.data;

        expect(status).toBe("OK");
        expect(typeof uptime).toBe("number");
        expect(new Date(timestamp).toString()).not.toBe("Invalid Date");
    });

    it("✅ should return a valid JSON response structure", async () => {
        const res = await request(app).get("/api/healthcheck");

        expect(res.body).toEqual(
            expect.objectContaining({
                success: expect.any(Boolean),
                data: expect.any(Object),
                msg: expect.any(String),
            })
        );
    });
});
