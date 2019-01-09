var mouseOverRecords = []; //Holds records of all events as (element, timestamp)
var mouseOverRecordElements = [];//Array of elements for each record
var mouseOverCount = [];//Total number of clicks on each element
var mouseOverElements = document.getElementsByClassName('mouseOver');//All elements of class 'mouseOver'


//Creates a Record object
function Record (element, timestamp){
    // private
   var element = element;
   var timestamp = timestamp;
     // public methods
    this.getEvent = function () {
        return element + " " + timestamp;
    };

    this.getElement = function () {
        return element;
    };

    this.getTimestamp = function () {
        return timestamp;
    }

}

//Function handles and gives a response to listener event
function mouseOverEventFunction() {

    var x = event.target.id; //Gets element id for element that triggered the event
    var time = event.timeStamp;//Gets time of event since page load
    const timeConst = 1000;//sets time value


    var timerSet = true; //sets timer to true
    var set = setInterval(count(x), timeConst); //At time interval of const time will call count(e) function


    console.log(x);
    // Create a new Record of the event
    var record = new Record(x, time);

    //stores record to array of records
    var i = mouseOverRecords.length;
    mouseOverRecords[i] = record;
    mouseOverRecordElements[i] = record.getElement();
    console.log(mouseOverRecords[0].getElement());

    //stores record in local storage

    //creates object for storing data in JSON
    let myObj = {
        element: x,
        eventTime: time,
        totalElementTime: timer //Adds timer measurement
    };

    //creates unique record key
    var key = "mouseOverRecord" + i;
    let myObj_serialized = JSON.stringify(myObj); //converts to string
    localStorage.setItem(key, myObj_serialized); //stores in localStorage
    var mouseOvers = JSON.stringify(i);
    localStorage.setItem('mouseOversTotal', mouseOvers); //stores total clicks

    console.log(localStorage.mouseOverRecord0);



    //re-calculates total number of mouseOvers on selected element
    getMouseOverCount();

    //updates view
    var dataOutputClicks = document.getElementById('mouseOverEventResult'); //Selects target for displaying updated result

        var data = "";
        for (var i=0;i<counters2.length;i++)
        {
            var el = counters2[i]; //gets all elements
            var mouseOvers = mouseOverCount[el]; //gets mouseoverCount for all elements
            data += "Element: " + el + " Total mouseOvers: " + mouseOvers + '</br>';
        }

        dataOutputClicks.innerHTML = data; //outputs mouseOverCount data for all elements


    }



    var counters2 = [];
    //creates counter for each element
    //var points = [{x:45, y:64}, {x:56, y:98}, {x:23, y:44}];

    for(var i=0;i<mouseOverElements.length;i++) {
        counters2[i] = mouseOverElements[i].id ;
    }


    //Counts how may times each element is clicked
    function getMouseOverCount() {


    counters2.forEach(function(item) {
        mouseOverCount[item] = 0;
    })

    mouseOverRecordElements.forEach(function(item) {
        if(mouseOverCount.hasOwnProperty(item)) {
            mouseOverCount[item]++;
        }
    })







//     // This script works out the time the mouse spends in each div
//
// var d, newid, set;//creates varaibles
// const time = 1000;//sets time value
//
//
//   function count(e)
//   {
//     newid = e; //gets element id
//     if (timerSet == true)
//     {
//       document.getElementById(newid).innerHTML++; //gets element by id and increments innerHTML (will be for data )
//       console.log('id = ' + newid + 'Time in div = ' + document.getElementById(newid).innerHTML);
//     }
//   };
//
// // clearTimeout stops the interval from increasing each time the mouse enters the element
//   function stoptimer() //
//   {
//     clearTimeout(set);
//     d = false;//Stops the timer
//   }
//
    }
