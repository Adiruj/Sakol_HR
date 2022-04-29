const express = require('express')
var http = require('http');
const fs = require('fs')
var https = require('https')
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.PORT || 3020;

var app = express();
app.use(express.json()); 

app.use(express.static('public'));

app.use(morgan('dev')); // ให้ server(express) ใช้งานการ morgam module
app.use(cors()); // ให้ server(express) ใช้งานการ cors module

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


//*************************************************** Start Server ****************************************************//
server.listen(port, () => {
  console.log('Start server at port 3020.')
})


//*************************************************** Profile Section ****************************************************//
//==> Import Profile
const Getprofile = require('./routes/Profile/getprofile');
const Postprofile = require('./routes/Profile/postprofile');
const Putprofile = require('./routes/Profile/putprofile');
const Deleteprofile = require('./routes/Profile/delprofile');

//==> GET Profile
app.use('/node/express/api/profile/getprofile/', Getprofile);

//==> Post Profile
app.use('/node/express/api/profile/postprofile/', Postprofile);

//==> Put Profile
app.use('/node/express/api/profile/putprofile/', Putprofile);

//==> Delete Profile
app.use('/node/express/api/profile/delprofile/', Deleteprofile);


//*************************************************** Department Section ****************************************************//
//==> Import Department
const Getdept = require('./routes/Department/getdept');
const Postdept = require('./routes/Department/postdept');
const Putdept = require('./routes/Department/putdept');
const Deletedept = require('./routes/Department/deldept');

//==> GET Department
app.use('/node/express/api/department/getdept/', Getdept);

//==> Post Department
app.use('/node/express/api/department/postdept/', Postdept);

//==> Put Department
app.use('/node/express/api/department/putdept/', Putdept);

//==> Delete Department
app.use('/node/express/api/department/deldept/', Deletedept);


//*************************************************** Register Section ****************************************************//
//==> Import Register
const Getregister = require('./routes/Register/getregister');
const Postregister = require('./routes/Register/postregister');
const Putregister = require('./routes/Register/putregister');
const Deleteregister = require('./routes/Register/delregister');

//==> GET Register
app.use('/node/express/api/register/getregister/', Getregister);

//==> Post Register
app.use('/node/express/api/register/postregister/', Postregister);

//==> Put Register
app.use('/node/express/api/register/putregister/', Putregister);

//==> Delete Register
app.use('/node/express/api/register/delregister/', Deleteregister);


//*************************************************** PD Section ****************************************************//
//==> Import PD
const Getpd = require('./routes/PD/getpd');
const Postpd = require('./routes/PD/postpd');
const Putpd = require('./routes/PD/putpd');
const Deletepd = require('./routes/PD/delpd');

//==> GET PD
app.use('/node/express/api/pd/getpd/', Getpd);

//==> Post PD
app.use('/node/express/api/pd/postpd/', Postpd);

//==> Put PD
app.use('/node/express/api/pd/putpd/', Putpd);

//==> Delete PD
app.use('/node/express/api/pd/delpd/', Deletepd);


//*************************************************** Candidate Section ****************************************************//
//==> Import Candidate
const Getcandidate = require('./routes/Candidate/getcandidate');
const Postcandidate = require('./routes/Candidate/postcandidate');
const Putcandidate = require('./routes/Candidate/putcandidate');
const Deletecandidate = require('./routes/Candidate/delcandidate');

//==> GET Candidate
app.use('/node/express/api/candidate/getcandidate/', Getcandidate);

//==> Post Candidate
app.use('/node/express/api/candidate/postcandidate/', Postcandidate);

//==> Put Candidate
app.use('/node/express/api/candidate/putcandidate/', Putcandidate);

//==> Delete Candidate
app.use('/node/express/api/candidate/delcandidate/', Deletecandidate);


