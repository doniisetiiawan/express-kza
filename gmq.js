import express from 'express';
import responseTime from 'response-time';
import errorhandler from 'errorhandler';

// const iniparser = require('iniparser');
import morgan from 'morgan';

import fs from 'fs';
import path from 'path';

// eslint-disable-next-line no-unused-vars
import namespace from 'express-namespace';

// eslint-disable-next-line no-unused-vars
import resource from 'express-resource';

// const routes = require('./handlers');
// const user = require('./handlers/users');

import routes from './routes';

const router = express.Router();

const app = express();
const port = 3000;

// const config = iniparser.parseSync('./pqs.ini');
// const config = require('./lbv.json')[app.get('env')];

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flags: 'a' },
);

app.use(morgan('combined', { stream: accessLogStream }));
app.use(express.static('./public'));
app.use(responseTime());
app.use(router);
app.use(errorhandler());

app.use(express.static(`${__dirname}/files`));

// router.get('/', (req, res) => res.send('Hello World!'));
// router.get('/', () => {
// throw new Error();
// });
// router.get('/', (req, res) => res.send(config.title));

// router.all('/', (req, res, next) => {
//   res.set('X-Catch-All', 'true');
//   next();
// });
//
// router.get('/', (req, res) => {
//   res.send('/ GET OK');
// });
//
// router.post('/', (req, res) => {
//   res.send('/ POST OK');
// });
//
// router.put('/', (req, res) => {
//   res.send('/ PUT OK');
// });
//
// router.patch('/', (req, res) => {
//   res.send('/ PATCH OK');
// });
//
// router.delete('/', (req, res) => {
//   res.send('/ DELETE OK');
// });
//
// router.options('/', (req, res) => {
//   res.send('/ OPTIONS OK');
// });
//
// router['m-search']('/', (req, res) => {
//   res.send('/ M-SEARCH OK');
// });
//
// router.notify('/', (req, res) => {
//   res.send('/ NOTIFY OK');
// });
//
// router.subscribe('/', (req, res) => {
//   res.send('/ SUBSCRIBE OK');
// });
//
// router.unsubscribe('/', (req, res) => {
//   res.send('/ UNSUBSCRIBE OK');
// });

// router.get('/abcd', (req, res) => {
//   res.send('abcd');
// });

// router.get('/ab?cd', (req, res) => {
//   res.send('ab?cd');
// });
//
// router.get('/ab+cd', (req, res) => {
//   res.send('ab+cd');
// });
//
// router.get('/ab*cd', (req, res) => {
//   res.send('ab*cd');
// });
//
// router.get('/ab(cd)?e', (req, res) => {
//   res.send('ab(cd)?e');
// });

// router.get('/user/:id', (req, res) => {
//   res.send(`user id: ${req.params.id}`);
// });
//
// router.get('/country/:country/state/:state', (req, res) => {
//   res.send(`${req.params.country}, ${req.params.state}`);
// });
//
// router.get('/route/:from-:to', (req, res) => {
//   res.send(`${req.params.from} to ${req.params.to}`);
// });
//
// router.get('/file/:name.:ext', (req, res) => {
//   res.send(
//     `${req.params.name}.${req.params.ext.toLowerCase()}`,
//   );
// });
//
// router.get('/feed/:format?', (req, res) => {
//   if (req.params.format) {
//     res.send(`format: ${req.params.format}`);
//   } else {
//     res.send('default format');
//   }
// });
//
// router.get(/.+app?le$/, (req, res) => {
//   res.send('/.+ap?le$/');
// });

// router.get(/a/, (req, res) => {
//   res.send('/a/');
// });

// router.get('/abcd', (req, res) => {
//   res.send('abcd');
// });
//
// router.get('/abc*', (req, res) => {
//   res.send('abc*');
// });

// router.get('/abc*', (req, res, next) => {
//   if (req.path === '/abcd') {
//     next();
//   } else {
//     res.send('abc*');
//   }
// });
//
// router.get('/abcd', (req, res) => {
//   res.send('abcd');
// });

// router.get(
//   '/',
//   (req, res, next) => {
//     res.set('X-One', 'hey!');
//     next();
//   },
//   (req, res, next) => {
//     res.set('X-Two', 'ho!');
//     next();
//   },
//   (req, res) => {
//     res.send("Let's go!");
//   },
// );

// const one = (req, res, next) => {
//   res.set('X-One', 'hey!');
//   next();
// };
//
// const two = (req, res, next) => {
//   res.set('X-Two', 'ho!');
//   next();
// };
//
// router.get('/', [one, two], (req, res) => {
//   res.send("Let's go!");
// });

// router.get('/', routes.index);
// router.get('/users', user.list);
routes(app);

app.namespace('/articles', () => {
  app.get('/', (req, res) => {
    res.send('index of articles');
  });

  app.get('/new', (req, res) => {
    res.send('new article');
  });

  app.get('/edit/:id', (req, res) => {
    res.send(`edit article ${req.params.id}`);
  });

  app.get('/delete/:id', (req, res) => {
    res.send(`delete article ${req.params.id}`);
  });

  app.get('/2013', (req, res) => {
    res.send('articles from 2013');
  });

  app.namespace('/2013/jan', () => {
    app.get('/', (req, res) => {
      res.send('articles from jan 2013');
    });

    app.get('/nodejs', (req, res) => {
      res.send('articles about Node from jan 2013');
    });
  });
});
app.resource('users', require('./handlers/users'));

app.get('/file', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'files/images.jpeg'),
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('file sent');
      }
    },
  );
});

app.get('/download', (req, res) => {
  res.download(
    path.join(__dirname, 'files/images.jpeg'),
    'open-secret.png',
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('file downloaded');
      }
    },
  );
});

// console.log(config.db_host);
// console.log(config.db_user);
// console.log(config.db_pass);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
