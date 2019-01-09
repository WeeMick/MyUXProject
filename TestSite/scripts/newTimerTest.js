// This script works out the time the mouse spends in each div
var timerCounts;

var timerElements = document.getElementsByClassName('timer');
console.log("Timer elements = " + timerElements);

for (var i = 0; i<timerElements.length; i++) {
  var id = timerElements[i].id;
  console.log("ID = " + id);

  //console.log("Active element name = " + counterName);
  timerCounts = {'counter Name' : 0}; //Here
  console.log("TimerCounts object = " + timerCounts);

  document.getElementById(id).setAttribute("onmouseenter", "timer(this)");
  document.getElementById(id).setAttribute("onmouseleave", "stoptimer(this)");

}


var d, newid, set;//creates varaibles
//var counter=0;
//var counterName;
var current = 0;

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
    var size = Object.keys(timerCounts).length;
    console.log("Size of timerCounts = "+ size);
    //timerCounts[counterName] = ;
    console.log("Size of timerCounts = "+ size);
    console.log(timerCounts);

    if (timerCounts.hasOwnProperty(counterName))
    {
      console.log("This timer has already been initialised");
      console.log(current);
    }
    else {
        console.log("Will create new timer");
        timerCounts[counterName] = 1;
        console.log(">>>>>" + timerCounts[counterName])
      }
      timerCounts[counterName] = timerCounts[counterName] + 1;
      console.log("Updated timercounts = " + timerCounts[counterName]);
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
