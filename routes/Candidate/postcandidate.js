const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')


////////////////////////////////// Post Candidate ////////////////////////////////
Router.get("/",(req,res)=>{
    var post  = {
        Level:req.body.Level,
        Name:req.body.Name,
        Status:req.body.Status,
        Resume:req.body.Resume
    }
    var sql = "INSERT INTO candidate(Level,Name,Status,Resume) value(?,?,?,?) ";
    mysqlConnection.query(sql,[post.Level,post.Name,post.Status,post.Resume], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;