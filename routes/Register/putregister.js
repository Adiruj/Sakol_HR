const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')


////////////////////////////////// PUT Register ////////////////////////////////
Router.put("/",(req,res)=>{
    var post  = {
        ID_Register:req.body.ID_Register,
        Level:req.body.Level,
        Name:req.body.Name,
        Dept:req.body.Dept,
        Position:req.body.Position,
        Number:req.body.Number
    }
    var sql = "UPDATE register SET Level=?, Name=? , Dept=? , Position=? , Number=? WHERE Id = ?";
    mysqlConnection.query(sql,[post.Level,post.Name,post.Dept,post.Position,post.Number,post.ID_Register], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;