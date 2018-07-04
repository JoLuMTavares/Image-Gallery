

var addgiftObj = document.getElementById("addgift");



var basket = [];

// For local storage




// Reading from the localStorage on page load.

// document.getElementById("storedItems").innerHTML =
//     localStorage.getItem("basket");
function updateStorage() {

    if (localStorage.getItem("basket")) {
        var basketJSON = localStorage.getItem("basket");

        
        basket = JSON.parse(basketJSON);

        for (i = 0; i < basket.length; i++) {
            var newListItem = document.createElement("li");
        
            newListItem.innerHTML = "Name: " + basket[i].name + "; Price: " + basket[i].price;

            newListItem.className = "shopping-item";
        
            var listObj = document.getElementById("storedItems");
            listObj.appendChild(newListItem);

        }
    }
    console.log(basket);
        
}

updateStorage();


/* Commented for the new version on "Basket section"

addgiftObj.onclick = function () {
    
    var giftObj = document.getElementById("gift");

    var giftName = giftObj.value;

    // This part is from task 1
    if (giftName.length == 0) {
        alert("You didn't write anything!");
        return;
    }
    else if (giftName.length < 3) {
        alert("This is too short!");
        document.getElementById("gift").value = "";
        return;
    }
    
        

    alert('You wrote "' + giftName + '"');

    var newListItem = document.createElement("li");

    newListItem.innerHTML = giftName;

    var listObj = document.getElementById("shoppingList");

    //listObj.insertAdjacentElement("afterbegin", newListItem);

    listObj.appendChild(newListItem);

    // This is also from task 1
    document.getElementById("gift").value = "";

}

*/

var removeTestObj= document.getElementById("removetest");

removeTestObj.onclick = function () {
    var removemeObj = document.getElementById("removeme");

    removemeObj.remove();
}


/**
 * 
 * Task:
 * 
 * add the following functionality to your shopping list
 * 
 * 1) After an item has been put on the list, the text box 
 *    should be cleared. When adding an item, only items that 
 *    have at least 3 characters can be added. Otherwise, an
 *    error alert appears.
 * 2) When clicking on the removefirst button, the first item
 *    should be removed from the list.
 * 3) Same as 2) for the last item
 * 4) When clicking on the "remove" button, all items with the
 *    value of the textbox will be removed.
 * 
 */

  // For the task 2

  /* Commented for the new version on "Basket section"

  var removeFirstB = document.getElementById("remfirstgift");

  removeFirstB.onclick = function removeFirst() {
 
     var firstObj  = document.getElementById("shoppingList");
 
     if (firstObj.childNodes.length > 0)
        firstObj.removeChild(firstObj.childNodes[0]);
     else
         alert ("No elements on the list!");
  }

  */

 // For the task 3

 /* Commented for the new version on "Basket section"

 var removeLastB = document.getElementById("remLastgift");

 removeLastB.onclick = function removeLast() {

    var lastObj  = document.getElementById("shoppingList");

    if (lastObj.childNodes.length > 0)
        lastObj.removeChild(lastObj.childNodes[lastObj.childNodes.length-1]);
    else
        alert ("No elements on the list!");
 }

 */

 // For the task 4

 /* Commented for the new version on "Basket section"

 var removeButton = document.getElementById("remove");

 removeButton.onclick = function removeSpecific() {
     
    var giftObj = document.getElementById("gift");

    var giftName = giftObj.value.toLowerCase();

    // var term = "textbox";

    if (giftName.length == 0) {
        alert("You must write what you want to remove!");
        return;
    }
    else {
        var count = 0;

        var theObject = document.getElementById("shoppingList");

        if (theObject.childNodes.length > 0) {
            for (i = 0; i < theObject.childNodes.length; i++) {
                console.log(theObject.childNodes[i].innerHTML);
                if (theObject.childNodes[i].innerHTML != undefined) {
                    var str = theObject.childNodes[i].innerHTML.toLowerCase();
                    var res = str.match(giftName);
                    if (res != null) {
                    
                        count++;
                        theObject.removeChild(theObject.childNodes[i]);
                        i--;
                        document.getElementById("gift").value = "";
                    }
                }
                
            }
            if (count === 0)
                alert ("No element with value '" + giftName + "' was found on the list!"); 
            else if (count == 1)
                alert ("One element was removed.");  
            else
                alert ("" + count + " elements were removed."); 
        }
            
        else
            alert ("No elements on the list!");
    }
 }

 */

 /**
  * 
  * Basket:
  * 
  * 1) When adding a new item to the shopping list, add a new
  *    item to the basket array. Each item consists of a name and 
  *    a price. Think of how you can represent this in a proper way.
  * 
  *    The price is a random value between 5 and 100. The price 
  *    is not a string, it is number. Only integers, no float.
  * 
  * 2) When removing the last or first item, also remove the last or
  *    first item in the basket array.
  * 
  * 3) When removing a specific item, also remove the specific item 
  *    in the array.
  * 
  * 4) When the user presses the sum-Button, the total basket value
  *    will be alerted to the user.
  * 
  */

 addgiftObj.onclick = function () {
    
    var giftObj = document.getElementById("gift");

    var giftName = giftObj.value;

    // This part is from task 1
    if (giftName.length == 0) {
        alert("You didn't write anything!");
        return;
    }
    else if (giftName.length < 3) {
        alert("This is too short!");
        document.getElementById("gift").value = "";
        return;
    }
    
        

    alert('You wrote "' + giftName + '"');

    var newPrice = Math.floor((Math.random() * 100) + 5);

    

    var newListItem = document.createElement("li");

    newListItem.innerHTML = giftName;

    var listObj = document.getElementById("shoppingList");

    //listObj.insertAdjacentElement("afterbegin", newListItem);

    listObj.insertAdjacentElement("afterbegin",newListItem);

    // This is also from task 1
    document.getElementById("gift").value = "";

    // This is the task 1 related to basket
    basket.unshift ({
        name: giftName,
        price: newPrice
    });

    console.log(basket);

    

    var nJSON = JSON.stringify(basket);

    localStorage.setItem("basket", nJSON);

    // console.log(baskLocalStorage);
    // document.getElementById("storedItems").innerHTML =
    // localStorage.getItem("basket");


    var newListItem = document.createElement("li");
        
    newListItem.innerHTML = "Name: " + giftName + "; Price: " + basket[basket.length-1].price;

    newListItem.className = "shopping-item";

    var listObj = document.getElementById("storedItems");
    listObj.appendChild(newListItem);

}

// New version of removing the first

var removeFirstB = document.getElementById("remfirstgift");

  removeFirstB.onclick = function removeFirst() {
 
     var firstObj  = document.getElementById("shoppingList");
 
     if (firstObj.childNodes.length > 0) {
       /* if (firstObj.childNodes[0].innerHTML != undefined) 
            firstObj.removeChild(firstObj.childNodes[0]);
        else
            firstObj.removeChild(firstObj.childNodes[1]); 
            */
        firstObj.removeChild(firstObj.childNodes[0]);      
        basket.shift();
        console.log(basket);
     }
        
     else
         alert ("No elements on the list!");



  }

// New version of removing the last

  var removeLastB = document.getElementById("remLastgift");

  removeLastB.onclick = function removeLast() {
 
     var lastObj  = document.getElementById("shoppingList");
 
     if (lastObj.childNodes.length > 0) {
        lastObj.removeChild(lastObj.childNodes[lastObj.childNodes.length-1]);
        basket.pop();
        console.log(basket);

        var nJSON = JSON.stringify(basket);
        localStorage.setItem("basket", nJSON);
        // document.getElementById("storedItems").innerHTML =
        // localStorage.getItem("basket");
        // updateStorage();
     }
         
     else
         alert ("No elements on the list!");
  }


  // Now for a specific item

  var removeButton = document.getElementById("remove");

 removeButton.onclick = function removeSpecific() {
     
    var giftObj = document.getElementById("gift");

    var giftName = giftObj.value.toLowerCase();

    if (giftName.length == 0) {
        alert("You must write what you want to remove!");
        return;
    }
    else {
        var count = 0;

        var theObject = document.getElementById("shoppingList");

        if (theObject.childNodes.length > 0) {
            for (i = 0; i < theObject.childNodes.length; i++) {
                console.log(theObject.childNodes[i].innerHTML);
                if (theObject.childNodes[i].innerHTML != undefined) {
                    var str = theObject.childNodes[i].innerHTML.toLowerCase();
                    var res = str.match(giftName);
                    if (res != null) {
                    
                        count++;
                        theObject.removeChild(theObject.childNodes[i]);
                        i--;
                        document.getElementById("gift").value = "";

                    }
                }
                
            }
            if (count === 0) {
                alert ("No element with value '" + giftName + "' was found on the list!"); 
                return;
            }
            else {
             /*   for (j = 0; j < basket.length; j++) {
                    if (basket[j].name.toLowerCase() == giftName)
                        basket.splice(basket[j], basket[j+1]);
                }*/

                for (var key in basket) {
                    if (basket[key].name.toLowerCase() == giftName) 
                        basket.splice(key, 1);
                }
                console.log(basket);

                for (var i = 0; i < localStorage.length; i++) {
                    console.log(localStorage.getItem(localStorage.key(i)));
                }
            }
            if (count == 1)
                alert ("One element was removed.");  
            else
                alert ("" + count + " elements were removed."); 
        }
            
        else
            alert ("No elements on the list!");
    }
    document.getElementById("storedItems").innerHTML =
    localStorage.getItem("basket");
 }


 // For the sum of all prices in the basket

var totalS = document.getElementById("sum");

totalS.onclick = function () {

    var summed = 0;

    for (var key in basket) {
        summed += parseInt(basket[key].price);
    };

    // const sumValues = (basket) => Object.keys(basket).reduce((acc, value) => acc + basket[value], 0);

    // basket.price

    alert("The total price of all items in the basket is " + summed + ".");
}


/**
 * 
 * Task:
 * 
 * Insert a keyboard event, that reacts to the "return" key
 * in the textbox. When the user presses the "return" key,
 * 
 * 
 */


 var inputE = document.getElementById("gift");

 inputE.addEventListener("keyup", function (event) {
     //  To cancel the default action, if needed
     event.preventDefault();
     // The code that represents the "Enter" key
     if (event.keyCode === 13)
        // Calling the addgift button
        document.getElementById("addgift").click();

 });


 /**
 * 
 * Make the basket array persistent by storing it in the local
 * storage. This way, when the user reloads all the items, these
 * will be in the basket and also in the list.
 * 
 * Well this one has to stay close to the basked 
 * declaration. So it also initializes with empty
 * items.
 * 
 */

// Extra function to clear all the entire storage

var clearObj = document.getElementById("clear");

clearObj.onclick = function () {
    localStorage.clear();
    console.log("Local storage was cleared.");
    alert("All the items on the storage were eliminated.");
    document.getElementById("storedItems").innerHTML =
    localStorage.getItem("basket");
}



 