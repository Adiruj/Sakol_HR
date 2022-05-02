const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')

////////////////////////////////// Delete Register ////////////////////////////////
Router.delete("/:ID_Register",(req,res)=>{
    var ID_Register = req.params.ID_Register
    var sql = "DELETE FROM register WHERE Id = ?";
    mysqlConnection.query(sql,[ID_Register], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;