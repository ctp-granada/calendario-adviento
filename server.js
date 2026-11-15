import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.get(['/', '/index.html'], (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/profesor.html', (_req, res) => {
  res.sendFile(path.join(__dirname, 'profesor.html'));
});

app.get('/firebase-config.js', (_req, res) => {
  res.type('application/javascript').sendFile(path.join(__dirname, 'firebase-config.js'));
});

app.get('/firebase-applet-config.json', (_req, res) => {
  res.type('application/json').sendFile(path.join(__dirname, 'firebase-applet-config.json'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});
