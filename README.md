# Likes System Microservice

## Tech Stack Used

- Node.js
- PostgreSQL

## Prerequisites

- Docker should be installed and running on your machine.
- Node.js and npm should be installed on your machine.
- PostgreSQL 15.3

## Running the Application

### Steps

1. Clone the project repository to your local machine.
2. Open a terminal and navigate to the project's root directory.
3. Install all the dependencies by running the following command `npm install`
4. Update the `config.json` file

   - Open the project folder and navigate to the `likes-service/src` directory.
   - Locate the `config.json` file and open it

     **Update the following fields in the config.json file with your own PostgreSQL information:**

     ```
     {
     "database": {
         "host": "db",
         "port": 5432,
         "database": "likes", // DATABASE_NAME
         "user": "postgres", // USER_NAME
         "password": "pra123156" // Password
     }
     }
     ```

   Your updated `config.json` file should reflect the correct PostgreSQL connection details.

5. Running the Containers and Database

   - Make sure you are in the project's root directory.
   - Run the following command to start the containers:
     `docker-compose up -d --build`

     - This command will build and start the containers defined in the **docker-compose.yml** file.

The containers should start successfully. You can check them in Docker Desktop App.

### Testing the Routes:

**Open Postman to test the API routes.**

- Use the following URLs to test the routes:
  - POST http://localhost:3000/like
    Request body:

```
{
    "user_id": "123",
    "content_id": "47"
}
```

![like_route](https://github.com/bhagatpratham/likes_microservice/assets/66031743/83551357-b0aa-4b6f-a13c-ab7054c1d2df)

This route will store a "like" event for the specified user and content.

- GET http://localhost:3000/hasLiked/:user_id/:content_id
  - Replace :user_id and :content_id with the actual user ID and content ID values.

![hasLiked_route](https://github.com/bhagatpratham/likes_microservice/assets/66031743/e50d4925-d016-4e8b-8390-e7a61a8a10cf)


This route will check if the specified user has liked the specified content.

- GET http://localhost:3000/totalLikes/:content_id
  - Replace :content_id with the actual content ID value.

![totalLikes](https://github.com/bhagatpratham/likes_microservice/assets/66031743/51f93446-aa82-4e35-9076-c4d575e8118a)

This route will fetch the total number of likes for the specified content.

## Functional Tests

Prerequisites
Before running the functional tests, make sure you have completed the following steps:

- Set up the application by following the instructions mentioned above.

### Running the Functional Tests

To run the functional tests, perform the following steps:

- Open a terminal and navigate to the project's root directory.
  Run the following command `node functional-tests/test.js`

It will send HTTP requests to the likes microservice and validate the responses. The results of each test case will be displayed in the terminal.

### Test Cases

The test.js file contains the following test cases:

- Testing the "like" route: This test case sends a POST request to the _/like_ route with the user_id and content_id parameters. It verifies the response status and logs the response data.

- Testing the "hasLiked" route: This test case sends a GET request to the **_/hasLiked_** route with the user_id and content_id query parameters. It checks if the user has liked the post and logs the response status and data.

- Testing the "totalLikes" route: This test case sends a GET request to the **_/totalLikes_** route with the content_id query parameter. It retrieves the total number of likes for the post and logs the response status and data.
