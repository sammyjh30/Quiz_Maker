const express = require('express');
const router = express.Router();
const conn = require('../services/dbconnection')
const messages = require('../Global/Messages')


//#region Question
router.post('/addQuestion',function(req,res){
    conn.poolPromise.then((pool)=> {
        const request =  pool.request();
        request.input('quizId', conn.sql.Int , req.body.quizId)
        request.input('roundNumber', conn.sql.Int , req.body.roundNumber)
        request.input('questionType', conn.sql.Int , req.body.questionType)
        request.input('questionNumber', conn.sql.Int , req.body.questionNumber)
        request.input('text', conn.sql.VarChar , req.body.text)
        request.input('correctAnswer', conn.sql.Bit , req.body.correctAnswer)
        request.input('rightAnswer', conn.sql.VarChar , req.body.rightAnswer)
        request.input('wrongAnswer1', conn.sql.VarChar , req.body.wrongAnswer1)
        request.input('wrongAnswer2', conn.sql.VarChar , req.body.wrongAnswer2)
        request.input('wrongAnswer3', conn.sql.VarChar , req.body.wrongAnswer3)
        request.execute(`InsertQuestion`).then(() => {
            res.status(201).send({'message' : messages[201]})
        }).catch((err) => {
            console.log(err)
            res.status(500).send({'error':messages[500]})
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send({'error':messages[500]})
    })
})

router.delete('/deleteQuestion/:questionID',function(req,res){
    conn.poolPromise.then((pool)=> {
        const request =  pool.request();
        request.input('questionID', req.params.questionID)
        request.query(`DELETE Questions
        WHERE QuestionID =@questionID`).then(() => {
            res.status(200).send({'message' : messages[200]})
        }).catch((err) => {
            console.log(err)
            res.status(500).send({'error':messages[500]})
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send({'error':messages[500]})
    })
})

router.get('/getQuestions/:quizId', function(req,res){
    conn.poolPromise.then((pool)=>{
        const request = pool.request();
        request.input('quizId',req.params.quizId)
        request.query(`SELECT Questions.questionId,roundNumber,questionType,questionNumber,correctAnswer,TFQuestions.[text] as TFText,MultipleChoiceQuestions.[text] as multiText, rightAnswer,wrongAnswer1,wrongAnswer2,wrongAnswer3  FROM Questions 
        LEFT JOIN TFQuestions ON Questions.questionId = TFQuestions.questionId
        LEFT JOIN MultipleChoiceQuestions ON Questions.questionId = MultipleChoiceQuestions.questionId
        WHERE quizId = @quizId
        ORDER BY roundNumber, questionNumber`).then((data) => {
            res.status(200).send({'message' : messages[200], 'recordSet':data.recordset})
        }).catch((err) => {
            console.log(err)
            res.status(500).send({'error':messages[500]})
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send({'error':messages[500]})
    })
})

router.get('/getQuestions/:questionId',function(req,res){
    conn.poolPromise.then((pool)=>{
        const request = pool.request();
        request.input('questionId',req.params.questionId)
        request.query(`SELECT Questions.questionId,roundNumber,questionType,questionNumber,correctAnswer,TFQuestions.[text] as TFText,MultipleChoiceQuestions.[text] as multiText, rightAnswer,wrongAnswer1,wrongAnswer2,wrongAnswer3  FROM Questions 
        LEFT JOIN TFQuestions ON Questions.questionId = TFQuestions.questionId
        LEFT JOIN MultipleChoiceQuestions ON Questions.questionId = MultipleChoiceQuestions.questionId
        WHERE Questions.questionId = @questionId
        ORDER BY roundNumber, questionNumber`).then((data) => {
            res.status(200).send({'message' : messages[200], 'recordSet':data.recordset})
        }).catch((err) => {
            console.log(err)
            res.status(500).send({'error':messages[500]})
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send({'error':messages[500]})
    })    
})

router.put('/updateQuestion',function(req,res){
    conn.poolPromise.then((pool)=> {
        const request =  pool.request();
        request.input('questionId',conn.sql.Int,req.body.questionId)
        request.input('roundNumber', conn.sql.Int , req.body.roundNumber)
        request.input('questionNumber', conn.sql.Int , req.body.questionNumber)
        request.input('text', conn.sql.VarChar , req.body.text)
        request.input('correctAnswer', conn.sql.Bit , req.body.correctAnswer)
        request.input('rightAnswer', conn.sql.VarChar , req.body.rightAnswer)
        request.input('wrongAnswer1', conn.sql.VarChar , req.body.wrongAnswer1)
        request.input('wrongAnswer2', conn.sql.VarChar , req.body.wrongAnswer2)
        request.input('wrongAnswer3', conn.sql.VarChar , req.body.wrongAnswer3)
        request.execute(`UpdateQuestion`).then(() => {
            res.status(201).send({'message' : messages[201]})
        }).catch((err) => {
            console.log(err)
            res.status(500).send({'error':messages[500]})
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send({'error':messages[500]})
    })
})
//#endregion


//#region Quiz
router.post('/addQuiz',function(req,res){
    conn.poolPromise.then((pool)=>{
        const request =  pool.request();
        request.input('quizName',req.body.quizName)
        request.input('hostId',req.body.hostId)
        request.input('startDateTime',conn.sql.DateTime,req.body.startDateTime)
        request.query(`INSERT INTO Quiz(quizName,HostId,startDateTime) 
        VALUES (@quizName,@hostId,@startDateTime)`).then(()=> {
            res.status(201).send({'message' : messages[201]})
        }).catch((err) => {
            console.log(err)
            res.status(500).send({'error':messages[500]})
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send({'error':messages[500]})
    })
})

router.delete('/deleteQuiz/:quizId',function(req,res){
    conn.poolPromise.then((pool)=> {
        const request =  pool.request();
        request.input('quizId', req.params.quizId)
        request.query(`DELETE Quiz
        WHERE quizId =@quizId`).then(() => {
            res.status(200).send({'message' : messages[200]})
        }).catch((err) => {
            console.log(err)
            res.status(500).send({'error':messages[500]})
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send({'error':messages[500]})
    })
})

router.get('/getQuiz/:quizId',function(req,res){
    conn.poolPromise.then((pool)=>{
        const request = pool.request();
        request.input('quizId',req.params.quizId)
        request.query(`SELECT * FROM quiz WHERE quizId = @quizId`).then((data) => {
            res.status(200).send({'message' : messages[200], 'recordSet':data.recordset})
        }).catch((err) => {
            console.log(err)
            res.status(500).send({'error':messages[500]})
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send({'error':messages[500]})
    })    
})

router.get('/getQuizByHostId/:hostId',function(req,res){ //can be change to be like host ID to make life easier if wanted 
    conn.poolPromise.then((pool)=>{
        const request = pool.request();
        request.input('hostId',req.params.hostId)
        request.query(`SELECT * FROM quiz WHERE hostId =  @hostId`).then((data) => {
            res.status(200).send({'message' : messages[200], 'recordSet':data.recordset})
        }).catch((err) => {
            console.log(err)
            res.status(500).send({'error':messages[500]})
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send({'error':messages[500]})
    })    
})


router.put('/updateQuiz',function(req,res){
    
    conn.poolPromise.then((pool)=>{
        let quizName = req.body.quizName
        let hostId = req.body.hostId
        let startDateTime = req.body.startDateTime
        const select = pool.request();
        select.input('quizId', req.body.quizId)
        select.query('SELECT * FROM Quiz WHERE quizId = @quizId').then((data)=>{
            if(!quizName){
                quizName = data.recordset[0].quizName
            }
            if(!hostId){
                hostId = data.recordset[0].hostId
            }
            if(!startDateTime){
                startDateTime = data.recordset[0].startDateTime
            }
            const request = pool.request();
            request.input('quizId', req.body.quizId)
            request.input('quizName',quizName)
            request.input('hostId',hostId)
            request.input('startDateTime',conn.sql.DateTime,startDateTime)
            request.query(`UPDATE Quiz
            SET quizName = @quizName,
            hostId = @hostId,
            startDateTime = @startDateTime
            WHERE quizId = @quizId`).then(() => {
                res.status(201).send({'message' : messages[201]})
            }).catch((err) => {
                console.log(err)
                res.status(500).send({'error':messages[500]})
            })
        }).catch((err) => {
            console.log(err)
            res.status(500).send({'error':messages[500]})
        })  
    }).catch((err) => {
        console.log(err)
        res.status(500).send({'error':messages[500]})
    })  
})
//#endregion







  
 module.exports = router