const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')

//DELETE FROM `profile` WHERE `profile`.`Id` = 2;
////////////////////////////////// Delete Profile ////////////////////////////////
Router.get("/:Id",(req,res)=>{
    var Ids = req.params.Id
    var sql = "DELETE FROM profile WHERE profile.Id = ?";
    mysqlConnection.query(sql,[Ids], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log("asd");
            //console.log(err);
        }
    })
})
module.exports = Router;