const app = require('./src/app');

app.listen(app.get('port'), (err) => {
  if (err) console.log(err.message);
  else console.log(`Express server is listening on port ${app.get('port')}`);
});