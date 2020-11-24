const express = require("express");
const cors = require("cors");
const connect = require("./db");
require("dotenv").config();

const api = require("./api/index");

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

//routes
app.use("/api/v1", api);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
