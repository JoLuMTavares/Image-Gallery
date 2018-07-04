// spread

function addFourAges(a,b,c,d) {
    return a+b+c+d;
}

var sum = addFourAges(18, 30, 12, 41);
console.log( sum );

// es5
var agesArray = [47, 24, 13, 82];
var sum2 = addFourAges.apply(null, agesArray);
// apply is the same as call with array asa parameter list
console.log( sum2 );

// es6
var sum3 = addFourAges(...agesArray);
console.log( sum3 );

agesArray.push( 9 ); // Its now five ages
var sum4 = addFourAges(...agesArray);

console.log( sum4 );


const familySmith = ["John", "Jane", "Mark"];
const familyMiller = ["Mary", "Bob", "Ann"];

const bigFamily = [...familySmith, ...familyMiller];
console.log('​bigFamily', bigFamily);

// rest operator

function isFullAge5() {
    console.log("arguments"); // Exists to each js function
    // converting from array-like object to real array
    var argsArray = Array.prototype.slice.call(arguments);
    argsArray.forEach(function (cur) {
        console.log ((2018 - cur) >= 18 ); // true or false
    });
}

isFullAge5(1990, 2002, 1965);
isFullAge5(1990, 2002, 1965, 1981, 1987, 1999, 2006);

function isFullAge6(...years) {
    console.log( years );
    years.forEach( cur => (2018 - cur) >= 18 );
}

isFullAge6(1990, 1981, 1970);

function isFullAge6b(limit, ...years) { // rest of the parameteres

    console.log( years );
    years.forEach( cur => (2018 - cur) >= 18 )
    
}

isFullAge6b(21, 1990, 1999, 1965);