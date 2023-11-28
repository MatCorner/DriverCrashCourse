import { Router } from "express";
import {
  getPracticeQuestions,
  addPracticeQuestion,
  editPracticeQuestion,
  deletePracticeQuestion,
} from "../controllers/practiceQuestions.js";

import { verifyToken, isAdmin } from "../middlewares/auth.js";

const router = Router();

router.get("/", [verifyToken, isAdmin], async function (_req, res) {
  try {
    const practiceQuestions = await getPracticeQuestions();
    res.send(practiceQuestions);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

router.post("/", [verifyToken, isAdmin], async function (req, res) {
  try {
    const newPracticeQuestion = await addPracticeQuestion(req.body);
    res.send(newPracticeQuestion);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

router.put("/:_id", [verifyToken, isAdmin], async function (req, res) {
  try {
    const documentId = req.params._id;
    const updatedPracticeQuestion = await editPracticeQuestion(
      documentId,
      req.body
    );
    res.send(updatedPracticeQuestion);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

router.delete("/:_id", [verifyToken, isAdmin], async function (req, res) {
  try {
    const documentId = req.params._id;
    const deleteResponse = await deletePracticeQuestion(documentId);
    res.send(deleteResponse);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

export default router;
