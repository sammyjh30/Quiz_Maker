USE QuizMakerDB
GO

CREATE TABLE TFQuestions(
questionId INT NOT NULL,
[text] VARCHAR(255) NOT NULL,
correctAnswer BIT NOT NULL
)