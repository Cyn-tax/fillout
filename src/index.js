const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
require('dotenv').config()

const { PORT } = process.env

// App configurations
const bodyParser = express.json;
const app = express();
app.use(cors());
app.use(bodyParser());

// Import user routes
const responseRoute = require('./routes/response');

// Real users authentication routes
app.use('/forms', responseRoute);

// Start to listen request on port
app.listen(PORT, () => {
  console.log('Server is up and running', PORT);
})


