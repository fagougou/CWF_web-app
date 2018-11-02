// Require modules
const express = require('express');
const bodyParser = require('body-parser');
const { newError, log } = require('./helpers');
// Require routes
const welcomeRoute = require('./routes/welcome.route');
const catalogRoute = require('./routes/catalog.route');

// Initialize Express
const app = express();
const port = process.env.PORT || 3000;
app.set('port', port);
app.use(bodyParser.urlencoded({ extended: false }));

// cater CROS preflxght request
app.options("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.get("Origin") || "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Jwt");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.status(200).end();
});

// Allow CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.get("Origin") || "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

// Set routes
app.use(express.json());
app.use('/', welcomeRoute);
app.use('/api', catalogRoute);

// Global error handler
app.use((err, req, res, next) => {
  log(err);
  res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;