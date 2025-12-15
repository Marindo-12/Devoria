import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const COMMENTS_FILE = "comments.json";

if (!fs.existsSync(COMMENTS_FILE)) fs.writeFileSync(COMMENTS_FILE, "[]");

app.post("/comments", (req, res) => {
  const data = req.body;
  const existing = JSON.parse(fs.readFileSync(COMMENTS_FILE));
  existing.push({ ...data, timestamp: new Date() });
  fs.writeFileSync(COMMENTS_FILE, JSON.stringify(existing, null, 2));
  res.send({ status: "ok" });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
