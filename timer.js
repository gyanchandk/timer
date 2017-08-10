//var timer=document.getElementById("timer").innerHTML("hello world");

window.onload = function(e){ 

	myFunction();


	 function myFunction() {
    
    document.getElementById("currentTime").innerHTML=moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
     
    //current timing
    var startHour=parseInt(moment().format('h'));
    var startMinute=parseInt(moment().format('m'));
    var startSecond=parseInt(moment().format('s'));
    var startDay=parseInt(moment().format('D'));
    var startMonth=parseInt(moment().format('M'));
    var startYear=parseInt(moment().format('Y'));  //current date and time
    
    //end timing
    var endHour=9;
    var endMinute=0;
    var endSecond=0;
    var endDay=26;  
    var endMonth=11;
    var endYear=2017;     //09:00:00 26th november 2017


    //find the difference
    var start=moment([startYear,startMonth,startDay,startHour,startMinute,startSecond]);
    var end = moment([endYear,endMonth,endDay,endHour,endMinute,endSecond]);

   
    //calculation
    var remainingSecond=parseInt(end.diff(start,"seconds"));
    
    var hours = Math.round(remainingSecond/3600);
    remainingSecond %=3600;

    var days = Math.round(hours/24);
    hours%=24;

    var minutes = Math.round(remainingSecond/60);
    remainingSecond%=60;

    var seconds =remainingSecond;
    
    // console.log(days);
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);

    //set the values to DOM
    var remainingTime = days+" d"+hours + " h"+ minutes + " m"+seconds+" s";
   
    if(days>0)
      document.getElementById("days").innerHTML=days;
    
    if(hours>0)
      document.getElementById("hours").innerHTML=hours;
    
    if(minutes>0)
      document.getElementById("minutes").innerHTML=minutes;

    document.getElementById("seconds").innerHTML=seconds;
    

    setInterval(myFunction,1000);
}


}

