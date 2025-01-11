const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { route } = require('./routes/routes');
const router = require('./routes/routes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Shorter timeout
  socketTimeoutMS: 45000,        // Ensure the connection doesn't hang
});


app.use('/',router)

module.exports = app;
