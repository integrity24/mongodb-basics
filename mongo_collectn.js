//to import mongodb 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/db2";
//make client connect 
MongoClient.connect(url, function (err, client) {
    var db = client.db('db2');
    if (err) throw err;
    //students is a collection we want to create inside db2                            
    db.createCollection("interns", function (err, res) {
        if (err) throw err;
        console.log("Interns collection created");
        client.close();
    });
});