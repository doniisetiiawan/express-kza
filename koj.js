const express = require('express');

const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Welcome!');
// });
// app.get('/hello.text', (req, res) => {
//   res.send('Hola!');
// });
// app.get('/contact', (req, res) => {
//   res.send('contact');
// });
require('./xzx')(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
