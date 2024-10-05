const express = require("express");
// const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

const app = express();
app.use(express.json());

const posts = {};

app.get("/getData", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  console.log("req.body", req.body);
  const title = req.body.title;
  if (!title) {
    res.status(400).send({ error: "title is required" });
  }

  console.log("title: ", title);

  posts[id] = {
    id,
    title,
  };

  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
