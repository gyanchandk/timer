

window.onload = function(e){ 

	myFunction();


	 function myFunction() {
    
    document.getElementById("currentTime").innerHTML=moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
                                                         
    //current timing
    var startHour=parseInt(moment().format('H'));    
    var startMinute=parseInt(moment().format('m'));
    var startSecond=parseInt(moment().format('s'));
    var startDay=parseInt(moment().format('D'));
    var startMonth=parseInt(moment().format('M'));
    var startYear=parseInt(moment().format('Y'));  //current date and time ; 
	//                                                         
	
	/* ---------------------------------------------------------------------
	  by default start time the current time and date.
	  if you want to change the start time to know to time-gap between two dates like "1 FEB 2017,01:10:15pm"
	  just add // in the beginning of line c and line d,and make respective changes you need;
	  and you can reset to default by removing // you have added;
		  you can make similar changes on end time by changing 
		  between line e and line f;
      	  
	*/
	//------------------------------------------------------------------------
	
	
	/*                                               // line c
	 
	var  startHour=1;
    var startMinute=10;
    var startSecond=25;
    var startDay=1;
    var startMonth=2;
    var startYear=2017;
	*/                                                //line d
    
    //end timing
    var endHour=9;                                  //line e
    var endMinute=0;
    var endSecond=0;
    var endDay=26;  
    var endMonth=11;
    var endYear=2017;     //09:00:00 26th november 2017  //line f


    //find the difference
    var start=moment([startYear,startMonth-1,startDay,startHour,startMinute,startSecond]);
    var end = moment([endYear,endMonth-1,endDay,endHour,endMinute,endSecond]);

   
    //calculation
    var remainingSecond=parseInt(end.diff(start,"seconds"));
    
    var hours = Math.floor(remainingSecond/3600);
    remainingSecond %=3600;
	

    var days = Math.floor(hours/24);
    hours%=24;

    var minutes = Math.floor(remainingSecond/60);
    remainingSecond%=60;

    var seconds =remainingSecond;
    
    // console.log(days);
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);

    //set the values to DOM
    var remainingTime = days+" d"+hours + " h"+ minutes + " m"+seconds+" s";
   
 
      document.getElementById("days").innerHTML=days;
    

      document.getElementById("hours").innerHTML=hours;
    
   
      document.getElementById("minutes").innerHTML=minutes;

    document.getElementById("seconds").innerHTML=seconds;
    

    setInterval(myFunction,1000);
}


}

