var name = "John";
var lastname = "Smith";
var age = 26;
console.log(name);
console.log(lastname);
console.log(age);

var fullname = true;

console.log(fullname);
job = "teacher";
isMarried = false;
console.log(name + " is " + age + " years old. His job is " + job + ". Is he married? " + isMarried);

age = "thirty six";

var now = 2018;
var ageYear = 1981;
var yearsOld = now - ageYear;

console.log(yearsOld);

now = 2016;

var birthYear = now - 26;
birthYear = now - 26*2;
console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;
ageJohn = ageMark = (3+5)*4-6;

ageJohn++;
ageMark*=2;

console.log(ageJohn);
console.log(ageMark);

var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + " is married.");
}
else {
    console.log(name + " is not married.");
}


isMarried = "false";

if (isMarried) {
    console.log(name + " is married.");    
} else {
    console.log(name + " is not married.");
}

if (23 === "23") {
    console.log("Something to print...");
}

var age = 20;

if (age < 20) {
    console.log("John is a tennager.");
} else if(age >= 20 && age < 30) {
    console.log("John is a young man.");
}
else {
    console.log("John is a man.");
}


var job="teacher";

job=prompt("What is john doing as a job?")

switch (job) {
    case "teacher":
        console.log("John teaches kids.");
        break;
    
    case "driver":
        console.log("John drives a cab on Lisbon.");
        break;

    case "cop":
        console.log("John fights crime.");
        break;

    default:
        console.log("Ok. He does something else. Maybe he does nothing.");
        break;
}


/* Task 6. */

var johnAge = 29;
var mikeAge = 39;

var johnHeight = 183;
var mikeHeight = 177;


johnScore = johnHeight + (johnAge * 5);
mikeScore = mikeHeight + (mikeAge  * 5);

console.log("First game.");


if (johnScore > mikeScore) {
    console.log("John is the winner.");
} else if (johnScore < mikeScore) {
    console.log("His friend is the winner.");
}
else {
    console.log("We've got a draw and just go home.");
}

thirdAge = 36;
thirdHeight = 196;

thirdScore = thirdHeight + (thirdAge * 5);

console.log("Second game.");

console.log("John Score: " + johnScore);
console.log("Mike Score: " + mikeScore);
console.log("Stranger Score: " + thirdScore);

if ((johnScore > mikeScore) && (johnScore > mikeScore)) {
    console.log("John is the winner.");
} 

 else if ((mikeScore > johnScore) && (mikeScore > thirdScore)) {
    console.log("His friend is the winner.");
}

else if ((thirdScore > johnScore) && (thirdScore > mikeScore)) {
    console.log("The stranger is the winner.");
}

else if ((johnScore == mikeScore) && (johnScore == thirdScore)) {
    console.log("We've got a draw and just go home.");  
}

else if (johnScore == mikeScore) {
    console.log("John and his friend are in a draw.");  
}

else if (johnScore == thirdScore) {
    console.log("John and and the stranger have a draw.");  
}

else if (mikeScore == thirdScore) {
    console.log("The stranger is stalking is friend.");  
}



// Function to give the information about the weather

function currentWeather(weather) {
    
    if (weather) {
        if (weather > 8) {
            console.log("The weather is great.");
        }
        else if (weather > 5 && weather <= 8) {
            console.log("The weather is good.");
        }
        else if (weather > 2 && weather <= 5) {
            console.log("The weather is not good.");
        }
        else if (weather <= 2) {
            console.log("The weather is bad.");
        }
        else {
            console.log("Unknown!")
        }    
    }
    
}

currentWeather();

/* Implement a function named q with a parameter p.
    The function prints out only if p is not undifined, 
    not null and not false.

*/

function q(p) {
    if (p) {
        if (p != null) {
            if (p != false) {
                console.log(p);
            }
        } 
    } 
}

q("Hallo world.");

// Another task.

/* 
    Write another function f that takes two parameters.
    These are a and b. The function should return a + b.
    Now for testing:
        1. Call f using both a and b as Strings.
        2. Call f using a as a number and b as a String.
        3. Call f using both a and b as numbers.
        4. Call f using a as a number, b as undifined.
        5. Call f using a as null, b as string.
        6. Call f using a as undefined and b as String.
        7. Call f using a and b as undefined.

        Lastly, make console.log for each return value.
*/

function f(a, b) {
    return a + b;
}

var undf;

console.log(f("On ", "Speed"));
console.log(f(3, "Speed"));
console.log(f(4, 9));
console.log(f(2, undf));
console.log(f(null, "Speed"));
console.log(f(undf, "Speed"));
console.log(f(undf, undf));


function calculateAge(yearOfBirth) {
    return 2018 - yearOfBirth;
}

var ageOfJohn = calculateAge(1999);
var ageOfMary = calculateAge(1988);

console.log('Age if John is: ' + ageOfJohn);
console.log('Age if Mary is: ' + ageOfMary);

/*

    Assume that the retirement age is 67.
    Write a function retiresIn that calculates
    the number of years in which a person retires.
    This function has two parameters.

    name and year of birth

    The return value should be a string like the
    following "Jan retires in 35 years."

*/

function retiresIn(name, birthYear) {
    return name + " retires in " + (67 - calculateAge(birthYear)) + " years.";
}

console.log(retiresIn("Mark", 2004));

console.log(retiresIn("Louisa", 2014));

console.log(retiresIn("Fred", 1994));

console.log(retiresIn("Carl", 1984));

console.log(retiresIn("Mike", 1977));

console.log(retiresIn("Hilary", 1991));


/*

    Write a function introduction that generates
    an introduction text about yourself. You have
    firstName, lastName, countryBorn,  countryResidence, age
    cityResidence

    returns nothing



*/


function introduction (firstName, 
                        lastName, 
                        birthCountry, 
                        resCountry, 
                        age, 
                        resCity) {
    console.log("My name is " + firstName + " " + lastName + ". I come from " + birthCountry + " and I leave here in " + resCountry + ". I'm now " + age + " years old. The city where I live now is " + resCity + ".");

    // Another way of writing the string with the values
    console.log(`My name is ${firstName} ${lastName}. I come from ${birthCountry} and I leave here in ${resCountry}. I am now ${age} years old. The city where I live now is ${resCity}.`);

}

introduction("Joao", "Tavares", "Portugal", "Deutschland", "36", "Berlin"); 


var name0 = "John";
var name1 = "Mary";
var name2 = "Ana";
var name3 = "Michael";
var name4 = "Julia";

var names = ["John", "Mary", "Ana", "Michael", "Julia"];

console.log("The first name here is " + names[0]);

names.push("Ralf");

console.log("The last name here is " + names[5]);

console.log(names);


var myInfo = ["Joao", "Tavares", "36"];

console.log(myInfo);

myInfo.unshift("Mr.");


console.log(myInfo);

myInfo.pop();

console.log(myInfo);


/*

    Create an array that consists of 
    the numbers 5 to 10.

    Replace the value of the element
    on position "1" by 7.

    Add an element 11 at the end.
    add an element -1 at the beginning

*/

var values = [5, 6, 7, 8, 9, 10];

values[1] = 7;

values.push(11);

values.unshift(-1);

console.log(values);

names.splice(2, 3);

console.log(names);

names.splice(2, 0, "Philip");

console.log(names);

/*

 Rewrite average to accept one parameter 
 instead of three parameters and return 
 the average value of those. Basically it
 returns the average of an array (with the same values).
 Test your function with the same numeric values.


*/


function average(values) {
    // var values = [x,x+9,x-1];
    return (values[0] + values[1] + values[2]) / 3;
}

console.log("The average (rounded) value is " + Math.round(average([10, 24, 32])));


var fruits = ['Apple', 'Banana', 'Orange', 'Lemon'];

console.log(fruits);

function fruitCutter(fruits) {
    fruits.pop();
    fruits.shift();
    return fruits;
}

var cuttedFruits = fruitCutter(fruits);


console.log(cuttedFruits);

var arrayInfo = [];

arrayInfo[0] = "Joao";
arrayInfo[0] = "Tavares";
arrayInfo[0] = "Portugal";
arrayInfo[0] = "36";


var objInfo = {

    firstName: 'Joao',
    lastName: 'Tavares',
    age: 36
}

var roomInfo = {

    groundType: "laminate",
    sofaMaterial: "leder",
    plants: "true",
    numberOfTables: 3,
    classType: "First"

}

var sofaInfo = {

    objectType: "Sofa",
    number: 4,
    utility: "sitting",
    accessories: "yes"
}

var tableInfo = {

    objectType: "table",
    height: "low",
    width: "wide",
    numberOf: 1
}

var tableInfo2 = {

    objectType: "table",
    height: "high",
    width: "narrow",
    numberOf: 1
}

console.log(tableInfo.width);

/* 
   task rewrite the introduction function,
   that it does not accept six arguments anymore. 
   It should accept one object as a parameter.

   1 - Define an object that you pass to the
        introduction function.
   2 - Rewrite the introduction function
   3 - Execute the introduction function with 
       the intro object.

 */

 var myInfoObject = {

    firstName: 'Joao',
    lastName: 'Tavares',
    birthCountry: "Portugal",
    resCountry: "Deutschland",
    age: 36,
    resCity: "Berlin",
    retiresIn: function () {
        console.log(67-age);
    }

 };

 function newIntroduction(infoObject) {
    console.log(infoObject);
    console.log(`My name is ${infoObject.firstName} ${infoObject.lastName}. I come from ${infoObject.birthCountry} and I leave here in ${infoObject.resCountry}. I am now ${infoObject.age} years old. The city where I live now is ${infoObject.resCity}.`);
 }

 
 

 newIntroduction(myInfoObject);

 myInfoObject.retiresIn();

 var apple1 = {
    color: 'red',
    size: 'big'
 }

 console.log(apple1);

 
 console.log('The color is ​', apple1.color);

 console.log('The size is ​', apple1.size);

 var apple2 = {
    color: 'green',
    size: 'small'
 }

 var apples = {
     apple1,
     apple2
 }

 
 console.log(apples);

 /*

 Task:

 Creat a third apple with color red and size small.
 Add this one to the apples object.

 */

 var apple3 = {
    color: 'red',
    size: 'small'
 }

 /*
    Reassigning is the easiest way.

     var apples = {
     apple1,
     apple2,
     apple3
 }


 */

//  apples.unshift(apple3); The compiler says that push is not a function of this object

 console.log(apples);

 

 var child = {
     age: 3,
     name: 'Sarah'
 }

 var father = {
     age: 40,
     name: 'peter'
 }
 

 var mother = {
     age: 39,
     name: 'mary'
 }

 var family = {
     father: father,
     mother: mother,
     child: child
 }

 console.log (family);

 // Task
 // Give this family two more kids, a car and a home.
 /*

    The vehicle has brand, built year

    The house has a squaremeter size and a location-city

 */

 var child2 = {
    age: 2,
    name: 'Joseph'
 }

 var child3 = {
    age: 5,
    name: 'Louisa'
 }
 
 

 var house = {
     size: 496,
     location: 'Hannover'
 }

 var car = {
     brand: 'Bentley',
     model: 'Mulsanne',
     power: '505-Hp',
     torque: '1020-Nm',
     year: 2018
 }

 // 1

 var family_reassignment = {
     father: father,
     mother: mother,
     children: {child, child2, child3},
     house: house,
     car, car
 }


 console.log(family_reassignment);

 // 2

 family.children = {child, child2, child3};
 family.house = house;
 family.car = car;

 delete family.child;
 
 console.log('Family after some time and better life.​');
 console.log(JSON.stringify(family));


 /*
    Task

    1. Imagine you have 1 users.
    2. Each user has an email, a password,
     a status that can either be active or not,
     the number of logins.
    3. Email is a string, password is a string,
        status is boolean (if status is true, he is
        active, false if he is inactive), number of
        logins is a number and starts with 0.
    4. Status can be changed with a method activate() 
        and the of logins can be increased by newLogin()


 */

 var user1 = {
     email: 'abc@gmail.com',
     password: 'abc',
     status: false,
     numLogins: 0,
     activate: function () {
        if (user1.status == true) {
            user1.status = false;
        }
        else  {
           user1.status = true;
        }
    },
    newLogin: function () {
        this.numLogins++;
    }
 }


 var user2 = {
    email: 'user2@gmail.com',
    password: 'abc',
    status: false,
    numLogins: 0,
   
 }

 var user3 = {
    email: 'user3@gmail.com',
    password: 'abc',
    status: false,
    numLogins: 0
 }
 
 console.log('​user1.numLogins', user1.numLogins);
 
 // 1
 if (user1.status == true) {
     user1.status = false;
 }
 else  {
    user1.status = true;
 }

 // 2 Direct way
 user1.status = !user1.status;


 console.log(user1.status);

 user1.activate();
 user1.activate();
 console.log('User1 status after activate execution twice.');
 console.log(user1.status);

 /*

    Task

    Implement a function named newLogin for the
    object user1 and call it 3 times

 */

user1.newLogin();
console.log(user1.numLogins);


var users = [user1, user2, user3];
console.log('​users', users);

var i = 0;

while (i < 10) { console.log('​Hallo world!'); i++;}

var j = 10;

 do {
    console.log('​Hallo again!'); j--;
 } while ( j > 0);

 /*

 Too much exagerated cicles created by me, the Tavares.

 var n = 0, m = 0, p = 0;

 for (n; n < 20; n++) {
     do {
        console.log('​Hallo the third time!'); 
        m++;
        p += 2;
     } while ((m < 10) || (m != p));
 }
 *

 for (var i = 0; i < names.length; i++) {
     console.log(names[i]);
 }

*/

//console.log(apples[1].size);

 for (var i = 0; i < apples.length; i++) {
    console.log(apples[i].size);
 }

 /*

    Create a function numArray that takes two parameters
    a and b. These are numbers. The function
    returns false if a is greater than b, smaller than 0
    or if b is smaller than 0.

    Other it returs an array of number between a and b,
    including both.


 */
function operate(c, d) {
         if ((c < 0) || (c > d) || (d < 0)) 
            return false;
        else {
            var elems = [];
            for (var i = c; i <= d; i++) 
                elems.push(i);
            return elems;
        }

     }
 

//  operate(-1, 4);
 console.log( operate(0, 20));

 /*
     Task:

     Assuming we have 100 images on our images/ folder.
     We want to create an array of images and the array 
     should consist of the filename which are image_1.jpg 
     to image_100.jpg.

     Task 2:

     We want ot standardize the filenaming and also display
     the number of digits (image_001.jpg to image_100.jpg)

     For both tasks, create a function imageArray1 and imageArray2 
     tha does not take any parameters and returns an array of 100
     filenames.

 */
 
 var images = [];

 function imageArray1() {
     for (var i = 1; i <= 100; i++) {
         this.images.push("image_" + i + ".jpg");
     }
 }

 imageArray1();

 console.log(images);

 function imageArray2() {
    for (var i = 0; i < 99; i++) {
        if (i < 9) {
            n = i+1;
            this.images[i] = "image_00" + n + ".jpg";

        }
        else {
            n = i+1;
            this.images[i] = "image_0" + n + ".jpg";
        }
            
    }
    
}

imageArray2();

console.log(images);

/*
    Task 

    Print the stars on the descending way.


*/


function printStarsDesc() {
    var stars = "*********";

    for (var i  = 9; i > 0; i--) {
        res = stars.slice(0, i);
        console.log(res);
    }

}


printStarsDesc();

var birthYears = [1928, 1937, 2010, 2000, 1991, 1995, 1981, 1979];

var birthYears2 = [1929, 1945, 2012, 2003, 2006, 1998, 1993, 1990, 1987, 1983, 1963, 1954, 1972, 1973];

var just = [];

/*

for (var i = 0; i < birthYears.length; i++) {
    age = 2018 - birthYears[i];
    just.push(age);
}

for (var i = 0; i < just.length; i++) {
    if (just[i] > 18) {
        just[i];
        console.log('​Current age: ', just[i]);
    }
    
}

*/
var approved = [];

var full_1 = [];

var full_2 = [];

function checkFullAges(birthYears) {
    just = [];
    approved = [];
    for (var i = 0; i < birthYears.length; i++) {
        age = 2018 - birthYears[i];
        just.push(age);
    }

    for (var i = 0; i < just.length; i++) {
        
        if (just[i] > 18) {
            just[i];
            console.log('​Current age: ', just[i]);
            approved.push(true);
        }
        else 
            approved.push(false);
            
        
    }
    // console.log(approved);
    
    return approved;
}


// checkFullAges(birthYears);

full_1 = checkFullAges(birthYears);

console.log(just);

console.log('​full_1 ', full_1 );





full_2 = checkFullAges(birthYears2);

console.log(just);

console.log('​full_2', full_2);



