const express = require('express')
const Router = express.Router();
const mysqlConnection = require('../../Connection')


// Update Status Candidate to Interview 1
Router.put("/:Id", (req,res) => {
    var sql = "UPDATE candidate SET Status=? WHERE Id = ?"
    mysqlConnection.query(sql , [ 2 , req.params.Id ] , (err,rows) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err)
        }
    });
})
module.exports = Router;

// Update Status Interview 1 to Interview 2
Router.put("/:Id", (req,res) => {
    var sql = "UPDATE candidate SET Status=? WHERE Id = ?"
    mysqlConnection.query(sql , [ 3 , req.params.Id ] , (err,rows) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err)
        }
    });
})
module.exports = Router;

// Update Status Interview 2 to Pass
Router.put("/:Id", (req,res) => {
    var sql = "UPDATE candidate SET Status=? WHERE Id = ?"
    mysqlConnection.query(sql , [ 4 , req.params.Id ] , (err,rows) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err)
        }
    });
})
module.exports = Router;