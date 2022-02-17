const express = require('express');
const app = express();
const path = require('path');

// app.use('/solution_front/', express.static(path.join(__dirname, './build')));
// app.use('/', express.static(path.join(__dirname, './build')));

console.log(path.join(__dirname, './build/index.html'));
// app.set('view engine', 'html');

app.get('/solution', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, './build')
  });
});
app.get('/', (req, res) => {
  res.status(200).send({message: 'Hello from App Engine!'});
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});