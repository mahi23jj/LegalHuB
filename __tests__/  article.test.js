const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

const articleRoutes = require("../src/routes/article.routes");

let app;
let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  await mongoose.connect(mongoUri, {
    // ✅ remove deprecated options
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });

  app = express();
  app.use(express.json());
  app.use("/api/articles", articleRoutes);
}, 30000);

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe("📄 GET /api/articles", () => {
  it("should return 200 and return empty data list", async () => {
    const res = await request(app).get("/api/articles");

    // console.log("RESPONSE BODY:", res.body);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("success", true);
    expect(res.body).toHaveProperty("data");
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.msg).toBe("Articles fetched successfully");
  });
});
