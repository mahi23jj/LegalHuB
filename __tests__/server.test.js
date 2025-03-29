const request = require("supertest"); // Supertest for API testing
const app = require("../src/app.js");// Import your Express app

describe("API Endpoints Testing", () => {

    // ✅ Test if server is running
    test("GET / should return Welcome message", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("Welcome to the API!");
    });

});
