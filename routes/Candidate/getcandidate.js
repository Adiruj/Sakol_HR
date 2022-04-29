const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')

////////////////////////////////// Get candidate All ////////////////////////////////
Router.get("/all",(req,res)=>{
    var sql = "SELECT * FROM candidate";
    mysqlConnection.query(sql, (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;

////////////////////////////////// Get candidate by ID ////////////////////////////////
Router.get("/ID/:Id",(req,res)=>{
    var sql = "SELECT * FROM candidate where Id=?";
    mysqlConnection.query(sql,[req.params.Id], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;

////////////////////////////////// Get candidate by Department ////////////////////////////////
Router.get("/dept/:Dept",(req,res)=>{
    var sql = "SELECT * FROM candidate where Dept=?";
    mysqlConnection.query(sql,[req.params.Dept], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;