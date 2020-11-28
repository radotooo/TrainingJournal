const supertest = require("supertest");

const app = require("../../app");

describe("GET /api/v1/workout", () => {
    test("should respond with an array of workouts", async () => {
        const response = await supertest(app)
            .get("/api/v1/workout")
            .expect("Content-Type", /json/)
            .expect(200);

        expect(response.body.length).toBeGreaterThan(0);
    });
});
