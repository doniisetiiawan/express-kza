const routes = require('./handlers');
const user = require('./handlers/users');

module.exports = (app) => {
  app.get('/', routes.index);
  app.get('/users', user.list);
};
