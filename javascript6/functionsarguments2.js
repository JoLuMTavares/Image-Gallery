var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];

    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}


function calculateAge(el) {
    return 2018 - el;
}

var ages = arrayCalc(years, calculateAge);

console.log( ages );


/**
 * 
 * Task:
 * 
 * 
 * Create a function maxHeartRate(el) that
 * returns the maximum healthy heart rate
 * based on the age using this formula.
 * 
 * 
 * maxHeartRate = 206.9 - (0.67 * age);
 * 
 * This formula only applies for the adults
 * between 18 and 81. Eventually apply it on
 * the ages we have defined earlier.
 * 
 */

/*
function calculations(ages, fn) {

    var mrArray = [];

    for (var i = 0; i < ages.length; i++)
        mrArray.push(fn(ages[i]));

    return mrArray;
}
*/

 function maxHeartRate(age) {
     if ((age >= 18) && (age <= 81))
        return 206.9 - (0.67 * age);
     else
        return -1;
 }


 var hRates = arrayCalc(ages, maxHeartRate);
 console.log('​Max Heart rates', hRates);

 




