USE QuizMakerDB
GO

CREATE PROCEDURE InsertCaptain(
@name VARCHAR(100),
@surname VARCHAR(100),
@email VARCHAR(255),
@teamName VARCHAR(100),
@quizId INT 
) AS 
DECLARE @UserId INT, @TeamId INT

BEGIN TRANSACTION 
SET NOCOUNT ON;  
	
	BEGIN TRY
		INSERT INTO [Users]
		([name],surname,email)
		VALUES
		(@name,@surname,@email)
		SET @UserId = SCOPE_IDENTITY()

		INSERT INTO [Teams]
		(teamName, quizId, teamScore)
		VALUES
		(@teamName,@quizId,0)
		SET @TeamId = SCOPE_IDENTITY()

		INSERT INTO [TeamMembers]
		(userID,teamID,captain)
		VALUES 
		(@UserId,@TeamId,1)
	END TRY
	BEGIN CATCH 
	 IF @@TRANCOUNT > 0  
        ROLLBACK TRANSACTION; 
		THROW 50010, 'Was not able to create the captain and team', 1; 		
	END CATCH 

	IF @@TRANCOUNT > 0  
        COMMIT TRANSACTION; 
