import express from "express";
import registerRouts from "./routes/registerR.js";
import messagesRouts from "./routes/messagesR.js";
import loginRouts from "./routes/loginR.js";
import { config } from "dotenv";
import {connect}from "./db/mongodb.js"

config();
const app = express();
app.use(express.json());
connect()


const port = process.env.PORT;
app.get("/health", (req, res) => {
  res.json({ ok: true });
});
app.use("/register",registerRouts)
app.use("/login", loginRouts);
app.use("/messages", messagesRouts);

app.listen(port, () => {
  console.log(`server runing on http://localhost:${port}`);
});
