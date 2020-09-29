const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
const routers = require("./router");

const app = express();

dotenv.config();
connectDB();
app.use(express.json());
app.use("/api", routers);
app.get("/", (req, res) => {
  res.json({
    message: "endpoint working successfully",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}`));
