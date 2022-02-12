const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connection");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./route/feed"));
const port = process.env.PORT || 5000;
connectDB();

app.get("/", (req, res) => {
  res.send("Hii welcome to the server");
});

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
