// This will calculate the time since April 3rd, 2015, and update the countbox1 div with that duration.
// For now, I think that I will display the time in years plus months plus days.


	'use strict';


// Function name:	calculateDays()
// Purpose:		This function will calculate the number of days from an event to today, or from today to an event.
// Parameters:		eventDate: the day of the event in ISO-8601 format.  This can be YYYY-MM-DD, or YYYY-MM-DDTHH:MM (UTC time).
// Returns:		none
// Preconditions:	none
// Postconditions:	none
// Usage:			The text around this should read similar to "This even will happen in " + result + " from now.", or "This event happened " + result + " ago."
//	I may decide to accommodate prefix and postfix text for both future and past events.  That will require a lot of extra code in the if-else statements below.
function calculateDays( eventDate )
{
	// Set a default value for 'display', in case all later assignments fail.
	var display = "JavaScript had an issue.  Please tell Adam.";

	// Get the current epoch time.
	var currentEpochTime = new Date().getTime();

	// Get the epoch time of the event.
	//var eventMS = Date.parse( "April 3, 2015" );
	//var eventMS = Date.parse( "2015-04-03T20:00:00" );
	var eventMS = Date.parse( eventDate );

	// If the event was in the past.
	if( currentEpochTime > eventMS )
	{
		var deltaMS = currentEpochTime - eventMS;
	}
	// If the event is in the future.
	else
	{
		var deltaMS = eventMS - currentEpochTime;
	}

	// Get the time delta in various units.
	var deltaSeconds = deltaMS / 1000;
	var deltaMinutes = deltaSeconds / 60;
	var deltaHours = deltaMinutes / 60;
	var deltaDays = deltaHours / 24;
	var deltaMonths = deltaDays / 30;
	var deltaYears = deltaDays / 365;
	
	// Deal with more than 1 year and more than 1 day.
	if( deltaDays > ( 365 * 2 ) && parseInt( deltaDays % 365 ) > 1 )
	{
		display = parseInt( deltaYears ) + " years and " + parseInt( deltaDays % 365 ) + " days";
	}
	// Deal with more than 1 year and only 1 day.
	else if( deltaDays > ( 365 * 2 ) && parseInt( deltaDays % 365 ) == 1 )
	{
		display = parseInt( deltaYears ) + " years and " + parseInt( deltaDays % 365 ) + " day";
	}
	// Deal with 1 year and more than 1 day.
	else if( deltaDays > 365 && parseInt( deltaDays % 365 ) > 1 )
	{
		display = parseInt( deltaYears ) + " year and " + parseInt( deltaDays % 365 ) + " days";
	}
	// Deal with 1 year and only 1 day.
	else if( deltaDays > 365 && parseInt( deltaDays % 365 ) == 1 )
	{
		display = parseInt( deltaYears ) + " year and " + parseInt( deltaDays % 365 ) + " day";
	}
	// Deal with more than 1 day.
	else if( deltaDays > 1 )
	{
		display = parseInt( deltaDays ) + " days";
	}
	// Deal with hours.
	else if( deltaDays < 1 )
	{
		display = deltaHours + " hours";
	}
	// I decided not to deal with minutes or seconds, but those can easily be added.
	else
	{
		display = "Lots of things went poorly.  Please tell Adam he fails at conditionals.";
	}
	// Update 'countbox1' with the time delta and appropriate text.
	document.getElementById( 'countbox1' ).innerHTML = display;
} // End of calculateDays() function.
