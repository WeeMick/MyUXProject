var clickRecords = []; //Holds records of all events as (element, timestamp)
var recordElements = [];//Array of elements for each record
var clickCount = [];//Total number of clicks on each element
var elements = document.getElementsByClassName('mouseClick');//All elements of class 'mouseClick'


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
function mouseClickEventfunction() {

    var x = event.target.id; //Gets element id for element that triggered the event 
    var time = event.timeStamp;//Gets time of event since page load

    // Create a new Record of the event
    var record = new Record(x, time);
    
    //stores record to array of records
    var i = clickRecords.length;
    clickRecords[i] = record;
    recordElements[i] = record.getElement();
    console.log(clickRecords[0].getElement());

    //stores record in local storage

    //creates object for JSON
    let myObj = {
        element: x,
        eventTime: time
    };

    //creates unique record key
    var key = "record" + i;
    let myObj_serialized = JSON.stringify(myObj); //converts to string
    localStorage.setItem(key, myObj_serialized); //stores in localStorage
    var clicks = JSON.stringify(i);
    localStorage.setItem('clicksTotal', clicks); //stores total clicks

    console.log(localStorage);
    

    
    //re-calculates total number of clicks on selected element
    getClickCount();

    //updates view 
    var dataOutputClicks = document.getElementById('clickEventResult'); //Selects target for displaying updated result

        var data = "";
        for (var i=0;i<counters.length;i++)
        {
            var el = counters[i]; //gets all elements
            var clicks = clickCount[el]; //gets clickCount for all elements
            data += "Element: " + el + " Total Clicks: " + clicks + '</br>'; 
        }

        dataOutputClicks.innerHTML = data; //outputs clickCount data for all elements
        
        
    }


    
    var counters = [];
    //creates counter for each element 
    //var points = [{x:45, y:64}, {x:56, y:98}, {x:23, y:44}];
    
    for(var i=0;i<elements.length;i++) {
        counters[i] = elements[i].id ;
    }
  

    //Counts how may times each element is clicked
    function getClickCount() {
     
    
    counters.forEach(function(item) {
        clickCount[item] = 0;
    })
    
    recordElements.forEach(function(item) {
        if(clickCount.hasOwnProperty(item)) {
            clickCount[item]++;
        }
    })

    }
