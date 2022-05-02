const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')


////////////////////////////////// PUT Candidate ////////////////////////////////
Router.put("/",(req,res)=>{
    var post  = {
        ID_Candidate:req.body.ID_Candidate,
        Level:req.body.Level,
        Name:req.body.Name,
        Status:req.body.Status,
        Resume:req.body.Resume
    }
    var sql = "UPDATE candidate SET Level=? , Name=? , Status=? , Resume=? WHERE Id = ?";
    mysqlConnection.query(sql,[post.Level,post.Name,post.Status,post.Resume,post.ID_Candidate], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;