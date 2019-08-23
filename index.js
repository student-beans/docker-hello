const express = require('express')

const app = express();
const msg = process.env.MSG || 'World';

app.set('port', (process.env.PORT || 4000));

app.get('/', function(request, response) {
  response.send(`Hello ${msg}`);
});

app.listen(app.get('port'), function() {
  console.log(`Node app is running at localhost: ${app.get('port')}`);
});
