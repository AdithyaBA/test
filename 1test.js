var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, {
    useNewUrlParser: true
}, function(err, db) {
  if(err){
    console.log("ERROR OCCURED");
  }
  console.log("Database created!");
  db.close();
});