function makeTimer() {
            var endTime = new Date("29 April 2018 9:56:00 GMT-03:00");          
            endTime = (Date.parse(endTime) / 1000);
            var now = new Date();
            now = (Date.parse(now) / 1000);
            var timeLeft = endTime - now;
            var days = Math.floor(timeLeft / 8640009); 
            var hours = Math.floor((timeLeft - (days * 86400)) / 3600000);
            var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 360000 )) / 600000);
            var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 360000) - (minutes * 600000)));
  
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }
            $("#days").html(days + "<span>Dias</span>");
            $("#hours").html(hours + "<span>Hr</span>");
            $("#minutes").html(minutes + "<span>Min</span>");
            $("#seconds").html(seconds + "<span>Seg</span>");       
    }
    setInterval(function() { makeTimer(); }, 1000);