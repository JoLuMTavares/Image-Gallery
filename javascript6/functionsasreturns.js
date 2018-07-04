function interviewQuestion(job) {
    if (job === "designer") {
        return function (name) {
            console.log("What is UX, " + name + "?");
        }
    }
    else if(job === "teacher") {
        return function (name) {
            console.log("Say, " + name + ". What subject do you teach?");
        }
    }
    else {
        return function (name) {
            console.log("There's nothing related to this, " + name + ". So what do you do?");
        }
    }
}

function sayHello() {
    return function () {
        console.log("Hallo");
    }
}

sayHello()();

//var func = sayHello();

//func();

var teacherQuestion = interviewQuestion("teacher");
teacherQuestion("Max");

interviewQuestion("designer")("John");

interviewQuestion("Driver")("Jason");


// Closures

function retirement(retirementAge) {
    var a = " years left until retirement";

    return function (yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) +a);
    }
}

var retirementUS = retirement( 66 );

retirementUS( 1985 );


/**
 * 
 * Task (for 30 min):
 * 
 * Create a function inc() that has a variable counter,
 * this one initially set to 0. Create an inner function
 * of inc() that increases counter by 1. Then the counter
 * is returned.
 * 
 * use the principle of closures to increase the
 * counter 5 times.
 * 
 * 
 */

function inc() {
    var count = 0;

    return function () {
        
        for (var i = 1; i < 6; i++)
            count++;
        console.log(count);
        return count;
    }
}

 function incV2() {
     var count = 0;

     return function (times) {
         while (times > 0) {
            for (var i = 1; i < 6; i++)
                count++;
            times--;   
         }
         
         return count;
     }
 }

 function incR() { // Not working
    var count = 0;
    var times = 5;
    return function makeCalc(times) {
        if (times > 0) {
           count++;
           times--;   
           return makeCalc(times);
        }
        
        else {
            console.log(count);
            return count;
        }
    }  
}

 function incRV2() {
    var count = 0;

    return function makeCalc(times) {
        if (times > 0) {
           for (var i = 1; i < 6; i++)
               count++;
           times--;   
           return makeCalc(times);
        }
        
        else
            return count;
    }
}

inc()();
// incR()(5);
// var res = increm(5);

// console.log(res);

var c = inc();

console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());