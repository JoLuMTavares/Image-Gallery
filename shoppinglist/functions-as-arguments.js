/**
 * 
 * Task:
 * 
 * Code a countdown, that counts down from 10 to 1 and each time
 * appends a new div to the body displaying the current number (like
 * 10, 9, 8, 7,..., 1). After the 1, a big "Hallo World" will be
 * displayed i.e. as h1.
 * 
 */

 /**
  * 
  * The loop way ***********************
  * 
  *

 function addDiv(elem, n) {
    var nDiv = document.createElement("div");
    if (n != 0) {
        nDiv.innerHTML = n;
    
        elem.appendChild(nDiv); 
    }
    
    // window.setTimeout(() => {        
    // }, n*1000);

    if (n == 0) {
        var newH1 = document.createElement("h1");
        newH1.innerHTML = "Hallo World";
        countD.insertAdjacentElement("afterend", newH1);
    }
 }

 function countDown() {
     var countD = document.getElementById("countD");
     for (i = -1; i < 10; i++) {
        window.setTimeout(() => {    
            addDiv(countD, i--)    
        }, i*1000); 
        
     }
         
     
    //  alert("Hallo World!");
    //  window.setTimeout(() => {
         
    //  }, 10000);

    //   window.setInterval(alert("Hallo test..."), 10000);

     
 }

 */

 /**
  * 
  * Recursive way ***************
  * 
  */

 function addDiv(elem, n) {
    var nDiv = document.createElement("div");
    if (n != 0) {
        
    }
    
    // window.setTimeout(() => {        
    // }, n*1000);

    if (n == 0) {
        var newH1 = document.createElement("h1");
        newH1.innerHTML = "Hallo World";
        countD.insertAdjacentElement("afterend", newH1);
    }
    else {
        nDiv.innerHTML = n;
    
        elem.appendChild(nDiv);
        window.setTimeout(() => {
            addDiv(elem, n-1)
        }, 1000);
    }
 }

 function countDown() {
    var countD = document.getElementById("countD");
    window.setTimeout(() => {
        addDiv(countD, 10)
    }, 1000);

 }

 countDown();

 /**
  * So the conclusion to all of this is:
  * 
  * window.setTimeout is asynchronous. Therefore, it executes
  * by it self not waiting for anything.
  * 
  * Now the setTimeout is correctly called. Problem is, it
  * executes on its time, not when we want. So only after
  * each second runs, the addDiv is then called. So even 1 second
  * is already a very long time for a processor. That's why,
  * i is already 10 way long before the first addDiv is called.
  * We have then no other choice, but to make an decreasing of i
  * as the second argument of addDiv.
  * 
  * 
  * The recursive way is, not only easier to understand, but also
  * has less code lines.
  * 
  * 
  */


  var obj = {
      firstname: 'Bob',
      lastname: 'Smith',
      age: '30',
      city: 'Berlin',
      house: {
          windows: 10,
          rooms: 5
      }
  }

  for (var key in obj) {
      console.log("Key: " + key + ", value: " + obj[key]);

     if(typeof obj[key] === "object") {
         console.log("is an object");
     }
  }

  function printX(o) {
      console.log(o.x);
  }

  printX({x:1});

  
