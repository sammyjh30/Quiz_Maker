USE QuizMakerDB
GO

CREATE TABLE MultipleChoiceQuestions (
questionId INT NOT NULL,
[text] VARCHAR(255) NOT NULL,
rightAnswer VARCHAR(255) NOT NULL,
wrongAnswer1 VARCHAR(255) NOT NULL,
wrongAnswer2 VARCHAR(255) NOT NULL,
wrongAnswer3 VARCHAR(255) NOT NULL
)