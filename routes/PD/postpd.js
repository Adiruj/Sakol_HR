const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')


////////////////////////////////// Post PD ////////////////////////////////
Router.get("/",(req,res)=>{
    var post  = {
        Level:req.body.Level,
        Number:req.body.Number
    }
    var sql = "INSERT INTO pd(Level,Number) value(?,?) ";
    mysqlConnection.query(sql,[post.Level,post.Number], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;