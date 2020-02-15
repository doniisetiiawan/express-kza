const express = require('express');
const responseTime = require('response-time');
const errorhandler = require('errorhandler');
const iniparser = require('iniparser');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const app = express();
const port = 3000;

// const config = iniparser.parseSync('./pqs.ini');
const config = require('./lbv.json')[app.get('env')];

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.use(morgan('combined', { stream: accessLogStream }));
app.use(express.static('./public'));
app.use(responseTime());
app.use(router);
app.use(errorhandler());

router.get('/', (req, res) => res.send('Hello World!'));
// router.get('/', () => {
// throw new Error();
// });
// router.get('/', (req, res) => res.send(config.title));

console.log(config.db_host);
console.log(config.db_user);
console.log(config.db_pass);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
