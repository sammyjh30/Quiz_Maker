USE QuizMakerDB
GO  

CREATE PROCEDURE InsertQuestion 
	@quizId INT,
    @roundNumber INT,   
    @questionType INT,
	@questionNumber INT,
	@text VARCHAR(255),
	@correctAnswer BIT  = NULL,
	@rightAnswer VARCHAR(255)  = NULL,
	@wrongAnswer1 VARCHAR(255)  = NULL,
	@wrongAnswer2 VARCHAR(255)  = NULL,
	@wrongAnswer3 VARCHAR(255)  = NULL
	
AS   
DECLARE @questionId INT
BEGIN TRANSACTION
    SET NOCOUNT ON;  
	
	BEGIN TRY
		INSERT INTO Questions(quizId,roundNumber,questionType,questionNumber)
		VALUES(@quizId,@roundNumber,@questionType,@questionNumber)
	SET @questionId = SCOPE_IDENTITY()
		IF @questionType = 1
				INSERT INTO TFQuestions(questionId,[text],correctAnswer)
				VALUES(@questionId,@text,@correctAnswer)
		ELSE IF @questionType = 2  
				INSERT INTO MultipleChoiceQuestions(questionId,[text],rightAnswer,wrongAnswer1,wrongAnswer2,wrongAnswer3)
				VALUES(@questionId,@text,@rightAnswer,@wrongAnswer1,@wrongAnswer2,@wrongAnswer3)
		ELSE
		 THROW 50010, 'Incorrect question type', 1; 
	END TRY
	BEGIN CATCH 
	 IF @@TRANCOUNT > 0  
        ROLLBACK TRANSACTION; 
		THROW 50010, 'Was not able to insert double check that quiz exists and that data is correct', 1; 		
	END CATCH 

	IF @@TRANCOUNT > 0  
        COMMIT TRANSACTION;  
GO  
