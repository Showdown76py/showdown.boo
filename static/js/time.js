function changeTimezone(date, ianatz) {
    var invdate = new Date(date.toLocaleString('en-US', {
      timeZone: ianatz
    }));
  
    var diff = date.getTime() - invdate.getTime();
  
    return new Date(date.getTime() - diff); 
}

function formatTime(date) {
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
}

var here = new Date();
var there = changeTimezone(here, "Europe/Paris");
document.getElementById("time").innerHTML = formatTime(there);

var seconds = here.getSeconds();
setInterval(function() {
    seconds += 1;
    if (seconds % 60 == 0) {
        here = new Date();
        there = changeTimezone(here, "Europe/Paris");
        document.getElementById("time").innerHTML = formatTime(there);
        seconds = here.getSeconds();
    }
}, 1000);

