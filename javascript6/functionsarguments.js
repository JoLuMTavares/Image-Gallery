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

