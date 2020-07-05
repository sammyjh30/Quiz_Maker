USE QuizMakerDB
GO

CREATE TABLE Users
(
	userId int IDENTITY(1,1) PRIMARY KEY,
	[name] VARCHAR(100),
	[surname] VARCHAR(100),
	[email] VARCHAR(255)
)