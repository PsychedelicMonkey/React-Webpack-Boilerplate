const express = require('express');

const router = express.Router();

router.post('/login', async (req, res) => {
  res.send('login');
});

router.post('/register', async (req, res) => {
  res.send('register');
});

module.exports = router;