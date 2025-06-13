import express from "express";

const app = express();

app.listen(3001, () => {
  console.log("Server is running on port 3000");
});

app.get("/error", (req, res) => {
  res.status(500).json({ message: "error" });
});

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});
