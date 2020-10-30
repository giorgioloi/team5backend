var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Article = require('./api/models/articleModel'),//created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Gio:pasta13@cluster0.35e0i.mongodb.net/team5db?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/blogRoutes'); //importing route
routes(app); //register the route


app.listen(port);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});


console.log('team5Backed server started on: ' + port);