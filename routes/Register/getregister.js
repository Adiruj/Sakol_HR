const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')

////////////////////////////////// Get Register All ////////////////////////////////
Router.get("/",(req,res)=>{
    var sql = "SELECT * FROM register";
    mysqlConnection.query(sql, (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;

////////////////////////////////// Get Register by ID ////////////////////////////////
Router.get("/ID/:Id",(req,res)=>{
    var sql = "SELECT * FROM register where Id=?";
    mysqlConnection.query(sql,[req.params.Id], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;

////////////////////////////////// Get Register by Department ////////////////////////////////
Router.get("/dept/:Dept",(req,res)=>{
    var sql = "SELECT * FROM register where Dept=?";
    mysqlConnection.query(sql,[req.params.Dept], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;