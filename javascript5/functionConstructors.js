/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
}

var jane = {
    name: 'Jane',
    yearOfBirth: 1991,
    job: 'marketing'
}

var mark = {
    name: 'Mark',
    yearOfBirth: 1948,
    job: 'taxidriver'
}
*/

function Person(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    // this.calculateAge = function () {
    //     console.log(2018 - this.yearOfBirth);    
    // }
    this.calculateAge();
}




Person.prototype.calculateAge = function () {
    this.age = (2018 - this.yearOfBirth);
}

Person.prototype.lastname = "Smith";

var sandra = new Person("Sandra", 1995, "waitress");

console.log('​sandra', sandra);

var john = new Person("John", 1990, "teacher");
console.log('​john', john);

var jane = new Person("Jane", 1995, "waitress");
console.log('​jane', jane);

var mark = new Person("Mark", 1948, "taxidriver");
console.log('​mark', mark);

// sandra.calculateAge();

console.log(john.hasOwnProperty("job"));

console.log(john  instanceof Person);

var x = [2,4,6];
console.log('​x', x);

function item(name, price) {
    this.name = name;
    this.price = price;
    this.sold = false;
}

// A function that creates objects:
// function constructor
function Person(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;


    this.calculateAge = function () {
        return 2018 - this.yearOfBirth;
    }
}

var John = new Person('John', 1990, 'Teacher');
console.log('​John', John);

// Task create a jane and mark with the
// function constructors


var Jane = new Person('Jane', 1987, 'Investor');
console.log('​Jane', Jane);

var Mark = new Person('Mark', 1985, 'Racing Driver');
console.log('​Mark', Mark);

console.log("Mark's age: ", Mark.calculateAge());

Person.prototype.calculateAge = function () {
    return 2018 - this.yearOfBirth;
}


var personProto = {
    calculateAge: function () {
        return 2018 - this.yearOfBirth;
    },

    sayMyName: function () {
        console.log('My name is' + this.name);
    }
}

var Julia = Object.create( personProto );
Julia.yearOfBirth = 1991;
Julia.job = "Teacher";

Julia.name = "Julia";

console.log("Julia", Julia);







