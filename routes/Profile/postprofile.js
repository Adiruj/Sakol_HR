const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')


////////////////////////////////// Post Profile ////////////////////////////////
Router.get("/",(req,res)=>{
    var post  = {
        Code:req.body.Code,
        Name:req.body.Name,
        Dept:req.body.Dept,
        Position:req.body.Position,
        Detail:req.body.Detail,
        Shift:req.body.Shift,
        Birthday:req.body.Birthday,
        Start_Date:req.body.Start_Date,
        Level:req.body.Level,
        Username:req.body.Username,
        Password:req.body.Password
    }
    var sql = "INSERT INTO profile(Code,Name,Dept,Position,Detail,Shift,Birthday,Start_Date,Level,Username,Password) value(?,?,?,?,?,?,?,?,?,?,?) ";
    mysqlConnection.query(sql,[post.Code,post.Name,post.Dept,post.Position,post.Detail,post.Shift,post.Birthday,post.Start_Date,post.Level,post.Username,post.Password], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;