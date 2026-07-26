const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>CampusTask Portal is Running Successfully!</h1><p>Status: Healthy (200 OK)</p>');
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'UP', service: 'CampusTask API' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
