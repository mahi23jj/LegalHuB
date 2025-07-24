// test-utils/setupTestApp.js
const express = require("express");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;

async function setupTestApp(routePath, routes) {
  mongoServer = await MongoMemoryServer.create({
    instance: {
      dbName: "testdb",
    },
    binary: {
      // Optional: increases timeout if download is slow
      downloadDir: "./.mongodb-binaries",
      skipMD5: true,
    },
    // Increase startup timeout
    spawnTimeoutMS: 30000, // 30 seconds
  });

  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri);

  const app = express();
  app.use(express.json());
  app.use(routePath, routes);

  return app;
}

async function tearDownTestApp() {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
}

module.exports = {
  setupTestApp,
  tearDownTestApp,
};
