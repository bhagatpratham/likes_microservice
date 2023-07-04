const axios = require("axios");

// Testing the "like" route
async function testLikeRoute() {
  try {
    const response = await axios.post("http://localhost:3000/like", {
      user_id: "123",
      content_id: "47",
    });
    console.log("Response:", response.status, response.data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Testing the "hasLiked" route
async function testHasLikedRoute() {
  try {
    const response = await axios.get(
      "http://localhost:3000/hasLiked?user_id=123&content_id=47"
    );
    console.log(`User has liked the post: ${response.data.hasLiked}`);
    console.log("Response:", response.status, response.data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Testing the "totalLikes" route
async function testTotalLikesRoute() {
  try {
    const response = await axios.get(
      "http://localhost:3000/totalLikes?content_id=47"
    );
    console.log(`Total likes for the post: ${response.data.totalLikes}`);
    console.log("Response:", response.status, response.data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Running the test cases
async function runTests() {
  console.log("Running functional tests...");
  await testLikeRoute();
  await testHasLikedRoute();
  await testTotalLikesRoute();
}

runTests();
