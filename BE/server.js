const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Endpoint yang rentan terhadap Open Redirect
app.post('/', (req, res) => {
  const redirectUrl = req.query.redirect_url;
  // Simulasi tanpa validasi URL
  if (redirectUrl) {
    console.log(`Redirecting to: ${redirectUrl}`);
    return res.redirect(redirectUrl);  // Rentan terhadap open redirect
  }
  res.send('Login successful, but no redirection.');
});

app.get('/page2', (req, res) => {
  res.send('Login successful');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});