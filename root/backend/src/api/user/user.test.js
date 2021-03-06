const supertest = require("supertest");

const app = require("../../app");

describe("GET /api/v1/user", () => {
    test("should respond with an array of users", async () => {
        const response = await supertest(app)
            .get("/api/v1/user")
            .expect("Content-Type", /json/)
            .expect(200);

        expect(response.body.length).toBeGreaterThan(0);
    });
});
