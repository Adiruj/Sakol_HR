const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')


////////////////////////////////// Post Register ////////////////////////////////
Router.get("/",(req,res)=>{
    var post  = {
        Level:req.body.Level,
        Name:req.body.Name,
        Dept:req.body.Dept,
        Position:req.body.Position,
        Number:req.body.Number
    }
    var sql = "INSERT INTO register(Level,Name,Dept,Position,Number) value(?,?,?,?,?) ";
    mysqlConnection.query(sql,[post.Level,post.Name,post.Dept,post.Position,post.Number], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;