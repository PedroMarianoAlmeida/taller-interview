import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3001, () => {
  console.log("Server is running on port 3000");
});

app.get("/error", (req, res) => {
  res.status(500).json({ message: "error" });
});

const transactions = [{ transaction: "Test 1", amount: 5 }];

app.get("/", (req, res) => {
  res.json({ transactions });
});

app.post("/", (req, res) => {
  console.log({ test: req.body });
  const { name, amount } = req.body;
  transactions.push({ transaction: name, amount: Number(amount) });
  console.log({ transactions });
  res.json({ message: "success" });
});
