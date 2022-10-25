const db = require("mongoose");

const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;
const URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;


db.Promise = global.Promise;

async function connect(){
   await db.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: DB_NAME,
  })
  .then(() => console.log("[DB] Conectada con éxito"))
  .catch((err) => console.error("error en la conexión al [DB]", err));
}

module.exports = connect;





