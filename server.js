
var express = require('express');
var app = express();
var path = require('path');

// app.use(express.static(path.join(__dirname)));
// app.use("/dist/portafolio/assets", express.static(__dirname));
// app.use("/images", express.static(__dirname + '/images'));
// app.use("/scripts", express.static(__dirname + '/scripts'));

// // viewed at based directory http://localhost:8080/
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname + '/dist/portafolio/index.html'));
// });

// // add other routes below
// app.get('/about', function (req, res) {
//   res.sendFile(path.join(__dirname + 'views/about.html'));
// });

//app.listen(process.env.PORT || 8080);

app.use(express.static("dist/portafolio")); // myApp will be the same folder name.
app.get('/', function (req, res,next) {
 res.redirect('/'); 
});
app.listen(8080, 'localhost');
console.log('MyProject Server is Listening on port 8080');