// Get the number of milliseconds passed from Jan 1 1970 till the countdown date and time
var countDownDate = new Date("Feb 28, 2023 18:00:00").getTime();

// Function to update the count down every second
var x = setInterval(function () {

    // Get the number of milliseconds passed from Jan 1 1970 till now
    var now = new Date().getTime();

    // Find the difference between now and the count down date
    var difference = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Displaying the result
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, display EXPIRED
    if (difference < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }

}, 1000);