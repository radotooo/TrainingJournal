const supertest = require("supertest");

const app = require("./app");

describe("App", () => {
    test("should respond with an array of users", async () => {
        const response = await supertest(app)
            .get("/")
            .expect("Content-Type", /json/)
            .expect(200);

        expect(response.body.message).toEqual("Hello World");
    });
});
