const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')


////////////////////////////////// PUT Department ////////////////////////////////
Router.post("/",(req,res)=>{
    var post  = {
        ID_Dept:req.body.ID_Dept,
        Level:req.body.Level,
        Dept:req.body.Dept,
        Position:req.body.Position,
        Detail:req.body.Detail,
        Overall:req.body.Overall,
        Actual:req.body.Actual
    }
    var sql = "UPDATE department SET Level=? , Dept=? , Position=? , Detail=? , Overall=? , Actual=? WHERE Id = ?";
    mysqlConnection.query(sql,[post.Level,post.Dept,post.Position,post.Detail,post.Overall,post.Actual,post.ID_Dept], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;