let express = require('express');
let ParseServer = require('parse-server').ParseServer;
let app = express();
let log = console.log;
let Parse = require('parse/node');
let path = require('path');
let router = require('./router');
let ejs = require('ejs');
let api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/absolutist',
  appId: 'myAppId',
  masterKey: 'myMasterKey',
  fileKey: 'optionalFileKey',
  serverURL: 'http://localhost:4321/parse',
});
app.use('/public', express.static(path.join(__dirname, '/public')));
require('./router.js')(app);
app.use('/parse', api);
app.listen(4321, function() {
  log('parse-server-example running on port 4321.');
});
