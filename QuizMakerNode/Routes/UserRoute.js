const express = require('express');
const router = express.Router();
const conn = require('../services/dbconnection')
const messages = require('../Global/Messages');

router.post('/addUser',function(req,res){
    conn.poolPromise.then((pool)=> {
        const request = pool.request();
        request.input('userId',req.body.userId)
        request.input('name', req.body.name);
        request.input('surname', req.body.surname);
        request.input('email', req.body.email);
        request.query(`INSERT INTO [dbo].[Users]
           ([userId],
            [name]
           ,[surname]
           ,[email])
        VALUES
           (@userId
            ,@name
           ,@surname
           ,@email)
        `).then((data) => {
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

router.put('/updateUser',function(req,res){
    let name = req.body.name
    let surname = req.body.surname
    let email = req.body.email
    conn.poolPromise.then((pool)=> {
        const select = pool.request();
        select.input('userId',req.body.userId);
        select.query(`
        SELECT * FROM Users WHERE userId = @userId
       `).then((data) => {
            if(!name){
                name = data.recordset[0].name
            }
            if(!surname){
                surname = data.recordset[0].surname
            }
            if(!email){
                email = data.recordset[0].email
            }
            const request = pool.request();
            request.input('name',name);
            request.input('surname',surname);
            request.input('email',email)
            request.input('userId',req.body.userId);
            request.query(`UPDATE users
            SET name = @name,
            surname = @surname,
            email = @email
            WHERE userId = @userId`).then(() => {
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


router.delete('/deleteUser/:userId',function(req,res){
    conn.poolPromise.then((pool)=> {
        const request = pool.request();
        request.input('userId', req.params.userId);
        request.query(`
        DELETE FROM Users
        WHERE userId = @userId`).then(() => {
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

router.get('/getUser/:userId',function(req,res){
    conn.poolPromise.then((pool)=> {
        const request = pool.request();
        request.input('userId', req.params.userId);
        request.query(`
        SELECT * FROM Users 
        WHERE userId = @userId`).then((data) => {
                res.status(200).send(data.recordset)
            }).catch((err) => {
                console.log(err)
                res.status(500).send({'error':messages[500]})
            })
    }).catch((err) => {
        console.log(err)
        res.status(500).send({'error':messages[500]})
    })
})

router.get('/getUserByEmail',function(req,res){
    conn.poolPromise.then((pool)=> {
        const request = pool.request();
        request.input('email', req.body.email);
        request.query(`
        SELECT * FROM Users 
        WHERE email = @email`).then((data) => {
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

router.post('/addTeam',function(req,res){
    conn.poolPromise.then((pool)=> {
        const request = pool.request();
        request.input('teamName', req.body.teamName);
        request.input('quizId',req.body.quizId)
        request.query(`
        INSERT INTO [dbo].[Teams]
           ([teamName]
           ,[quizId]
           ,[teamScore])
        VALUES
           (@teamName,
            @quizId,
            0); 
           
            SELECT SCOPE_IDENTITY() AS id;`).then((data) => {
                res.status(201).send({'message' : messages[201], 'recordSet':data.recordset})
            }).catch((err) => {
                console.log(err)
        res.status(500).send({'error':messages[500]})
            })
    }).catch((err) => {
        console.log(err)
        res.status(500).send({'error':messages[500]})
    })
})
router.put('/updateTeamName',function(req,res){
    conn.poolPromise.then((pool)=> {
        const request = pool.request();
        request.input('teamName', req.body.teamName);
        request.input('teamId', req.body.teamId)
        request.query(`
        UPDATE Teams 
        SET teamName = @teamName
        WHERE teamId = @teamId`).then(() => {
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
router.delete('/deleteTeam/:teamId',function(req,res){
    conn.poolPromise.then((pool)=> {
        const request = pool.request();
        request.input('teamId', req.params.teamId);
        request.query(`
        DELETE FROM Teams 
        WHERE teamID = @teamId`).then(() => {
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

router.get('/getTeam/:teamId',function(req,res){
    conn.poolPromise.then((pool)=> {
        const request = pool.request();
        request.input('teamId', req.params.teamId);
        request.query(`
        SELECT * FROM teams WHERE teamId = @teamId`).then((data) => {
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

router.get('/getTeamsByQuizId/:quizId',function(req,res){
    conn.poolPromise.then((pool)=> {
        const request = pool.request();
        request.input('quizId', req.params.quizId);
        request.query(`
        SELECT * FROM teams WHERE quizId = @quizId`).then((data) => {
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

router.put('/increaseScore',function(req,res){
    conn.poolPromise.then((pool)=> {
        const request = pool.request();
        request.input('increase', req.body.increase);
        request.input('teamId', req.body.teamId)
        request.query(`
        UPDATE Teams 
        SET teamScore = teamScore + @increase
        WHERE teamId = @teamId`).then(() => {
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

router.get('/getTeamMembers/:teamId',function(req,res){
    conn.poolPromise.then((pool)=> {
        const request = pool.request();
        request.input('teamId', req.params.teamId);
        request.query(`SELECT users.* FROM TeamMembers 
        INNER JOIN Users on TeamMembers.userID = Users.userId
        WHERE teamId = @teamId`).then((data) => {
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

router.post('/addTeamMember',function(req,res){
    conn.poolPromise.then((pool)=> {
        const request = pool.request();
        request.input('teamId', req.body.teamId);
        request.input('userId',req.body.userId)
        request.input('captain',req.body.captain)
        request.query(`
        INSERT INTO [dbo].[TeamMembers]
           ([teamId]
           ,[userId]
           ,[captain])
        VALUES
           (@teamId,
            @userId,
            @captain)`).then(() => {
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
router.delete('/removeTeamMember', function(req,res){
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
                console.log(err)
                res.status(500).send({'error':messages[500]})
            })
    }).catch((err) => {
        console.log(err)
        res.status(500).send({'error':messages[500]})
    })
})


router.post('/createCaptainAndTeam',function(req,res){
    conn.poolPromise.then((pool)=> {
        const request = pool.request();
        request.input('userId',req.body.userId)
        request.input('name', req.body.name);
        request.input('surname',req.body.surname)
        request.input('email',req.body.email)
        request.input('teamName',req.body.teamName)
        request.input('quizId',req.body.quizId)
        request.execute('InsertCaptain').then(() => {
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

router.get('/dashBoard/:userId',function(req,res){
    conn.poolPromise.then((pool)=> {
        const request = pool.request();
        request.input('userId', req.params.userId);
        request.query(`SELECT Quiz.quizId , 0 as hostBool ,TeamMembers.captain,Teams.teamId ,Quiz.quizName as quizName, Quiz.startDateTime FROM Users 
        INNER JOIN TeamMembers ON Users.userId = TeamMembers.userID
        INNER JOIN Teams ON TeamMembers.teamID = Teams.teamId
        INNER JOIN Quiz  ON Teams.quizId = Quiz.quizId
        WHERE Users.userId = @userId
        UNION 
        SELECT Quiz.quizId, 1 as hostBool, 0 as captain,null, Quiz.quizName, Quiz.startDateTime  FROM Quiz
        WHERE Quiz.hostId = @userId`).then((data) => {
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

module.exports = router