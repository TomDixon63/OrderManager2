//REST API demo in Node.js
// start with: node server.js
// http://localhost:5000/getbestand

var express = require('express'); // require the express framework, npm install express
const bodyParser = require('body-parser');
var cors = require('cors')
var app = express();
var fs = require('fs'); //require file system object
var filename = 'lagerbestand.json';
var filecoding = 'utf8';

app.use(cors());
app.use(bodyParser.json());


app.get('/getbestand', function (req, res) {
    fs.readFile(__dirname + "/" + filename, filecoding, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            //  console.log(data);
            res.end(data);
            // return data;
        }
    });
})

app.post('/postbestand', (req, res) => {
    console.log('Received request');
    data = JSON.stringify(req.body);
    console.log(data);
    fs.writeFile(filename, data, (err) => {
     if(err){
        res.send(err);
     }else{
      console.log('File written to lagerbestand.json');
      res.send('File written to lagerbestand.json')
     }
    })
  });

// Create a server to listen at port 5000
var server = app.listen(5000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})
