const express = require('express');
const app = express();
let path = require('path');
let http = require('http');
let bodyParser = require('body-parser');

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT||3000, function () {
  console.log('App listening on port 3000');
})

app.get('/', function(req, res) {
  res.render('index');
})
