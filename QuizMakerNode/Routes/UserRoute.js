const express = require('express');
const router = express.Router();
const conn = require('../services/dbconnection')
const messages = require('../Global/Messages');

router.post('/addUser',function(res,req){
    conn.poolPromise.then((pool)=> {
        const request = pool.request();
        request.input('name', req.body.name);
        request.input('surname', req.body.name);
        request.input('email', req.body.name);
        request.query(`INSERT INTO [dbo].[Users]
           ([name]
           ,[surname]
           ,[email])
        VALUES
           (@name
           ,@surname
           ,@email)
        `).then(() => {
            res.status(201).send({'message' : messages[201]})
        }).catch((err) => {
            throw err;
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send({'error':messages[500]})
    })
})
router.delete('/deleteUser',function(res,req){
    conn.poolPromise.then((pool)=> {
        const request = pool.request();
        request.input('userId', req.body.userId);
        request.query(`
        DELETE FROM User 
        WHERE userId = @userId`).then(() => {
                res.status(200).send({'message' : messages[200]})
            }).catch((err) => {
                throw err;
            })
    }).catch((err) => {
        console.log(err)
        res.status(500).send({'error':messages[500]})
    })
})

router.post('/addTeam',function(res,req){
    conn.poolPromise.then((pool)=> {
        const request = pool.request();
        request.input('teamName', req.body.teamName);
        request.input('quizId',req.body.quizId)
        request.input('teamScore',0)
        request.query(`
        INSERT INTO [dbo].[Teams]
           ([teamName]
           ,[quizId]
           ,[teamScore])
        VALUES
           (@teamName,
            @quizId
            @teamScore)`).then(() => {
                res.status(201).send({'message' : messages[201]})
            }).catch((err) => {
                throw err;
            })
    }).catch((err) => {
        console.log(err)
        res.status(500).send({'error':messages[500]})
    })
})
router.put('/updateTeam') //TODO 
router.delete('/deleteTeam',function(res,req){
    conn.poolPromise.then((pool)=> {
        const request = pool.request();
        request.input('teamId', req.body.teamId);
        request.query(`
        DELETE FROM Teams 
        WHERE teamID = @teamId`).then(() => {
                res.status(200).send({'message' : messages[200]})
            }).catch((err) => {
                throw err;
            })
    }).catch((err) => {
        console.log(err)
        res.status(500).send({'error':messages[500]})
    })
})

router.post('/addTeamMember',function(res,req){
    conn.poolPromise.then((pool)=> {
        const request = pool.request();
        request.input('teamId', req.body.teamId);
        request.input('userId',req.body.userId)
        request.input('captain',req.body.quizId)
        request.query(`
        INSERT INTO [dbo].[TeamMembers]
           ([teamId]
           ,[userId]
           ,[captain])
        VALUES
           (@teamId,
            @userId
            @captain)`).then(() => {
                res.status(201).send({'message' : messages[201]})
            }).catch((err) => {
                throw err;
            })
    }).catch((err) => {
        console.log(err)
        res.status(500).send({'error':messages[500]})
    })
})
router.delete('/removeTeamMember', function(res,req){
    conn.poolPromise.then((pool)=> {
        const request = pool.request();
        request.input('teamId', req.body.teamId);
        request.input('userId',req.body.userId)
        request.query(`
        DELETE FROM TeamMembers 
        WHERE teamID = @teamId  
        AND userID = @userId`).then(() => {
                res.status(200).send({'message' : messages[200]})
            }).catch((err) => {
                throw err;
            })
    }).catch((err) => {
        console.log(err)
        res.status(500).send({'error':messages[500]})
    })
})


router.post('/createCaptainAndTeam',function(res,req){
    conn.poolPromise.then((pool)=> {
        const request = pool.request();
        request.input('name', req.body.teamId);
        request.input('surname',req.body.userId)
        request.input('email',req.body.quizId)
        request.input('teamName',req.body.quizId)
        request.input('quizId',req.body.quizId)
        request.execute('InsertCaptain').then(() => {
                res.status(201).send({'message' : messages[201]})
            }).catch((err) => {
                throw err;
            })
    }).catch((err) => {
        console.log(err)
        res.status(500).send({'error':messages[500]})
    })
})

module.exports = router