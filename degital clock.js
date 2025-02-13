var hours = document.getElementById('hours');
var min = document.getElementById('min');
var sec= document.getElementById('sec');


setInterval(() => {

    var currantTime = new Date();

    hours.innerHTML = currantTime.getHours();     
    
    min.innerHTML = currantTime.getMinutes();

    if(currantTime.getSeconds() < 10 )
        sec.innerHTML = "0" + currantTime.getSeconds();

    else
    sec.innerHTML = currantTime.getSeconds();
    
},1000);