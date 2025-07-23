const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const Document = require("../src/models/document.model");
const documentRoutes = require("../src/routes/document.routes");

let app;
let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  await mongoose.connect(mongoUri);
  
  app = express();
  app.use(express.json());
  app.use("/api/documents", documentRoutes);
}, 30000); // ⏱️ Set timeout to 30 seconds


afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe("📄 GET /api/documents", () => {
  it("should return 200 and a list of documents", async () => {

    const res = await request(app).get("/api/documents");

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.msg).toBe("Documents fetched successfully");
  });
});
