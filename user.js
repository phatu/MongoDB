
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/UserDB";

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})


app.listen(port, () => {
    console.log(`listening ${port}`);
})


MongoClient.connect(url, function(err, db) {
    if(err) throw err;
   console.log("Database created");
    var dbo = db.db("UserDB");


    dbo.createCollection("UserCollection", function(err, res){
       if(err) throw err;
       console.log("collection created");
        

    app.post("/index", function(req, res){
        var name = req.body.name;
        var surname = req.body.surname;

        var userObject = {
            "name" : name,
            "surname" : surname
        }
    

    dbo.collection("UserCollection").insertOne(userObject, function(err, res){
        if(err) throw err;
        console.log("User successfully added");
     })
    
    })
    
    })
})




