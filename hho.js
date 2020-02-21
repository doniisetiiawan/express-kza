const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const upload = multer({ dest: 'files/' });

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('secret7'));
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
}));

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
app.post(
  '/signup',
  upload.single('profile_image'),
  (req, res) => {
    const { name } = req.body;
    const { email } = req.body;
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    res.json(req.body);
  },
);
app.put('/request', (req, res) => {
  console.log(`PUT: ${req.body.name}`);
  res.send(`PUT: ${req.body.name}`);
});
app.get('/user/:id', (req, res) => {
  console.log(`User ID: ${req.params.id}`);
  res.send(`User ID: ${req.params.id}`);
});
// app.get('/counter', (req, res) => {
//   let count = req.cookies.count || 0;
//   count++;
//   res.cookie('count', count, {
//     path: '/counter',
//     maxAge: 2000,
//   });
//   res.send(`Count: ${count}`);
// });
app.get('/counter', (req, res) => {
  let count = req.signedCookies.count || 0;
  count++;
  res.cookie('count', count, { signed: true });
  res.send(`Count: ${count}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
