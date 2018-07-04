console.log; // name of the function
console.log(); // Calling the function without parameters
console.log('My name is Joao.'); // Name of the function

console.log('This is a repetition from the last class.');
console.log('Probably nothing new will be added today (17-05-2018)');
console.log("So, it's just about doing the tasks.");
console.log('Later something different may come up.');
console.log(2);
console.log(1,4,6,2,3,10,29,13,24,47);


console.log('Now two strings.', 'Just for Demo.');

console.log('When the last parameter is undefined.', 'The result is different.',);

function intro() {
    var a = 3, b = 5;
    console.log('Another demo.');
    return a > b ? 'The First is number greater.' : 'The First is number greater.';
}

var test = intro();

console.log(test);

function cycleFun(first, sec) {
    var a = [];
    // var i = 0;
    for (var i = 0; i < first; i++ ) {
        for (var j = 0; j < sec; j++ )
            a.push(j);
    } 
    return a;
}

val1 = prompt("Please give the first value:");

val2 = prompt("Please give the second value:");

var res = cycleFun(val1, val2);

console.log(res);

/*

    Task:

    Create a function to receive three parameters.
    These are name, age and city.
    Then call the function to see the result.

*/


function introShort(name, age, city) {
    var set = [name, age, city];
    
    console.log('So. Your name is ' + name + '. You are ' +
                + age + ' and your city is ' + city);
}

theName = prompt("Please write your name:");

theAge = prompt("Please write your age:");

theCity = prompt("Please write the city:");

introShort(theName, theAge, theCity);
/*

    This function gets the age, but with 
    the Javascript function that gets the
    real current year.

*/
function myAge(birthYear) {
    var d = new Date();
    return d.getFullYear() - birthYear;
}

bYear = prompt("Please, type your birth Year:");

age = myAge(bYear);


console.log('​You are ' + age + ' year old.' );

