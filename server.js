const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Route to home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Route to signup page
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// Dummy login POST route (no real auth)
app.post('/login', (req, res) => {
  // You can validate login here
  res.redirect('/');
});

// Dummy signup POST route (no real user creation)
app.post('/signup', (req, res) => {
  // You can store user info here
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
