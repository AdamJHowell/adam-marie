// This will calculate the time between now and the time passed to this , and update the passed div ID with that duration.
// For now, I think that I will display the time in years plus months plus days.


	'use strict';


// Function name:	calculateDays()
// Purpose:		This function will calculate the duration between an event to today.
// Parameters:		eventDate: the day of the event in ISO-8601 format.  This can be YYYY-MM-DD, or YYYY-MM-DDTHH:MM (UTC time).  
//				divID: the div to update.  
//				futurePrefix: the prefix text if the event has yet to happen. 
//				futurePostfix: the postfix text if the event has yet to happen.
//				pastPrefix: the prefix text if the event has already happened. 
//				pastPostfix: the postfix text if the event has already happened.
// Returns:		none
// Preconditions:	none
// Postconditions:	none
function calculateDays( eventDate, divID, futurePrefix, futurePostfix, pastPrefix, pastPostfix )
{
	// Set a default value for 'display', in case all later assignments fail.
	var display = "JavaScript had an issue.  Please tell Adam.";

	// Get the existing content of the div.
	var oldDivText = document.getElementById( divID ).innerText;

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
		var past = 1;
	}
	// If the event is in the future.
	else
	{
		var deltaMS = eventMS - currentEpochTime;
		var past = 0;
	}

	// Get the time delta in various units.
	var deltaSeconds = deltaMS / 1000;
	var deltaMinutes = deltaSeconds / 60;
	var deltaHours = deltaMinutes / 60;
	var deltaDays = deltaHours / 24;
	var deltaWeeks = deltaDays / 7;
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
	// Deal with whole years.
	else if( deltaDays % 365 == 0 )
	{
		display = parseInt( deltaYears ) + " year and " + parseInt( deltaDays % 365 ) + " days";
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
	// Deal with whole weeks.
	else if( deltaDays > 7 && deltaDays % 7 == 0 )
	{
		display = parseInt( deltaWeeks ) + " weeks";
	}
	// Deal with weeks and a remainder of more than one day.
	else if( deltaDays > 7 && deltaDays % 7 >= 2 )
	{
		display = parseInt( deltaWeeks ) + " weeks and " + parseInt( deltaDays % 7 ) + " days";
	}
	// Deal with weeks and a remainder of exactly one day.  I use greater-than-or-equal-to here to catch fractional days that are still less than 2.
	else if( deltaDays > 7 && parseInt( deltaDays % 7 >= 1 ) )
	{
		display = parseInt( deltaWeeks ) + " weeks and " + parseInt( deltaDays % 7 ) + " day";
	}
	// Deal with more than 1 day.
	else if( deltaDays > 1 )
	{
		display = parseInt( deltaDays ) + " days";
	}
	else if( parseInt( deltaDays == 1 ) )
	{
		display = parseInt( deltaDays ) + " day";
	}
	// Deal with hours.
	else if( deltaDays < 1 )
	{
		display = deltaHours.toFixed(1) + " hours";
	}
	// I decided not to deal with minutes or seconds, but those can easily be added.
	else
	{
		display = "Lots of things went poorly.  Please tell Adam he fails at conditionals.";
	}
	
	if( past )
	{
		// Add the pastPrefix and pastPostfix text.
		var output = pastPrefix + display + pastPostfix;
	}
	else
	{
		// Add the futurePrefix and futurePostfix text.
		var output = futurePrefix + display + futurePostfix;
	}

	// Update divID with the time delta and appropriate text.
	document.getElementById( divID ).innerHTML = output;
} // End of calculateDays() function.
