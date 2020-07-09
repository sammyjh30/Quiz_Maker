CREATE PROCEDURE RandomlySetNewCaptain(
@teamId INT 
)
AS 
DECLARE @userId VARCHAR(128)
BEGIN TRANSACTION 
	BEGIN TRY 
	SELECT TOP 1 @userId = userId  FROM TeamMembers WHERE teamID = @teamId AND captain = 0
	
	EXEC ChangeCaptain @userId = @userId , @teamId = @teamId

	END TRY 
BEGIN CATCH 
	 IF @@TRANCOUNT > 0  
        ROLLBACK TRANSACTION; 
		THROW 50010, 'Was not able to change captain', 1; 		
	END CATCH 

	IF @@TRANCOUNT > 0  
        COMMIT TRANSACTION; 