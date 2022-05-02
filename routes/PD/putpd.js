const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')


////////////////////////////////// PUT PD ////////////////////////////////
Router.put("/",(req,res)=>{
    var post  = {
        ID_PD:req.body.ID_PD,
        Level:req.body.Level,
        Number:req.body.Number
    }
    var sql = "UPDATE pd SET Level=?, Number=? WHERE Id = ?";
    mysqlConnection.query(sql,[post.Level,post.Number,post.ID_PD], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;