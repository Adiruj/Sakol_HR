const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')

////////////////////////////////// Get Profile All ////////////////////////////////
Router.get("/all",(req,res)=>{
    var sql = "SELECT * FROM profile";
    mysqlConnection.query(sql, (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;

////////////////////////////////// Get Profile by ID ////////////////////////////////
Router.get("/ID/:Id",(req,res)=>{
    var sql = "SELECT * FROM profile where Id=?";
    mysqlConnection.query(sql,[req.params.Id], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;

////////////////////////////////// Get Profile by Department ////////////////////////////////
Router.get("/dept/:Dept",(req,res)=>{
    var sql = "SELECT * FROM profile where Dept=?";
    mysqlConnection.query(sql,[req.params.Dept], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;