const express = require('express')
var http = require('http');
const fs = require('fs')
var https = require('https')

var app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public'));

/**********Create Server**************/
   var server = http.createServer(app);
   //var server = https.createServer(httpOptions, app);
   app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods","DELETE, POST, GET, OPTIONS , PUT");
    next();
  });
/************************************/

//server.listen(process.env.PORT || 3000)

//////////////////////////Import Profile//////////////////////////////////////
const Getprofile = require('./routes/Profile/getprofile');
const Postprofile = require('./routes/Profile/postprofile');
const Putprofile = require('./routes/Profile/putprofile');
const Deleteprofile = require('./routes/Profile/delprofile');

//*************************** PROFILE *******************************************//
//*************************** GET DATA ******************************************/
app.use('/node/express/api/profile/getprofile/', Getprofile); //Get Profile

server.listen(3000, () => {
    console.log('Start server at port 3000.')
  })