import express from "express";
import dotenv from "dotenv";
import connectDB from "../db";
import routers from "../router";

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
