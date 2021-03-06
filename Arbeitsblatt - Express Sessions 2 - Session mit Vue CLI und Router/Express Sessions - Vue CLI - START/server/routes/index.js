const express = require('express');
const router = express.Router();
const users = require('../model/users.js');

const redirectLogin = (req, res, next) => {
  if (!req.session.userId) res.status(400).send('You are not logged in!');
  else next();
};

// enter your code here
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    const user = users.find((el) => el.email === email && el.password === password);
    if (user) {
      req.session.userId = user.id;
      res.status(200).json({ id: user.id, name: user.name });
    } else res.status(401).send('Wrong email or password');
  } else res.status(400).send('Login failed');
});

router.get('/logout', redirectLogin, (req, res) => {
  // enter your code here
  req.session.destroy();
  res.clearCookie(process.env.SESSION_NAME);
  res.status(200).send('');
});

router.post('/register', (req, res) => {
  // enter your code here
  const { email, name, password } = req.body;
  if (email && name && password) {
    const checkMail = users.find((el) => el.email === email);
    if (checkMail) res.status(409).send('E-Mail already registered');
    users.push({
      id: users.length - 1,
      email,
      name,
      password,
    });
    res.status(200).send('ok');
  } else {
    res.status(400).send('Registration failed');
  }
});

router.get('/secretdata', redirectLogin, (req, res) => {
  return res.status(200).send('the prime number is 2305843009213693951');
});

module.exports = router;
