const request = require("supertest");
const conn = require("../config/config.json");
const app = require("../index.js");

let authorizationToken;
let UserData;

describe("APIs Testing...", () => {
  test("Create User API...", async () => {
    const res = await request(app).post("/api/user").send({
      user_name: "Testing User",
      user_email: "testing@mailinator.com",
      user_admin: true,
      user_password: "TestingPwd",
      user_address: "Jakarta",
      user_phone: "9029109",
      user_token: true,
    });
    UserData = res.body.data;
    expect(res.statusCode).toBe(200);
  });

  test("Login User API...", async () => {
    const res = await request(app).post("/api/user/login").send({
      email: "testing@mailinator.com",
      password: "TestingPwd",
    });
    authorizationToken = res.body.data.encryptedToken;
    expect(res.statusCode).toBe(200);
  });

  test("Get All Users API...", async () => {
    const res = await request(app)
      .get("/api/users")
      .set("authorization", authorizationToken);
    expect(res.statusCode).toBe(200);
  });

  test("Find one user by Id API...", async () => {
    const res = await request(app)
      .get(`/api/users?id=${UserData.id}`)
      .set("authorization", authorizationToken);
    expect(res.statusCode).toBe(200);
  });
});

afterAll(async () => {
  try {
    await conn.dbDisconnect();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
