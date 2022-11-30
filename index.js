import { PrismaClient } from "./generated/prisma-client/index.js";
import express from "express";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();
app.use(cors());

app.get("/feed", async (req, res) => {
  const questions = await prisma.question.findMany({
    include: { answers: true },
  });

  res.json(questions);
});

app.get("/question/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const question = await prisma.question.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    });

    res.status(200).json(question);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Something went wrong" });
  }
});

app.use(express.json());

app.post("/question", async (req, res) => {
  const { title, body } = req.body;
  try {
    await prisma.question.create({ data: { title, body } });
    res.status(200).json({ msg: "Question submitted successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Something went wrong" });
  }
});

app.post("/answer", async (req, res) => {
  const { questionId, text } = req.body;
  try {
    await prisma.answer.create({ data: { questionId, text } });
    res.status(200).json({ msg: "Answer submitted successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Something went wrong" });
  }
});

app.listen(80, () => {
  console.log("running");
});
