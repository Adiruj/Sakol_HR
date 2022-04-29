const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')

////////////////////////////////// Delete Register ////////////////////////////////
Router.get("/:ID_Candidate",(req,res)=>{
    var ID_Candidate = req.params.ID_Candidate
    var sql = "DELETE FROM candidate WHERE Id = ?";
    mysqlConnection.query(sql,[ID_Candidate], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;