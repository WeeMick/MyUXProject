//Mouseover event
//Applies mouseover event listener to entire document


document.addEventListener('click', function (event) {

    // If event is triggered then identifies if event originated from intended target element (by class)
    if (!event.target.matches('.mouseClick'))
    { 
        return; //If not within class of target elements ends the listening event
    }
    else 
    {
        mouseClickEventfunction(); //call method in response to the event   
    }
    
    }, false);



document.addEventListener('mouseover', function (event) {
    if (!event.target.matches('.mouseOver'))
    {
        return;
    }
    else {

        mouseOverEventFunction();
    }
}, false);


document.addEventListener('dblclick', function (event) {
    if (!event.target.matches('.dblClick'))
    {
        return;
    }
    else {

        dblClickEventfunction();
    }
}, false);

















var toggle = 0;

document.getElementById("adminBtn").addEventListener("click", displayAdmin);



function displayAdmin() {
    if (toggle%2 == 0) {
  document.getElementById("admin").className = " d-block";
    toggle ++;}
    else {
        document.getElementById("admin").className = " d-none";
        toggle ++;
    }

}
