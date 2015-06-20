var express = require('express');

var app = express();
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

//app.set('trust proxy','http://proxy.iiit.ac.in:8080');
app.get('/', function(req, res){
  res.send('Hello World');
  //res.render("index.html");
});

app.post('/contacts', function(req, res){
  var username = req.body.username;
  var password = req.body.password;

  res.json({'login':'successful'});
});

app.get('*', function(req, res){
  //res.send('Not found!', 404);
  res.status(404).send("Not Found");
});

app.listen(1337);