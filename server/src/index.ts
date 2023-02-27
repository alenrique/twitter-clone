import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/tweets", async (req, res) => {
  const tweets = await prisma.tweet.findMany({
    orderBy: { createdAt: "desc" },
  });

  res.json(tweets);
});

app.post("/tweets", async (req, res) => {
  const { text, username } = req.body

  const tweet = await prisma.tweet.create({
    data: {
      createdAt: new Date(),
      text,
      username,
    },
  });

  return res.json(tweet);
});

app.get("/tweets/:id", async (req, res) => {
  const id = req.params.id;
  const todo = await prisma.tweet.findUnique({
    where: { id },
  });

  return res.json(todo);
});

app.delete("/tweets/:id", async (req, res) => {
  const id = req.params.id;
  await prisma.tweet.delete({
    where: { id },
  });

  return res.send({ status: "ok" });
});

app.get("/", async (req, res) => {
  res.send(
    `
  <h1>Todo REST API</h1>
  <h2>Available Routes</h2>
  <pre>
    GET, POST /todos
    GET, PUT, DELETE /todos/:id
  </pre>
  `.trim(),
  );
});

app.listen(Number(port), "0.0.0.0", () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
