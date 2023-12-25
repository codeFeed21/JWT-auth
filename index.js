const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const secret = "Secret"; // This should be inside the .env file

const app = express();
app.use(express.json());

const port = 3000;

const USERS = [
  { 
    id:1,
    username: "parthiv",
    password: "gibberish",
    name: "Parthiv Parmar",
  },
  {
    id:2,
    username: "chandler",
    password: "1222",
    name: "Chandler Bing",
  },
  {
    id:3,
    username: "harvey",
    password: "mike",
    name: "Harvey Specter",
  },
];

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
