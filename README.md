# OrderManager2

# Node Server

--> node  server.js

1. server.js

//REST API demo in Node.js
// start with: node server.js
// http://localhost:5000/getbestand

var express = require('express'); // require the express framework, npm install express
var cors = require('cors')
var app = express();
var fs = require('fs'); //require file system object


app.use(cors());

// Endpoint to Get a list of users
app.get('/getbestand', function(req, res){
    fs.readFile(__dirname + "/" + "lagerbestand.json", 'utf8', function(err, data){
        if (err) {
            console.log(err);
          } else{
        console.log(data);
        res.end(data);
       // return data;
          }
    });
})

// Create a server to listen at port 5000
var server = app.listen(5000, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})

2. package.json

{
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2"
  }
}

3. lagerbesstand.json