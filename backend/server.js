const express = require('express');
const app = express();
const PORT = 3000;

// Simulasi Endpoint Denial of Service (DoS)
app.get('/api/dos', (req, res) => {
  res.send("This endpoint could simulate DoS vulnerability.");
});

// Simulasi Open Redirect Vulnerability
app.get('/api/redirect', (req, res) => {
  const target = req.query.url;
  if (target) {
    res.redirect(target);
  } else {
    res.send("Invalid or no URL provided.");
  }
});

// Home Endpoint
app.get('/', (req, res) => {
  res.send("Welcome to the DoS & Open Redirect Simulation Backend!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});