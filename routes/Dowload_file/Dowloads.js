const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../Connection')

////////////////////////////////// Dowload Resume File ////////////////////////////////
Router.get("/:Id",(req,res)=>{
    var sql = "SELECT * FROM register WHERE Id = ?"
    mysqlConnection.query(sql,[req.params.Id],(err,rows) => {
        if(!err){
            var resumefilename = rows[0].Resume
            const file = `routes/public/`+resumefilename;
            res.download(file); // Set disposition and send it.
        }else{
            res.json(err)
        }
    })
})
module.exports = Router;