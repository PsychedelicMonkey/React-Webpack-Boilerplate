const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const passport = require('passport');

dotenv.config();
const app = express();

// MongoDB Configuration
require('./config/db');

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(passport.initialize());

// Routes
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
