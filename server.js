const express = require('express');
const { config } = require('./config/config');

//routes.js
const routes = require('./routes/routes');

const {
  logError,
  boomErrorHandler,
  errorHandler,
} = require('./controller/middlewares/error_handler');

// data base connection
// --connection with mongoose
// const db = require('./lib/connect_db');
// db();

// ---connection with mongodb lib 
// const MongoLib = require('./lib/mongo_connect')
// const db = new MongoLib();
// db.connect();

let app = express();

//  INIT MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(router);
routes(app);

// middleware de error siempre deben ir después del routing
app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

// END MIDDLEWARE

app.listen(config.port);
console.log(`La aplicación esta escuchando en el http://localhost:${config.port}`);
