const { MongoMemoryServer } = require("mongodb-memory-server");

module.exports = async () => {
  const mongoServer = await MongoMemoryServer.create({
    binary: {
      downloadDir: "./.mongodb-binaries",
      skipMD5: true,
    },
    spawnTimeoutMS: 30000,
  });

  global.__MONGO_URI__ = mongoServer.getUri();
  global.__MONGO_SERVER__ = mongoServer;
};
