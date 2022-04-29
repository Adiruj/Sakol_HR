const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')


////////////////////////////////// PUT Candidate ////////////////////////////////
Router.post("/",(req,res)=>{
    var post  = {
        ID_Cadidate:req.body.ID_Cadidate,
        Level:req.body.Level,
        Name:req.body.Name,
        Status:req.body.Status,
        Resume:req.body.Resume
    }
    var sql = "UPDATE candidate SET Level=? , Name=? , Status=? , Resume=? WHERE Id = ?";
    mysqlConnection.query(sql,[post.Level,post.Name,post.Status,post.Resume,post.ID_Cadidate], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;