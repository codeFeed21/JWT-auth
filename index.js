const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const adminMiddleware = require('./middlewares/admin');
const userMiddleware = require('./middlewares/users');

dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    msg:"Hello!" ,
  });
});

app.use('/users', userMiddleware);
app.use('/admin', adminMiddleware);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
