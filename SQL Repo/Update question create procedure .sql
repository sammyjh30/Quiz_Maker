USE [QuizMakerDB]
GO

CREATE PROCEDURE UpdateQuestion
	@questionId INT,
    @roundNumber INT = NULL,   
	@questionNumber INT = NULL,
	@text VARCHAR(255) = NULL,
	@correctAnswer BIT  = NULL,
	@rightAnswer VARCHAR(255)  = NULL,
	@wrongAnswer1 VARCHAR(255)  = NULL,
	@wrongAnswer2 VARCHAR(255)  = NULL,
	@wrongAnswer3 VARCHAR(255)  = NULL
	
AS 
BEGIN TRANSACTION
SET NOCOUNT ON; 
	DECLARE @questionType INT
		SELECT @questionType = questionType FROM Questions WHERE questionId = @questionId
    
	IF @roundNumber IS NULL 
		SELECT 	@roundNumber = roundNumber FROM Questions WHERE questionId = @questionId
	IF @questionNumber IS NULL 
		SELECT 	@questionNumber = questionNumber FROM Questions WHERE questionId = @questionId
BEGIN TRY
	UPDATE Questions
	SET roundNumber = @roundNumber,
	questionNumber = @questionNumber
	WHERE questionId =@questionId 

	IF @questionType = 1	
		IF @text IS NULL
			SELECT 	@text = [text] FROM TFQuestions WHERE questionId = @questionId
		IF @correctAnswer IS NULL 
			SELECT 	@correctAnswer = correctAnswer FROM TFQuestions WHERE questionId = @questionId
		UPDATE TFQuestions 
		SET [text] = @text,
		correctAnswer = @correctAnswer
		WHERE questionId = @questionId
	IF @questionType = 2  
			IF @text IS NULL 
				SELECT 	@text = [text] FROM MultipleChoiceQuestions WHERE questionId = @questionId
			IF @rightAnswer IS NULL
				SELECT 	@rightAnswer = rightAnswer FROM MultipleChoiceQuestions WHERE questionId = @questionId
			IF @wrongAnswer1 IS NULL 
				SELECT 	@wrongAnswer1 = wrongAnswer1 FROM MultipleChoiceQuestions WHERE questionId = @questionId
			IF @wrongAnswer2 IS NULL 
				SELECT 	@wrongAnswer2 = wrongAnswer2 FROM MultipleChoiceQuestions WHERE questionId = @questionId
			IF @wrongAnswer3 IS NULL 
				SELECT 	@wrongAnswer3 = wrongAnswer3 FROM MultipleChoiceQuestions WHERE questionId = @questionId
			UPDATE MultipleChoiceQuestions
			SET [text] = @text,
			rightAnswer = @rightAnswer,
			wrongAnswer1= @wrongAnswer1,
			wrongAnswer2= @wrongAnswer2,
			wrongAnswer3= @wrongAnswer3
			WHERE questionId = @questionId
END TRY
BEGIN CATCH 
	 IF @@TRANCOUNT > 0  
        ROLLBACK TRANSACTION;  
		THROW 50010, 'Error happened in UpdateQuestion stored procedure', 1; 
	END CATCH 

	IF @@TRANCOUNT > 0  
        COMMIT TRANSACTION;  
GO

