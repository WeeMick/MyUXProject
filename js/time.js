// This script works out the time the mouse spends in each div
const start = 0;


var d, id, set;
const time = 1000;

  function timer(e)
  {
    id = e.id;
    d = true;
    set = setInterval("count(id)", time);
  };

  function count(e)
  {
    id = e;
    if (d == true)
    {
      document.getElementById(id).value+1;
      console.log('id = ' + id + ' Time in div = ' + document.getElementById(id).value);
    }
    localStorage.id = document.getElementById(id).value;
    console.log(localStorage.id + " " + document.getElementById(id).value);
  };

// clearTimeout stops the interval from increasing each time the mouse enters the element
  function stoptimer()
  {
    clearTimeout(set);
    d = false;
  }
