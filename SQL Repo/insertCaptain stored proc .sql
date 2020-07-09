USE QuizMakerDB
GO

CREATE PROCEDURE InsertCaptain(
@userId VARCHAR(128),
@name VARCHAR(100),
@surname VARCHAR(100),
@email VARCHAR(255),
@teamName VARCHAR(100),
@quizId INT 
) AS 
DECLARE @TeamId INT

BEGIN TRANSACTION 
SET NOCOUNT ON;  
	
	BEGIN TRY
		INSERT INTO [Users]
		([userId],[name],surname,email)
		VALUES
		(@userId,@name,@surname,@email)

		INSERT INTO [Teams]
		(teamName, quizId, teamScore,teamCaptainId)
		VALUES
		(@teamName,@quizId,0,@userId)
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
