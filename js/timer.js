// This will calculate the time since April 3rd, 2015, and update the countbox1 div with that duration.
// For now, I think that I will display the time in years plus months plus days.


//	'use strict';


	var daysSince = 0;
	var daysUntil = 0;


// Function name:	calculateDays()
// Purpose:		This function will calculate the number of days from or two an event.
// Parameters:		none
// Returns:		none
// Preconditions:	none
// Postconditions:	none
function calculateDays()
{
	// Create a new Date object in order to store time.
	var currentEpochTime = new Date().getTime();
	var marriageMS = Date.parse( "April 3, 2015" );
	var currentDelta = currentEpochTime - marriageMS;
	var currentSeconds = currentDelta / 1000;
	var currentMinutes = currentSeconds / 60;
	var currentHours = currentMinutes / 60;
	var currentDays = currentHours / 24;
	var currentMonths = currentDays / 30;
	var currentYears = currentDays / 365;
	var display = parseInt( currentDays ) + " days";
	document.getElementById( 'countbox1' ).innerHTML = display;
} // End of calculateDays() function.


window.onload = calculateDays;
