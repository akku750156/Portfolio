const express = require("express");
const router = express.Router();
const Feedback = require("../model/feedbackSchema");
require("../db/connection");

router.post("/feed", async (req, res) => {
  const { content } = req.body;
  if (!content) {
    return res.status(422).json({ message: "Please fill the field" });
  }
  try {
    const feed = new Feedback({ content });
    const feedAdd = await feed.save();
    if (feedAdd) {
      console.log(feedAdd);
      res
        .status(200)
        .json({ message: "feedback added succesfully into the Database" });
    } else {
      res.status(404).json({ error: "feedback NOT added" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/feedbacks", async (req, res) => {
  let content = [];
  try {
    const feedbacks = await Feedback.find({});
    if (feedbacks) {
      feedbacks.map((feedback) => {
        content = [...content, feedback];
      });
      //   console.log(feedbacks);
      //   res.status(200).json({ message: feedbacks });
      res.send(content);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
