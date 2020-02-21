exports.index = (req, res) => {
  // throw new Error();
  // res.status(404);
  // res.send('forced 404');
  // res.status(500);
  // res.send('forced 500');
  // res.status(404).send('not found');
  // res.sendStatus(500);
  // res.status(200);
  // res.set('Content-Type', 'text/plain; charset=us-ascii');
  // res.set('X-Secret-Message', 'not really secret');
  // res.set('X-Test', 'OK');
  // res.send('welcome');
  // res.set({
  //   'Content-Type': 'text/plain; charset=us-ascii',
  //   'X-Secret-Message': 'not really secret',
  //   'X-Test': 'OK',
  // });
  // res.send('welcome');
  // res.set('Content-Type', 'text/plain');
  // res.send('<h1>welcome</h1>');
  // res.json({ message: 'welcome' });
  // res.jsonp({ message: 'welcome' });
  // res.format({
  //   'text/plain': function () {
  //     res.send('welcome');
  //   },
  //
  //   'text/html': function () {
  //     res.send('<b>welcome</b>');
  //   },
  //
  //   'application/json': function () {
  //     res.json({ message: 'welcome' });
  //   },
  //
  //   default() {
  //     res.status(406).send('Not Acceptable');
  //   },
  // });
  res.format({
    text() {
      res.send('welcome');
    },
    html() {
      res.send('<b>welcome</b>');
    },
    json() {
      res.json({ message: 'welcome' });
    },
    default() {
      res.send(406, 'Not Acceptable');
    },
  });
};
