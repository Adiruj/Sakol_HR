const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')

////////////////////////////////// Delete Profile ////////////////////////////////
Router.get("/:Id",(req,res)=>{
    var Id = req.params.Id
    var sql = "DELETE FROM profile WHERE Id = ?";
    mysqlConnection.query(sql,[Id], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log("asd");
            //console.log(err);
        }
    })
})
module.exports = Router;