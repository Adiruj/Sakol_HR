const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')

////////////////////////////////// Delete PD ////////////////////////////////
Router.get("/:ID_PD",(req,res)=>{
    var ID_PD = req.params.ID_PD
    var sql = "DELETE FROM pd WHERE Id = ?";
    mysqlConnection.query(sql,[ID_PD], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;