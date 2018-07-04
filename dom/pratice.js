// Create H1 Element using dom method and put in main Div.


var hiObject = document.createElement("h1");

hiObject.innerHTML = "Hello, I am here from DOM";

hiObject.style.border = "thick groove #66CCCC"; // Border for header 1

console.log(hiObject);




var mainDivObject = document.getElementById("mainDiv");

mainDivObject.appendChild(hiObject);

console.log('​mainDivObject', mainDivObject);

// Task 1:

// Please, add one image and a button in this main div.


var img = document.createElement("img");

img.setAttribute("src", "img/dice-6.png");
img.setAttribute("alt", "Dice with number 6");

img.style.border = "thick inset #BBCCBB"; // Border for first img tag

console.log('​img', img);


var button = document.createElement("button");
console.log('​button', button);

button.innerHTML = "Test";

button.style.border = "thick outset #DDCC66"; // Border for first img tag

button.setAttribute("onclick", "alert('Simple test.');");


mainDivObject.appendChild(img);

mainDivObject.appendChild(button);

// Task 2:

/**
 * 
 * 2.1 - Add four more sub div inside main div.
 *   Please, specify id to every sub div like id=one,
 *   id=two, id=three, id=four
 * 
 * 2.2 - insert a "p" tag with dummy text at sub div two.
 * 2.3 - insert "img" tab with dummy image at sub div four.
 * 2.4 - insert a button tag before the end of the mainDiv 
 *   with text "Test Me Event".
 * 2.5 - Insert "h6" tag before the main Div tag.
 * 2.6 - Insert "h3" tag just after the main div tag.
 * 2.7 - Insert "a" tag just before the fourth div tag.
 * 2.8 - Insert "p" tag after the end of the main div tag.
 * 2.9 - Show all div tags as boxes by using border. Every div
 *       must have a different color.
 * 2.10 - Set background color and foreground color for the p tag
 *        with dummy text.
 * 2.11 - Change "a" tag to have an url link.
 * 2.12 - Change the color of the "a" to a default dark purple value
 *        (just writing it like "darkpurple").
 * 2.13 - Apply onclick event to the button and change text "Test Me Event"
 *        of the button.
 * 2.14 - Add one more button and assign text "Change href" and bind the
 *        function which changes the href of the "a" tag.
 * 2.15 - Add a button and assign text "Calculate". Then perform
 *        the "+", "-", "x" and the "/". Display the results 
 *        on the page.
 * 2.16 - Add h4 tag with id "greeting", text "Hallo DCI" and 
 *        "p" tag with id "thedate", text "How are you?".
 * 2.17 - Add input type "text" and id "myname".
 * 2.18 - Add button with id "saymyname", text "Say hallo".
 * 2.19 - Get name which entered in the textbox "myname" and show when
 *        click on the button "saymyname". Also need to replace "DCI"
 *        text with entered name from the h4.
 * 
 * DOMOBJ1.insertAdjacentHTML( position, DOMOBJ2);
 * position = "beforebegin" => Before DOMOBJ1 itself
 * position = "afterbegin" => Inside, before 1st child
 * position = "beforeend" => Inside, after last child
 * position = "afterend" => After DOMOBJ1 itself
 * 
 */

 // Tag for extra line space
 var br = document.createElement("br");

 mainDivObject.style.border = "thick ridge #BBCCBB"; // Border for main div 

 // Creation of the four div tags
 var div1 = document.createElement("div");
 div1.setAttribute("id", "one");

 div1.style.border = "thick solid #0000FF"; // Border for div one

 var div2 = document.createElement("div");
 div2.setAttribute("id", "two");

 div2.style.border = "thick solid #FF00FF";  // Border for div two

 var div3 = document.createElement("div");
 div3.setAttribute("id", "three");

 div3.style.border = "thick dashed #FFAA00";  // Border for div three

 var div4 = document.createElement("div");
 div4.setAttribute("id", "four");

 div4.style.border = "thick ridge #FFAA55";  // Border for div four

 // Insertion of these tags inside the main Div and extra space
 mainDivObject.appendChild(div1);

 mainDivObject.appendChild(br);

 mainDivObject.appendChild(div2);

 mainDivObject.appendChild(br);

 mainDivObject.appendChild(div3);

 mainDivObject.appendChild(br);

 mainDivObject.appendChild(div4);

 // Creation of the "p" tag
 var p = document.createElement("p");

 // Giving a dummy text to it
 p.innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,";


 // Setting background and foreground color for this paragraph
 p.style.backgroundColor = "purple";

 p.style.color = "#bbb";

 // Inserting the tag in the div two
 div2.insertAdjacentElement("afterbegin", p);

  // Creation of the "img" tag
 var dummyImg = document.createElement("img");

 // giving the addres of a dummy image and setting the alt attribute
 dummyImg.setAttribute("src", "https://dummyimage.com/640x480/000/fff.jpg&text=Dummy+image");
 dummyImg.setAttribute("alt", "Dummy image");

 // Inserting the tag in the div four
 div4.insertAdjacentElement("afterbegin", dummyImg);

 // Creation of another button
 var button2 = document.createElement("button");
//  console.log('​button', button);
 
// Giving a text to it
 button2.innerHTML = "Test Me Event";



// Inserting the button before the end of the main div
 mainDivObject.insertAdjacentElement("beforeend",button2);

// Creation of header 6
var hiObject6 = document.createElement("h6");

// Just a simple text applied
hiObject6.innerHTML = "Very small one";

// Giving an extra line space after it
// hiObject6.insertAdjacentElement("afterbegin", br);

// Inserting the header before the beginning of the main div
mainDivObject.insertAdjacentElement("beforebegin",hiObject6);

// Creation of header 3
var hiObject3 = document.createElement("h3");

// Just a simple text applied
hiObject3.innerHTML = "Medium one";

// Inserting the header after the beginning of the main div
// That means comming before div one
mainDivObject.insertAdjacentElement("afterbegin",hiObject3);

// Creation of "a" tag
var a = document.createElement("a");

// Just a simple text applied
a.innerHTML = "Go to extremetech site";

// Setting a link to this tag
a.setAttribute("href", "https://www.extremetech.com/");

// Setting it to open in a new tab
a.setAttribute("target", "_blank");

// Changing the color from this link to dark violet.
// There is no dark purple color
a.style.color = "#9400D3";

// Inserting the header before the beginning of the div four
div4.insertAdjacentElement("beforebegin", a);

// Creation of the "p" tag
var endP = document.createElement("p");

// Just a simple text applied
endP.innerHTML = "Last paragraph";

// Inserting the header after the end of the main div
mainDivObject.insertAdjacentElement("afterend", endP);


/**
 * 
 * Learning content about events.
 * 
 * Here we have samples involving onclick and
 * listener properties.
 * 
 *

var buttonObj = document.createElement("button");

buttonObj.id = "btn";
buttonObj.innerHTML = "Click here";
mainDivObject.insertAdjacentElement("beforebegin",buttonObj);

// A version using direct "onclick" property
// buttonObj.onclick = function() {
//     alert("Hallo. I am from onclick without listener.");
// }

// A version using direct "addEventListener" property
buttonObj.addEventListener("click", function() {
         alert("Hallo. I am from onclick without listener.");
     });


*/


// Changing the text of the button

button2.onclick = function() {
    button2.innerHTML = Math.floor(Math.random() * 13);
}


// Adding another button to change the href of the "a" tag


var button3 = document.createElement("button");

button3.innerHTML = "Change Link";

button3.addEventListener("click", function () {
   a.setAttribute("href","https://www.motor1.com/");
   a.innerHTML = "Changed now to motor 1";
});

// This button stays after the last paragraph
endP.insertAdjacentElement("afterend", button3);


// Creating auxiliary functions for the calculations

function addition() {
    return Math.floor(Math.random()*10) + Math.floor(Math.random()*10);
}

function subtraction() {
    return Math.floor(Math.random()*10) - Math.floor(Math.random()*10);
}

function multiplication() {
    return Math.floor(Math.random()*10) * Math.floor(Math.random()*10);
}

function division() {
    return Math.floor(Math.floor(Math.random()*10) / Math.floor(Math.random()*10));
}

// Creating the button to make the calculations

var calcButton = document.createElement("button");

calcButton.innerHTML = "Calculate";

calcButton.addEventListener("click", function () {
    var res1 = addition();
    var res2 = subtraction();
    var res3 = multiplication();
    var res4 = division();

    alert("Result of addition: " + res1 + "\n" +
          "Result of subtraction: " + res2 + "\n" +
          "Result of multiplication: " + res3 + "\n" +
          "Result of division: " + res4);
});

// This button stays after the button3
button3.insertAdjacentElement("afterend", br);

br.insertAdjacentElement("afterend", calcButton);




// Creation of header 4
var hiObject4 = document.createElement("h4");

// Setting its id
hiObject4.setAttribute("id", "greeting");

// Just a simple text applied
hiObject4.innerHTML = "Hallo DCI";

// Inserting the header after the end of the calculatin button
calcButton.insertAdjacentElement("afterend",hiObject4);


// Creation of another paragraph
var greetP = document.createElement("p");

// Setting its id
greetP.setAttribute("id", "thedate");

// Just a simple text applied
greetP.innerHTML = "How are you?";

// Inserting the header after the end of the header 4
hiObject4.insertAdjacentElement("afterend",greetP);

// Creating an input
var input1 = document.createElement("input");

// Setting its id
input1.setAttribute("id", "myname");

// Setting its type as text
input1.setAttribute("type", "text");


// Inserting the header after the end of the last paragraph
greetP.insertAdjacentElement("afterend", input1);

// And one more button
var myNameB = document.createElement("button");

// Setting its id
myNameB.setAttribute("id", "saymyname");

// Setting its text to be visible to the user
myNameB.innerHTML = "Say Hallo";


// Inserting the header after the end of the input
input1.insertAdjacentElement("afterend", myNameB);

// This is for the task 2.19


// First the value of the new name to be inserted
// var name = input1.value;






myNameB.addEventListener("click", function () {
    var strR = hiObject4.innerHTML;
    strR = strR.replace("DCI", input1.value);
    // Then the name replacement
    hiObject4.innerHTML = strR;    
});






