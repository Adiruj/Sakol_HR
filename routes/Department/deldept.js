const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')

////////////////////////////////// Delete Register ////////////////////////////////
Router.delete("/:ID_Dept",(req,res)=>{
    var ID_Dept = req.params.ID_Dept
    var sql = "DELETE FROM department WHERE Id = ?";
    mysqlConnection.query(sql,[ID_Dept], (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;