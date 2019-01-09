var dblClickRecords = []; //Holds records of all events as (element, timestamp)
var dblClickRecordElements = [];//Array of elements for each record
var dblClickCount = [];//Total number of double clicks on each element
var dblClickElements = document.getElementsByClassName('dblClick');//All elements of class 'dblClick'


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
function dblClickEventfunction() {

    var x = event.target.id; //Gets element id for element that triggered the event 
    var time = event.timeStamp;//Gets time of event since page load
    console.log(x);
    // Create a new Record of the event
    var record = new Record(x, time);
    
    //stores record to array of records
    var i = dblClickRecords.length;
    dblClickRecords[i] = record;
    dblClickRecordElements[i] = record.getElement();
    console.log(dblClickRecords[0].getElement());

    //stores record in local storage

    //creates object for JSON
    let myObj = {
        element: x,
        eventTime: time
    };

    //creates unique record key
    var key = "dblClickRecord" + i;
    let myObj_serialized = JSON.stringify(myObj); //converts to string
    localStorage.setItem(key, myObj_serialized); //stores in localStorage
    var dblClicks = JSON.stringify(i);
    localStorage.setItem('dblClicksTotal', dblClicks); //stores total double clicks

    console.log(localStorage);
    

    
    //re-calculates total number of clicks on selected element
    getDblClickCount();

    //updates view 
    var dataOutputDblClicks = document.getElementById('dblClickEventResult'); //Selects target for displaying updated result

        var data = "";
        for (var i=0;i<counters3.length;i++)
        {
            var el = counters3[i]; //gets all elements
            var dblClicks = dblClickCount[el]; //gets dblClickCount for all elements
            data += "Element: " + el + " Total Double Clicks: " + dblClicks + '</br>'; 
        }

        dataOutputDblClicks.innerHTML = data; //outputs dblClickCount data for all elements
        
        
    }


    
    var counters3 = [];
    //creates counter for each element 
    //var points = [{x:45, y:64}, {x:56, y:98}, {x:23, y:44}];
    
    for(var i=0;i<dblClickElements.length;i++) {
        counters3[i] = dblClickElements[i].id ;
    }
  

    //Counts how may times each element is clicked
    function getDblClickCount() {
     
    
    counters3.forEach(function(item) {
        dblClickCount[item] = 0;
    })
    
    dblClickRecordElements.forEach(function(item) {
        if(dblClickCount.hasOwnProperty(item)) {
            dblClickCount[item]++;
        }
    })

    }