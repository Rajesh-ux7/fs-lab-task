const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (css, js, index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded bodies (form data)
app.use(bodyParser.urlencoded({ extended: true }));

// Setup multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Handle form submission
app.post('/submit', upload.single('photo'), (req, res) => {
  const formData = req.body;
  const fileData = req.file;

  console.log('Form Data:', formData);
  console.log('Uploaded File:', fileData);

  res.send('Form submitted successfully!');
});

// Explicit route to serve index.html on '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server after all routes are defined
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
