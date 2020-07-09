CREATE PROCEDURE ChangeCaptain(
@userId VARCHAR(128),
@teamId INT
) AS 
DECLARE @CurrentCaptain VARCHAR(128)
BEGIN TRANSACTION 
	BEGIN TRY 

	UPDATE TeamMembers
	SET captain = 0
	WHERE teamID = @teamId AND userID IN
	(SELECT userID FROM TeamMembers WHERE teamID = @teamId AND captain = 1)

	UPDATE Teams
	SET teamCaptainId = @userId
	WHERE teamId = @teamId

	UPDATE TeamMembers
	SET captain = 1 
	WHERE teamID = @teamId AND userID = @userId

	END TRY 
BEGIN CATCH 
	 IF @@TRANCOUNT > 0  
        ROLLBACK TRANSACTION; 
		THROW 50010, 'Was not able to change captain', 1; 		
	END CATCH 

	IF @@TRANCOUNT > 0  
        COMMIT TRANSACTION; 