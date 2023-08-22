/**
 * Display a digital clock in the console.
 * The clock format is: hh:mm:ss AM/PM
 */
function myDigitalClock() {
    // Get the current date and time
    var d1 = new Date();

    // Extract hours, minutes, and seconds from the date
    var hours = d1.getHours(); // 0 - 23
    var minutes = d1.getMinutes(); // 0 - 59
    var seconds = d1.getSeconds(); // 0 - 59

    // Initialize the time zone indicator as "AM" or "PM"
    var zone = (hours >= 12) ? "PM" : "AM";

    // Add leading zeros for minutes and seconds less than 10
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Create the digital clock format (hh:mm:ss AM/PM)
    let digitalClock = hours + ":" + minutes + ":" + seconds + " " + zone;

    // Display the digital clock in the console
    console.log(digitalClock);
}

// Call the myDigitalClock function to start the digital clock
myDigitalClock();

// To log the time every second uncomment the following line
// setInterval(myDigitalClock, 1000);

