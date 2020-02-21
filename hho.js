const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const upload = multer({ dest: 'files/' });

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

// app.get('/search-result', (req, res) => {
//   const { name } = req.query;
//   const { source } = req.query;
//   console.log(`Searching for: ${name}`);
//   console.log(`From: ${source}`);
//   res.send(`${name} : ${source}`);
// });
app.get('/search-result', (req, res) => {
  const { q } = req.query;
  const { l } = req.query;
  const { e } = req.query;
  console.log(`Query:${q}`);
  console.log(`Location:${l}`);
  console.log(`Experience:${e}`);
  res.json(req.query);
});
// app.post('/signup', (req, res) => {
//   const { name } = req.body;
//   const { email } = req.body;
//   console.log(`Name: ${name}`);
//   console.log(`Email: ${email}`);
//   res.json(req.body);
// });
app.post('/signup', upload.single('profile_image'), (req, res) => {
  const { name } = req.body;
  const { email } = req.body;
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  res.json(req.body);
});
app.put('/request', (req, res) => {
  console.log(`PUT: ${req.body.name}`);
  res.send(`PUT: ${req.body.name}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
