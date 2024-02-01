const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/check-headers', (req, res) => {
  const headers = req.headers;
  res.json({ headers });
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
