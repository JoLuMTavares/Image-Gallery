var john = ['John', 30];
var name = john[0];
var ageV = john[1];

const [constName, constAge] = ['John', 30];

console.log( constName );
console.log( constAge );


const obj = {
    firstName: "John",
    lastName: "Smith"
}

var firstNameV = obj.firstName;
var lastNameV = obj.lastName;

const {firstName, lastName} = obj; // Names need to match the keys
console.log( firstName, lastName );


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement( 1985 );
console.log( age );
console.log( retirement );

/**
 * 
 * Task:
 * 
 * 1)
 * create an object tree with attributes numLeafs and
 * height and color. Create three variables derived from
 * the three using the destructuring operator.
 * 
 * 2)
 * Do the same with the tree represented as array
 * 
 */


 var tree = {
     numLeafs: 7,
     height: 20,
     color: "green"
 }



 const {numLeafs, height, color} = tree;
 console.log('​color', color);
 console.log('​height', height);
 console.log('​numLeafs', numLeafs);

 const [numLeafsC, heightC, colorC] = [7, 20, "green"];
 console.log('​colorC', colorC);
 console.log('​heightC', heightC);
 console.log('​numLeafsC', numLeafsC);


 /** Offtopic: Extending JS library */
Array.prototype.doublePush = function (x, y) {
    Array.push(x);
    Array.push(y);
}




