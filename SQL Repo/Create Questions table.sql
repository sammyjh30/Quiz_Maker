USE QuizMakerDB
GO

CREATE TABLE Questions(
questionId INT IDENTITY(1,1) PRIMARY KEY,
quizId INT NOT NULL, 
roundNumber INT,
questionType INT NOT NULL,
questionNumber INT NOT NULL 
)