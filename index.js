var express = require('express');
var app = express();
var path = require("path");

app.set('port',(process.env.port || 5000));

app.use(express.static(__dirname+'/public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname+'/login.html'));
})

app.get('/dashboard', function (req, res) {
  res.sendFile(path.join(__dirname+'/dashboard.html'));
})
 
app.listen(app.get('port'));