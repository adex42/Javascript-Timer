var a = window.prompt("Enter the time to countdown: "); //getting the time to which we need to countdown 
var finaldate = new Date(a).getTime(); //getting the time entered by user and saving it into a variable  
var x = setInterval(function () { //setinterval function to repeatidly update time  
    var now = new Date().getTime();//getting the current time 
    var distance = finaldate - now; //calculating the time between the current time and the final  time 
    //calculating the tiem remaining 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //displaying the time 
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    //termination condition for the timer
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "The countdown has ended";
    }

}, 1000);