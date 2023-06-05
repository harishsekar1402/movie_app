import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on("error", (errorMessage) => console.log(errorMessage));
db.once("open", () => console.log("Connection established"));

app.use("/api/v1/movie", movie);
app.get("/", (req, res) => {
  res.send("working");
});

app.listen(PORT, () => {
  console.log(`workign in http://localhost:${PORT}`);
});
