const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')


////////////////////////////////// Post Dept ////////////////////////////////
Router.post("/",(req,res)=>{
    var post  = {
        Level:req.body.Level,
        Dept:req.body.Dept,
        Position:req.body.Position,
        Detail:req.body.Detail,
        Overall:req.body.Overall,
        Actual:req.body.Actual
    }
    var sql = "INSERT INTO department(Level,Dept,Position,Detail,Overall,Actual) value(?,?,?,?,?,?) ";
    mysqlConnection.query(sql,[post.Level,post.Dept,post.Position,post.Detail,post.Overall,post.Actual], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;