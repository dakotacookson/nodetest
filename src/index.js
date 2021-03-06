import express from 'express';
import path from 'path';

const app = express();
const serverUrl = 'http://127.0.0.1:';
const serverPort = '8081';

//127.0.0.1:8081/
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/html' + '/index.html'));
});

//127.0.0.1:8081/about
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname + '/html' + '/about.html'));
});

app.get('/navbar', (req, res) => {
  res.sendFile(path.join(__dirname + '' + '/navbar.js'));
});

app.listen(8081);

console.log(`Server is up and running in ${serverUrl}${serverPort}`);
