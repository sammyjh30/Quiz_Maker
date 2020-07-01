const express = require('express');
const router = express.Router();
const conn = require('../Connection.js')
const messages = require('../Global/Messages')


router.post('/addQuestion',function(req,res){
    conn.poolPromise.then((pool)=> {
        const request =  pool.request();
        request.input('text', req.body.text)
        request.input('roundIn', req.body.roundIn)
        request.query(`INSERT INTO [dbo].[Questions] 
        ([Text],[RoundIn]) 
        VALUES (@text,@RoundIn)`).then(() => {
            res.status(201).send(messages[201])
        }).catch((err) => {
            console.log(err)
            res.status(500).send(messages[500])
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send(messages[500])
    })
})


router.delete('/deleteQuestion/:QuestionID',function(req,res){
    conn.poolPromise.then((pool)=> {
        const request =  pool.request();
        request.input('questionID', req.params.QuestionID)
        request.query(`DELETE Questions
        WHERE QuestionID =@questionID`).then(() => {
            res.status(200).send(messages[200])
        }).catch((err) => {
            console.log(err)
            res.status(500).send(messages[500])
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send(messages[500])
    })
})


  
 module.exports = router