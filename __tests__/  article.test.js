const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user.model");
const Article = require("../src/models/article.model");

describe("📄 Articles API Testing", () => {
  let testUser;
  let createdArticle;

  beforeAll(async () => {
    // console.log("🚀 Inserting test user...");
    testUser = await User.create({
      name: "Test User",
      email: "testuser@example.com",
      password: "testpass123",
      role: "user",
    });
    // console.log("✅ User inserted:", testUser.email);
  });

  afterAll(async () => {
    // console.log("🧹 Cleaning up DB...");
    await User.deleteMany({});
    await Article.deleteMany({});
    // console.log("✅ Cleanup done");
  });

  it("✅ should create an article using the user's ID", async () => {
    // console.log("📤 Creating article...");
    const res = await request(app)
      .post("/api/articles")
      .set("Accept", "application/json")
      .send({
        title: "Test Article Title",
        content: "This is the content of the test article.",
        tags: ["testing", "article"],
        author: testUser._id,
      });

    // console.log("📥 Response status:", res.statusCode);
    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.title).toBe("Test Article Title");

    const article = await Article.findOne({ title: "Test Article Title" });
    // console.log("🔍 Created article:", article);
    createdArticle = article;
  });

  it("📥 should fetch all articles and include the one just created", async () => {
    // console.log("📤 Fetching all articles...");
    const res = await request(app)
    .get("/api/articles")
    .set("Accept", "application/json");

    // console.log("📥 Fetched:", res.body.data.map(a => a.title));
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.msg).toBe("Articles fetched successfully");

    const found = res.body.data.find((a) => a.title === "Test Article Title");
    expect(found).toBeDefined();
    expect(found.content).toBe("This is the content of the test article.");
    expect(found.author.email).toBe("testuser@example.com");
  });


  it("📥 should fetch a single article by ID", async () => {
    // console.log("📤 Fetching article by ID...");
    const res = await request(app)
      .get(`/api/articles/${createdArticle._id}`)
      .set("Accept", "application/json");

    // console.log("📥 Fetched article:", res.body.data.title);
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.title).toBe("Test Article Title");
  });

  it("📤 should update an article by owner", async () => {
    // console.log("📤 Updating article...");
    const res = await request(app)
      .put(`/api/articles/${createdArticle._id}`)
      .set("Accept", "application/json")
      .send({ author: testUser._id })  // Ensure author is set
      .send({
        title: "Updated Article Title",
        content: "This is the updated content of the test article.",
      });
    // console.log("📥 Update response:", res.body);
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.title).toBe("Updated Article Title");
  });


  it("📤 should delete an article by owner", async () => {
    // console.log("📤 Deleting article...");
    const res = await request(app)
      .delete(`/api/articles/${createdArticle._id}`)
      .set("Accept", "application/json")
      .send({ author: testUser._id });  // Ensure author is set

    // console.log("📥 Delete response:", res.body);
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.msg).toBe("Article deleted successfully");

    const deletedArticle = await Article.findById(createdArticle._id);
    expect(deletedArticle).toBeNull();
  });
});
