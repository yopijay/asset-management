// Libraries
const express = require('express');
const cors = require('cors');
const cookie = require('cookie-parser');

// Variables
const app = express();
const client = require('./routes/client');
const port = process.env.PORT || 5000;

// Middleware
require("dotenv").config();
app.use(cookie());
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Routes
app.use('/api/v1', client);

app.listen(port);