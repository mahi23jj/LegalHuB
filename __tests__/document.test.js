const request = require("supertest");
const app = require("../src/app");
const Document = require("../src/models/document.model");

describe("📄 Documents API", () => {
  const mockDocument = {
    title: "Test Scheme",
    description: "This is a test government scheme.",
    downloadLink: "https://example.com/download",
    applyLink: "https://example.com/apply",
    state: "Delhi",
    department: "Education",
    guidelines: "Follow these test guidelines",
    requiredDocuments: ["Aadhar Card", "Income Certificate"],
  };

  let createdDocument;

  beforeAll(async () => {
    // console.log("📦 Creating mock document...");
    createdDocument = await Document.create(mockDocument);
    // console.log("✅ Mock document created:", createdDocument.toObject());
  });

  afterAll(async () => {
    // console.log("🧹 Cleaning up test documents...");
    await Document.deleteMany({});
    // console.log("✅ Database cleanup complete.");
  });

  it("✅ should return 200 and list all documents", async () => {
    // console.log("📤 Sending GET request to /api/documents...");
    const res = await request(app).get("/api/documents");

    // console.log("📥 Response status:", res.statusCode);
    // console.log("📥 Response body:", res.body);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.msg).toBe("Documents fetched successfully");

    const found = res.body.data.find(doc => doc._id === String(createdDocument._id));
    // console.log("🔍 Found document in list:", found);
    expect(found).toBeDefined();
  });

  it("✅ should return 200 and the document by ID", async () => {
    // console.log(`📤 Sending GET request to /api/documents/${createdDocument._id}`);
    const res = await request(app)
    .get(`/api/documents/${createdDocument._id}`)
    .set("Accept", "application/json");

    // console.log("📥 Response status:", res.statusCode);
    // console.log("📥 Response body:", res.body);
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.title).toBe(mockDocument.title);
  });

  it("✅ should create a new document", async () => {
    const newDoc = {
      title: "New Scheme",
      description: "Another description",
      downloadLink: "https://example.com/new-download",
      applyLink: "https://example.com/new-apply",
      state: "Maharashtra",
      department: "Health",
      guidelines: "New guidelines",
      requiredDocuments: ["PAN Card", "Address Proof"],
    };

    // console.log("📤 Sending POST request to /api/documents with:", newDoc);
    const res = await request(app)
      .post("/api/documents")
      .send(newDoc)
      .set("Accept", "application/json");

    // console.log("📥 Response status:", res.statusCode);
    // console.log("📥 Response body:", res.body);

    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.title).toBe("New Scheme");
  });

  it("✅ should update a document", async () => {
    const updatedData = { title: "Updated Scheme Title" };

    // console.log(`📤 Sending PUT request to /api/documents/${createdDocument._id} with:`, updatedData);
    const res = await request(app)
      .put(`/api/documents/${createdDocument._id}`)
      .send(updatedData);

    // console.log("📥 Response status:", res.statusCode);
    // console.log("📥 Response body:", res.body);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.title).toBe("Updated Scheme Title");
  });

  it("✅ should delete the document", async () => {
    // console.log(`🗑️ Sending DELETE request to /api/documents/${createdDocument._id}`);
    const res = await request(app).delete(`/api/documents/${createdDocument._id}`);

    // console.log("📥 Response status:", res.statusCode);
    // console.log("📥 Response body:", res.body);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.msg).toBe("Document deleted successfully");

    const check = await Document.findById(createdDocument._id);
    // console.log("🔎 Checking if document still exists in DB:", check);
    expect(check).toBeNull();
  });
});
