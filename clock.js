function myDigitalClock() {
    var d1 = new Date();
    var hours = d1.getHours(); // 0 - 23
    var minutes = d1.getMinutes(); // 0 - 59
    var seconds = d1.getSeconds(); // 0 - 59
    var zone = "AM";

    // Leading seconds for minutes and seconds less than 10
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Creating digital clock format (hh:mm:ss AM/PM)
    let digitalClock = hours + ":" + minutes + ":" + seconds + " " + zone;

    // Display the digital clock in the console
    console.log(digitalClock);
}

// Call the myDigitalClock function to start the digital clock
myDigitalClock();
