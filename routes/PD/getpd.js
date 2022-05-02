const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')

////////////////////////////////// Get PD All ////////////////////////////////
Router.get("/",(req,res)=>{
    var sql = "SELECT * FROM pd";
    mysqlConnection.query(sql, (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;

////////////////////////////////// Get PD by ID ////////////////////////////////
Router.get("/ID/:Id",(req,res)=>{
    var sql = "SELECT * FROM pd where Id=?";
    mysqlConnection.query(sql,[req.params.Id], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;