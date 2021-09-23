const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// MongoDB Configuration
require('./config/db');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
