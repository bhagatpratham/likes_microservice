const { Pool } = require("pg");
const config = require("./config.json");

const pool = new Pool(config.database);

// Store a Like event in the database
// async function storeLikeEvent(userId, contentId) {
//   const query = "INSERT INTO likes (user_id, content_id) VALUES ($1, $2)";
//   const values = [userId, contentId];
//   await pool.query(query, values);

//   const totalLikes = await getTotalLikesForContent(content_id);
//   if (totalLikes === 10) {
//     // Placeholder code for sending push notification
//     console.log(
//       `Sending push notification to user ${user_id} for reaching 100 likes on content ${content_id}`
//     );
//   }
// }
async function storeLikeEvent(user_id, content_id) {
  try {
    const query = "INSERT INTO likes (user_id, content_id) VALUES ($1, $2)";
    const values = [user_id, content_id];
    await pool.query(query, values);
    const totalLikes = await getTotalLikesForContent(content_id);
    if (totalLikes === 100) {
      console.log(
        `Sending push notification to user ${user_id} for reaching 100 likes on content ${content_id}`
      );
    }
  } catch (error) {
    throw error;
  }
}

// Check if a user has liked a particular content
async function hasUserLikedContent(user_id, content_id) {
  try {
    const query =
      "SELECT COUNT(*) FROM likes WHERE user_id = $1 AND content_id = $2";
    const values = [user_id, content_id];
    const result = await pool.query(query, values);
    const count = parseInt(result.rows[0].count, 10);
    return count > 0;
  } catch (error) {
    throw error;
  }
}

// Retrieve the total number of likes for a content
async function getTotalLikesForContent(contentId) {
  const query = "SELECT COUNT(*) FROM likes WHERE content_id = $1";
  const values = [contentId];
  const result = await pool.query(query, values);
  const count = parseInt(result.rows[0].count, 10);
  return count;
}

module.exports = {
  storeLikeEvent,
  hasUserLikedContent,
  getTotalLikesForContent,
};
