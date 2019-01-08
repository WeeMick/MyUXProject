// get the id of all divs on the page

window.onload = getDivs();
function getDivs() {
  console.log("This worked");
    var divArray = document.getElementsByTagName('div');
    for(var i=0; i < divArray.length; i++)
    {
        console.log("data " + divArray[i].id);
      }
    };
