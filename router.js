module.exports = function(app) {
  let path = require('path');
  let log = console.log;
  let ParseUser = Parse.Object.extend('ParseUser');
  let parseUser = new ParseUser();
  let query = new Parse.Query(ParseUser);
  parseUser.set('clientID', 150);
  parseUser.set('appID', 15);

  app.get('/login', function(req, res) {
    let clientID = parseUser.get('clientID');
    let appID = parseUser.get('appID');
    if (clientID == 150 && appID == 15) {
      parseUser.set('token', 'r2355dwq5q2d24wkristina');
      let tokeN = {
        Token: parseUser.get('token'),
      };
      res.status(200).send(tokeN);
      log(tokeN);
    } else {
      let errorCode = {
        'Error Code': 404,
        'Error Message': 'Приложение /ХХХ/ не найдено',
      };
      res.status(400).send(errorCode);
    }
  });
  app.get('/save', function(req, res) {
    parseUser.save(
      {},
      {
        success: function(parseUser) {
          log('saved successfully');
          res.status(200).send(parseUser);
        },
        error: function(parseUser, error) {
          res.status(400).send(error.code + error.message);
        },
      }
    );
  });

  app.get('/load', function(req, res) {
    query.equalTo('clientID', 150);
    query.equalTo('token', 'r2355dwq5q2d24wkristina');
    query.find({
      success: function(results) {
        log('Retrieved ' + results.length);
        for (let i = 0; i < results.length; i++) {
          let object = results[i];
          let objectResult = {
            'clientID': object.get('clientID'),
            'Your token': object.get('token'),
            'objectID': object.id,
            'Updated At': object.get('updatedAt'),
          };
          log(objectResult);
          res.status(200).send(objectResult);
        }
      },
      error: function(error) {
        res.status(401).send(error);
        log('Доступ запрещен' + error.code + ' ' + error.message);
      },
    });
  });

  app.get('/html', function(req, res) {
    res.render(path.join(__dirname, '/public/index.ejs'));
  });
};
