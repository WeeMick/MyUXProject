// This script works out the time the mouse spends in each div
var timerCounts;

var timerElements = document.getElementsByClassName('timer');
console.log("timer elements: " + timerElements);

for (var i = 0; i<timerElements.length; i++) {
    var id = timerElements[i].id;
    console.log(id);

    var counterName = "counter" + id;
    console.log(counterName);
    timerCounts = {counterName : 0}; //Here
    console.log(timerCounts);

document.getElementById(id).setAttribute("onmouseenter", "timer(this)");
document.getElementById(id).setAttribute("onmouseleave", "stoptimer(this)");

}


var d, newid, set;//creates varaibles
//var counter=0;
var counterName;
var current = 0;
var timersObj = {};


const time = 1000;//sets time value

  function timer(e)
  {
    id = e.id; //gets element id

    d = true; //sets d
    set = setInterval("count(id)", time); //At time interval of const time will call count(e) function

  };

  function count(e)
  {
    newid = e; //gets element id
    if (d == true)
    {
        counterName = "counter" + newid;
        console.log("timer object array: " + timersObj);
        if(timersObj.counterName != "")
        {
          current = timersObj.counterName;
          console.log("Already Defined Counter Name = " + counterName);
          console.log("Counter Name value = " + timersObj.counterName);
        }
        else
        {
          current +=1;
          console.log("New Counter Name = " + counterName);
          console.log("Timer object counter name = " + timersObj.counterName);
        }
        timersObj.counterName +=1;
        timerCounts.counterName = timersObj.counterName;
        console.log("Timer counts = " + timerCounts);
    }
  };

// clearTimeout stops the interval from increasing each time the mouse enters the element
  function stoptimer() //
  {
    console.log(timerCounts);
    console.log(newid);
    clearTimeout(set);
    d = false;//Stops the timer
  }
