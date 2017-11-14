var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001;
  mongoose = require('mongoose'),
  Task = require('./api/models/vsoftAgentModel'),
  bodyParser = require('body-parser');

  // mongoose instance connection url connection
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/EmployeeDB');


  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


  var routes = require('./api/routes/vsoftAgentRoute'); //importing route
  routes(app); //register the route

app.listen(port);

console.log('Vsoft Agent RESTful API server started on: ' + port);
