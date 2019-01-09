// var clickRecords = []; //Holds records of all events as (element, timestamp)
// var recordElements = [];//Array of elements for each record
// var clickCount = [];//Total number of clicks on each element
// var elements = document.getElementsByClassName('mouseEnter');//All elements of class 'mouseClick'
//
//
// //Creates a Record object
// function Record (element, timestamp){
//     // private
//    var element = element;
//    var timestamp = timestamp;
//      // public methods
//     this.getEvent = function () {
//         return element + " " + timestamp;
//     };
//
//     this.getElement = function () {
//         return element;
//     };
//
//     this.getTimestamp = function () {
//         return timestamp;
//     }
//
// }
//
// //Function handles and gives a response to listener event
// function mouseEnterEventfunction() {
//
//     var x = event.target.id; //Gets element id for element that triggered the event
//     var time = event.timeStamp;//Gets time of event since page load
//
//     // Create a new Record of the event
//     var record = new Record(x, time);
//
//     //stores record to array of records
//     var i = mouseEnterRecords.length;
//     mouseEnterRecords[i] = record;
//     recordElements[i] = record.getElement();
//     console.log(mouseEnterRecords[0].getElement());
//
//     //stores record in local storage
//
//     //creates object for JSON
//     let myObj = {
//         element: x,
//         eventTime: time
//     };
//
//     //creates unique record key
//     var key = "record" + i;
//     let myObj_serialized = JSON.stringify(myObj); //converts to string
//     localStorage.setItem(key, myObj_serialized); //stores in localStorage
//     var clicks = JSON.stringify(i);
//     localStorage.setItem('mouseEnterTotal', clicks); //stores total clicks
//
//     console.log(localStorage);
//
//
//
//     //re-calculates total number of clicks on selected element
//     getEnterCount();
//
//     //updates view
//     var dataOutputClicks = document.getElementById('mouseEnterEventResult'); //Selects target for displaying updated result
//
//         var data = "";
//         for (var i=0;i<enterCounters.length;i++)
//         {
//             var el = enterCounters[i]; //gets all elements
//             var enters = enterCount[el]; //gets clickCount for all elements
//             data += "Element: " + el + " Total Mouse Enters : " + enters + '</br>';
//         }
//
//         dataOutputClicks.innerHTML = data; //outputs clickCount data for all elements
//
//
//     }
//
//
//
//     var enterCounters = [];
//     //creates counter for each element
//     //var points = [{x:45, y:64}, {x:56, y:98}, {x:23, y:44}];
//
//     for(var i=0;i<elements.length;i++) {
//         enterCounters[i] = elements[i].id ;
//     }
//
//
//     //Counts how may times each element is clicked
//     function getEnterCount() {
//
//
//     counters.forEach(function(item) {
//         enterCount[item] = 0;
//     })
//
//     recordElements.forEach(function(item) {
//         if(enterCount.hasOwnProperty(item)) {
//             enterCount[item]++;
//         }
//     })
//
//     }
