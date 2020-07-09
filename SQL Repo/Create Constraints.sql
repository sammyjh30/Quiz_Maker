USE QuizMakerDB
GO


ALTER TABLE TFQuestions
   ADD CONSTRAINT FK_TFQuestions FOREIGN KEY (questionId)
      REFERENCES Questions(questionId)
      ON DELETE CASCADE
      ON UPDATE CASCADE


ALTER TABLE MultipleChoiceQuestions
	ADD CONSTRAINT FK_MultipleChoiceQuestions FOREIGN KEY (questionId)
		REFERENCES Questions(questionId)
		ON DELETE CASCADE
		ON UPDATE CASCADE

ALTER TABLE Questions
	ADD CONSTRAINT FK_QuestionsQuiz FOREIGN KEY (quizId)
		REFERENCES Quiz(quizId)
		ON DELETE CASCADE
		ON UPDATE CASCADE

ALTER TABLE Quiz
	ADD CONSTRAINT FK_QuizTeam FOREIGN KEY (hostId)
		REFERENCES Users(userId)

ALTER TABLE Teams
	ADD CONSTRAINT FK_TeamQuiz FOREIGN KEY (quizId)
		REFERENCES Quiz(quizId)

ALTER TABLE TeamMembers
	ADD CONSTRAINT FK_TeamMembers FOREIGN KEY (teamId)
		REFERENCES Teams(teamId)

ALTER TABLE TeamMembers
	ADD CONSTRAINT FK_UsersMembers FOREIGN KEY  (userId)
		REFERENCES Users(userId)

ALTER TABLE Teams
	ADD CONSTRAINT FK_CAPTAINID FOREIGN KEY (teamCaptainId)
		REFERENCES Users(userId)
