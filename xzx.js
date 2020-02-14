module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Welcome!');
  });
  app.get('/hello.text', (req, res) => {
    res.send('Hola!');
  });
  app.get('/contact', (req, res) => {
    res.send('contact');
  });
};
