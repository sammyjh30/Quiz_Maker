const express = require('express');
const router = express.Router();
const conn = require('../Connection.js')
const messages = require('../Global/Messages')



router.post('/addQuestion',function(req,res){
    conn.poolPromise.then((pool)=> {
        const request =  pool.request();
        request.input('quizId', conn.sql.Int , req.body.quizId)
        request.input('roundNumber', conn.sql.Int , req.body.roundNumber)
        request.input('questionType', conn.sql.Int , req.body.questionType)
        request.input('questionNumber', conn.sql.Int , req.body.questionNumber)
        request.input('text', conn.sql.VarChar , req.body.text)
        request.input('correctAnswer', conn.sql.Int , req.body.correctAnswer)
        request.input('rightAnswer', conn.sql.VarChar , req.body.rightAnswer)
        request.input('wrongAnswer1', conn.sql.VarChar , req.body.wrongAnswer1)
        request.input('wrongAnswer2', conn.sql.VarChar , req.body.wrongAnswer2)
        request.input('wrongAnswer3', conn.sql.VarChar , req.body.wrongAnswer3)
        request.execute(`InsertQuestion`).then(() => {
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