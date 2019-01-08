// This script works out the time the mouse spends in each div

var d, newid, set;
const time = 1000;

  function timer(e)
  {
    id = e.id;

    d = true;
    set = setInterval("count(id)", time);

  };

  function count(e)
  {
    newid = e;
    if (d == true)
    {
      document.getElementById(newid).innerHTML++;
      console.log('id = ' + newid + 'Time in div = ' + document.getElementById(newid).innerHTML);
    }
  };

// clearTimeout stops the interval from increasing each time the mouse enters the element
  function stoptimer()
  {
    clearTimeout(set);
    d = false;
  }
