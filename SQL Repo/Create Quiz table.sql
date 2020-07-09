USE QuizMakerDB
GO

CREATE TABLE Quiz(
quizId INT IDENTITY(1,1) PRIMARY KEY,
quizName VARCHAR(100) NOT NULL,
hostId VARCHAR(128) NOT NULL,
startDateTime DATETIME NOT NULL
)