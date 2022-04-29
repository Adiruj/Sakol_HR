const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')

////////////////////////////////// Get Dept All ////////////////////////////////
Router.get("/all",(req,res)=>{
    var sql = "SELECT * FROM department";
    mysqlConnection.query(sql, (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;

////////////////////////////////// Get Dept by ID ////////////////////////////////
Router.get("/ID/:Id",(req,res)=>{
    var sql = "SELECT * FROM department where Id=?";
    mysqlConnection.query(sql,[req.params.Id], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;

////////////////////////////////// Get Dept by Department ////////////////////////////////
Router.get("/dept/:Dept",(req,res)=>{
    var sql = "SELECT * FROM department where Dept=?";
    mysqlConnection.query(sql,[req.params.Dept], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;