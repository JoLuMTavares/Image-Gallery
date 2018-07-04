const years = [1990, 1981, 1986, 1937];

// es5
let ages = years.map(function (el) {
    return 2018 - el;
});

function sayHallo() {
    console.log('Hallo');
}

// map performs an anonymous functions
// on each element of an array

// es6

// arrow function
let ages6 = years.map( (el) => {
    return 2018 - el;
});


// functional
let ages6b = years.map( el => 2018 - el );

// two parameters, imperative
let ages6c = years.map( (el, index) => {
    return "index: " + index + ", age: " + (2018-el);
});


let ages6d = years.map( 
    (el, index) => "index: " + index + ", age: " + 
    (2018-el)
);


// es5
let box5 =  {
    color: "green",
    position: 1,
    clickMe: function () {
        document.getElementById("green")
        .addEventListener("click", function () {
            
        })
    }
}
