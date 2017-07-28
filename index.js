var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();
var log = console.log;
var Parse = require('parse/node');
var path = require('path');
var router = require('./router');
var ejs = require('ejs');
var api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/absolutist',
  appId: 'myAppId',
  masterKey: 'myMasterKey',
  fileKey: 'optionalFileKey',
  serverURL: 'http://localhost:4321/parse'
});
app.use('/public', express.static(path.join(__dirname, '/public')));
require('./router.js')(app);
app.use('/parse', api);
app.listen(4321, function() {
  log('parse-server-example running on port 4321.');
});
