USE QuizMakerDB
GO

CREATE TABLE Users
(
	[userId] VARCHAR(128) PRIMARY KEY,
	[name] VARCHAR(100),
	[surname] VARCHAR(100),
	[email] VARCHAR(255)
)