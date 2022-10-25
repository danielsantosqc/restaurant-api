const { MongoClient, ObjectId } = require('mongodb');

const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`;

class MongoLib {
  constructor(){
    this.cliente = new MongoClient(MONGO_URI, { useNewUrlParser: true });
    this.dbName = DB_NAME
  }  
  connect (){
    if(!MongoLib.connection){
      MongoLib.connection = new Promise((resolve, reject)=>{
        this.cliente.connect(err =>{
          if(err){
            reject(err);
          }
          console.log('Conectada con éxito!!!')
          resolve(this.cliente.db(this.dbName));
        })
      })
    }
    return MongoLib.connection;
  }
}

module.exports = MongoLib; 