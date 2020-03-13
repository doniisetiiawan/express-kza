import express from 'express';

const app = express();
const port = 3000;

let closed = false;

app.get('/', (req, res) => {
  if (!closed) {
    server.close();

    res.send('First request');

    closed = true;
  } else {
    res.send('Server shutting down ...');
  }

  setTimeout(() => {
    process.exit();
  }, 5000);
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
