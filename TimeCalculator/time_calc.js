var tc = {

	// Start state of the calculator
	start: function () {
	
		// Everything should be at 00
	
	
	},
	
	// function for User input (hours: minutes: seconds)
	input: function () {
	
	
		// User presses enter --> Total display updates and user input box resets
	
	
	},
	
	// What about a clear time button?
	
	reset: function () {
	
	}
	
};

// User inputs hours, mins, secs using drop box
// When user clicks enter and lets go of enter:
	// Add numbers from drop box to total time hh, mm, ss
	// If ss >= 60, increment mm by 1
		// new ss = current ss - 60
	// If mm >= 60, increment hh by 1
		// new mm = current mm - 60
	// hh can go past 60 because I'm not implementing days yet


window.addEventListener("load", tc.start);