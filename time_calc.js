// On Enter Button Click:
function enter() {
	
	// Get current total time values for hh, mm, ss
	var curr_s = document.getElementById("sec").textContent;
	curr_s = parseInt(curr_s, 10);
	var curr_m = document.getElementById("min").textContent;
	curr_m = parseInt(curr_m, 10);
	var curr_h = document.getElementById("hr").textContent;
	curr_h = parseInt(curr_h, 10);

	// Read in Drop Down Menu For sec
	var read_s = document.getElementById("sss");
	var new_s = read_s.options[read_s.selectedIndex].value;
		
	
		// Convert string to num
		new_s = parseInt(new_s, 10);
	
		// Add new seconds to current seconds
		curr_s = curr_s + new_s;
		
		// If total seconds >= 60, increment minutes
		if ( curr_s >= 60 ) {
			
			curr_s = curr_s - 60;
			curr_m = curr_m + 1;
		}

	// Read in Drop Down Menu for min
	var read_m = document.getElementById("mms");
	var new_m = read_m.options[read_m.selectedIndex].value;
	
		new_m = parseInt(new_m, 10);
		
		curr_m = curr_m + new_m;
		
		// If total min >= 60, increment hr
		if ( curr_m >= 60 ) {
			
			curr_m = curr_m - 60;
			curr_h = curr_h + 1;
		}

	// Read in Drop Down Menu for hrs
	var read_h = document.getElementById("hhs");
	var new_h = read_h.options[read_h.selectedIndex].value;
	
		new_h = parseInt(new_h, 10);
		curr_h = curr_h + new_h;
	
	// Display total time hh: mm: ss
	document.getElementById("hr").innerHTML = curr_h;
	document.getElementById("min").innerHTML = curr_m;
	document.getElementById("sec").innerHTML = curr_s;
}

// On Reset Button Click:
function reset() {
	// Get Display Time
	var curr_s = document.getElementById("sec").textContent;
	curr_s = parseInt(curr_s, 10);
	var curr_m = document.getElementById("min").textContent;
	curr_m = parseInt(curr_m, 10);
	var curr_h = document.getElementById("hr").textContent;
	curr_h = parseInt(curr_h, 10);
	
	// Set total time sec, min, hr = 0
	curr_s = 0;
	curr_m = 0;
	curr_h = 0;
	
	// Display total time 00: 00: 00
	document.getElementById("hr").innerHTML = curr_h;
	document.getElementById("min").innerHTML = curr_m;
	document.getElementById("sec").innerHTML = curr_s;
}