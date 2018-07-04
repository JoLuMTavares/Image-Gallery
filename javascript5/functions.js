// Primitives vs Objects

// Primitives

var a = 23;

var b = a;

a = 46;

console.log( a );
console.log( b );

// Objects

var obj1 = {
    name: "John",
    age: 26
}

var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

console.log(obj2.name);

obj2.name = "DCI";

console.log(obj2.name);

console.log(obj1.name);



/**
 * 
 * //////////////////////////////
 * 
 * Passing functions as arguments
 * 
 * //////////////////////////////
 * 
 */


 var years = [1996, 1965, 1937, 2005, 1998];

 function arrayCalc(arr, fn) {
    var arrRes =[];

    for(var i = 0; i < arr.length; i++) 
        arrRes.push(fn(arr[i]));

    return arrRes;
 }

 // Calculate the age

 function calculateAge(e1) {
     
    return 2018 - e1;

 }

var ages = arrayCalc(years, calculateAge);
console.log('​ages', ages);


function isFullAge(e1) {
    return e1 >= 18;
}

var fullAges = arrayCalc(ages, isFullAge);
console.log('​fullAges', fullAges);

function maxHeartRate(e1) {
    
    if(e1 >= 18 && e1 <= 81)
        return Math.round(206.9 - (0.67*e1));
    else
        return -1;
}

// get ages
var rates = arrayCalc(ages, maxHeartRate);
console.log('​Heart rates', rates);


/**
 * 
 * //////////////////////////////
 * 
 * Functions returning Functions
 * 
 * //////////////////////////////
 * 
 */

 function interviewQuestion(job) {

    if (job == "designer")
        return function (name) {
            console.log(name, "- Can you, please, explain what UX design is?");
        }
    else if (job == "teacher")
        return function (name) {
            console.log("What subject do you teach, " + name + ".");
        }
    else
        return function (name) {
            console.log("Hello, " + name + ". What do you do?");
        }
     
 }

 var teacherQuestion = interviewQuestion("teacher");

 teacherQuestion("John");

 var designerQuestion = interviewQuestion("designer");
 designerQuestion("John");

 var unemployedQuestion = interviewQuestion("");
 unemployedQuestion("John");

 /**
  * 
  * Using the function 
  * LetterCapitalize(str). Take the
  * str parameter being passed and
  * capitalize the first letter of
  * each word. Words will be separa-
  * ted by only one space.
  * 
  */

  function changeFirst(arr) {
      //arr[0] = arr[0].toUpperCase();
      var str = "";
      for (j = 0; j < arr.length; j++)
        str += arr[j].charAt(0).toUpperCase() + arr[j].substr(1, arr[j].length) + " ";

    return str;
  }


  function LetterCapitalize(str) {
      var words = str.split(" ");
      return changeFirst(words);
  }


  var phrase = LetterCapitalize("how is this really going to work?");
  console.log('​phrase', phrase);

  var test2 = LetterCapitalize("A good test means rolling with a V12 engine until 350K/h.");
  console.log('​test2', test2);
  
//   var test3 = LetterCapitalize();

function LetterCapitalizeFn(str, fn) {
    var words = str.split(" ");
    var finalSet = fn(words);
    return finalSet;
}



var test3 = LetterCapitalizeFn("Well now we have the world cup also to enjoy.", changeFirst);

console.log('​test3', test3);

/**
 * 
 * The task now is to:
 * 
 * Input/assign to collect prime numbers
 * until e.g 20.
 * Check if number is prime or not. If number is
 * is prime then save into array and display
 * after all collecting the prime number.
 * Passing functions as parameter/arguments
 * OR Functions returning functions.
 * 
 * 
 */

// This function is only effective until 100
function checkPrime(num) {
    if (num != 1) {
        if ((num == 2) || (num == 3))
            return true;
        else if (((num % 2) != 0) && ((num % 3) != 0) && ((num % 5) != 0) && ((num % 7) != 0))
            return true;
    }
    return false;
}

 function getPrimeNumbers(lim, fn) {
    var res =[];
    for (i = 0; i < lim; i++) {
        if (fn(i))
            res.push(i);
    }
    console.log(res);
 }

var numbers = [1, 3, 5, 19, 18, 15, 13, 11, 9, 7, 6, 14, 17];

 getPrimeNumbers(300, checkPrime);

/**
 * 
 * Another one to do another time.
 * 
 */
 function checkPrimeV3(a, b, c) {
     
 }

 /**
  * 
  * Task 3
  * Passing functions as parameter/
  * arguments OR Functions returning
  * functions
  * Input the string and return the 
  * string in reversed order
  * 
  * Sample Test Cases
  * Input: "I love Code"
  * Output: "edoC evol I"
  * 
  */

function reverseOrder(arr) {

    var newStr = "";
    for (i = arr.length-1; i >= 0 ; i--)
        newStr += arr[i];

    return newStr;
}


function changePhrase(ph, fn) {
    console.log(ph);

    var res = fn(ph);

    console.log(res);

   var info = document.getElementsByTagName("div");
    info.innerHTML = res;
}

changePhrase("This is the first test", reverseOrder);

// Function to create a wave with phrase

function createWave(str) {
    var newWave = "";

    var n = 1;

    var halfLength = Math.floor(str.length / 2);

    for (i = 0; i < halfLength; i++) {
        newWave += str[i].fontsize(n);
        n++;
    }

    n--;
     
    for (j = halfLength; j < str.length; j++) {
        newWave += str[j].fontsize(n);
        n--;
    }

    return newWave;
}

// Commented for now
 changePhrase("The second test. It works or it doesn't.", createWave);


/**
 * 
 * Task 4
 * Define function and it take number 
 * parameter and define other function
 * inside that function and calculate
 * factorial of the number.
 * 
 * e.g if num = 4, return (4*3*2*1) = 24
 * Sample Test Cases
 * Input: 4
 * Output: 24
 * 
 */

// The loop version
 function permutation(num) {
    var res = num;
    while (num > 1) {
        num--;
        res = res * num;
        
    }
    return res;
 }

 function makeOperation(num, fn) {

    var perm = fn(num);

    console.log(perm);

 }

 makeOperation(5, permutation);

 // The recursive version
 function permutationRec(num) {
     if (num > 1)
        return num * permutationRec(num-1);
     else
        return 1;
 }

 makeOperation(5, permutationRec);

 /**
  * 
  * ////////////////////////////////////
  * 
  * Lecture - IIFE
  * 
  * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  */


  function game() {
    var score = Math.round() * 19;
    console.log(score >= 5);
  }

  game();

  (function () {
      var score = Math.round() * 19;
      console.log(score >= 5);
  })();

//   console.log(score); // It doesn't work

(function (goodLuck) {
    var score = Math.round() * 19;
    console.log(score >= 5 - goodLuck); 
})(5);


 /**
  * 
  * ////////////////////////////////////
  * 
  * Lecture - Closures
  * 
  * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  */

  function retirement(retirementAge) {
      
    var a = " years left until retirement.";

    return function (yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }

  }

  var retirementUS = retirement(66);

  retirementUS(1990);

  var retirementPT = retirement(66);

  retirementPT(1981);


  var retirementDE = retirement(67);

  retirementDE(1983);


  // Global scope, inner scope etc

  topping = "anchovi";

  function pizzaParty(numSlices) {
      
    var topping = "pepperoni";

    innerFunction = function () {
        var topping = "ham";

        console.log("...But put " + topping +  " on " + numSlices + " slices.")

    }

    console.log("This pizza is all about the " + topping);

    innerFunction();

  }

  pizzaParty(3);


  function isFullAge5(arguments) {
      
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        
        console.log((2018 - cur) >= 18);

    });


  }


  isFullAge5(1990, 1999, 1965);

  isFullAge5(1990, 1999, 1965, 2006, 1987);


  function isFullAge6(...years) {
      
    years.forEach(cur=>console.log((2018-cur) >= 18));

  }


  isFullAge6(1990, 1999, 1965, 2006, 1987);


  function isFullAge7(...years) {
      
    for (index in years) 
        console.log("years => " + years[index]);
    

  }



  isFullAge7(1990, 1999, 1965, 2006, 1987, 2010);



 /**
  * 
  * ////////////////////////////////////
  * 
  * Lecture - Spread Operator
  * 
  * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  * 
  */

  function addFourAges(a, b, c, d) {
      
    return a+b+c+d;

  }

  // case 1
  var sum1 = addFourAges(18, 30, 12, 21);
  console.log(sum1);

  var ages = [18, 30, 12, 24];

  // case 2
  var sum2 = addFourAges(18, 30, 12, 21);
  console.log('​sum2', sum2);

  // case 2
  var sum3 = addFourAges(...ages);
  console.log(sum3);
  
  // case 4
  const familySmith = ['John','Jane','Mark'];
  const familyMiller = ['Mary','Bob','Ann'];

  const bigFamily = [...familySmith, 'Lily',...familyMiller];
  console.log(bigFamily);


  function mixBoth(str, ...first) {
      console.log("Mix....");
      console.log("str==>" + str);
      console.log(first);
  }

  mixBoth(...ages);

 /**
  * 
  * ////////////////////////////////////
  * 
  * Lecture - Default parameters
  * 
  * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  * 
  */

  /*

  function checkDefault(data) {

    console.log("CheckDefault...");
    console.log(data[0]); // throws error
  }

  // Without any parameter, comes an error
  checkDefault();

*/
  function checkDefault(data=["test"]) {

    console.log("CheckDefault...");
    console.log(data[0]); // It works
  }

  checkDefault();

  function personInfo(firstName, yearOfBirth, lastName="Smith", nationality="American") {
      
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;

    var fullInfo = this.firstName + " " + this.lastName + " years of Birth " +
                   + this.yearOfBirth + ". Nationality: " + 
                   + this.nationality;
  }


  personInfo('John', 1990);




