const express = require("express");
const db = require("./db");

const router = express.Router();

// Store a Like event
router.post("/like", async (req, res) => {
  const { user_id, content_id } = req.body;

  try {
    await db.storeLikeEvent(user_id, content_id);
    res.status(200).send(`User ${user_id} liked the post ${content_id}`);
  } catch (error) {
    console.error("Error storing Like event:", error);
    res.sendStatus(500);
  }
});

// Check if a user has liked a particular content
router.get("/hasLiked", async (req, res) => {
  const { user_id, content_id } = req.query;

  try {
    const hasLiked = await db.hasUserLikedContent(user_id, content_id);
    console.log(hasLiked);
    res.json({ hasLiked });
  } catch (error) {
    console.error("Error checking Like status:", error);
    res.sendStatus(500);
  }
});

// Get the total likes for a content
router.get("/totalLikes", async (req, res) => {
  const { content_id } = req.query;

  try {
    const totalLikes = await db.getTotalLikesForContent(content_id);
    res.json({ totalLikes });
  } catch (error) {
    console.error("Error retrieving total Likes:", error);
    res.sendStatus(500);
  }
});

module.exports = router;
