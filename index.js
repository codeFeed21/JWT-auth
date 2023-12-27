const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const zod = require('zod');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const secret = process.env.SECRET; // This should be inside the .env file

const mongoDb = process.env.MONGO_URL;
mongoose.connect(mongoDb, (err) => {
  if (!err) console.log('MongoDB connected successfully!')
  else console.log(err);
});

const app = express();
app.use(express.json());

const port = process.env.PORT;
console.log(port);

app.get('/', (req, res) => {
  res.json({
    users: USERS,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
