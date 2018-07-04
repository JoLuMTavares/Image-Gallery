var alfred = {
    name: 'Alfred',
    count: 0,
    sayYourName: function() {
        if(this.count === undefined)
            this.count = 0;
        console.log( 'My name is ' + this.myName );
        this.count++;
    },

    setLastName: function (lastName) {
        this.lastName = lastName;
        console.log( 'My last name is ' + this.lastName );
        this.count++;
    }
}

var gonzo = {
    myName: 'Gonzo'
}

// Call replaced the original name
// the the given one
alfred.sayYourName.call(gonzo);

// function setName(lastName) {
//     alfred.lastName = lastName;
// }

alfred.setLastName.call(gonzo, "Gonzales");

/**
 * 
 * This is the second task.
 * 
 * As for the analysis, there's
 * the first object with a function
 * inside. Then it's called with
 * the two parameters given to the
 * function.
 * 
 */

var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good ' + timeOfDay
            + ' Ladies and Gentlemen I am '
            + this.name + ', I am a '
            + this.job + ' and I am '
            + this.age + ' years old.');
        }
        else if(style === 'friendly') {
            console.log('Hey whatsup.'
            + 'I am '
            + this.name + ', I am a '
            + this.job + ' and I am '
            + this.age + ' years old.'
            + 'Have a nice ' + timeOfDay);
        }
    }
};

john.presentation('formal', 'morning');

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation.call(emily, "friendly", "evening");

john.presentation.apply(emily, ["friendly", "evening"]);


/** End of the task. */

// PARENT

function Item( name, price ) {
    this.name = name;
    this.price = price;
    this.sold = false;
}

// CHILDREN

Item.prototype.sell = function() {
    this.sold = true;
}


// CHILDREN 
function Book( name, price, author ) {
    Item.call(this, name, price);
    this.author = author;
    this.category = 'book';
}

Book.prototype =
Object.create(Item.prototype);

function Movie( name, price, director ) {
    Item.call(this, name, price);
    this.director = director;
    this.category = 'movie';
}


Movie.prototype =
Object.create(Item.prototype);

var Casino = new Movie("Casino", 10, "Martin Scorsese");
console.log('​Casino', Casino);

var itBook = new Book("IT", 34.95, "Stephen King");
console.log('​itBook', itBook);

Casino.sell();
console.log('​Casino', Casino);

itBook.sell();
console.log('​itBook', itBook);

// First version commented
/*
function ComicBook(name, price, author, minAge) {
    Book.call(this, name, price, author);
    this.minAge = minAge;
    if ((minAge === undefined) || (minAge < 6 ))
        this.minAge = 6;
    else
        this.minAge = minAge;
} 
*/

// Second version
// If minAge is undefined (Not given)
function ComicBook(name, price, author, minAge = 6) { 
    Book.call(this, name, price, author);
    this.minAge = minAge;
    if (minAge < 6 )
        this.minAge = 6;
    else
        this.minAge = minAge;
}

// This has to be made. Otherwise
// there's no connection from this
// to the "Book" and no connection to
// the "Item"
ComicBook.prototype = Object.create(Book.prototype);

var JJ = new ComicBook("Marvel - Jessica Jones", 24, "Stan Lee", 12);
console.log('Comic Book: ', JJ);

JJ.sell();

console.log('Comic Book: ', JJ);

// es5

function Person5(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log( age );
}

var john5 = new Person5('John', 1990, 'Teacher');

console.log(john5);

// es6

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear();
        this.yearOfBirth;
        console.log( age );
    }
}

// Person6.prototype.calculateAge =

// john6.greeting(); // Not possible
var john6 = new Person6('John', 1990, 'Teacher');

// Person6.greeting();

function Athlete5(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}


Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function () {
    this.medals++;
    console.log(this.medals);    
}


var johnAthlete5 = new Athlete5("John", 1990, "Swimmer", 3, 10);


johnAthlete5.calculateAge();

johnAthlete5.wonMedal();

console.log('​johnAthlete5', johnAthlete5);

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log( this.medals );
    }

}

var johnAthlete6 = new Athlete6("John", 1988, "Football Player", 3, 10);

johnAthlete6.calculateAge();
johnAthlete6.wonMedal();


/**
 * 
 * 11. Inheritance Task
 * 
 * But this time with classes instead
 * of functions.
 * 
 */

 class ItemClass {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.sold = false; 
    }

    sell() {
        this.sold = true;
    }
 }

 class BookClass extends ItemClass {
     constructor(name, price, author) {
         super(name, price);
         this.author = author;
         this.category = "book";
     }
 }

 class ComicBookClass extends BookClass {
     constructor(name, price, author, minAge = 6) {
        super(name, price, author);
        if (minAge < 6)
            this.minAge = 6;
        else
            this.minAge = minAge;
     }
 }

 class MovieClass extends ItemClass {
     constructor(name, price, director) {
        super(name, price);
        this.director = director;

     }
 }

 MovieClass.prototype =
Object.create(ItemClass.prototype);


 // Using again the same tests

 // For Casino Movie

 var CasinoC = new MovieClass("Casino", 10, "Martin Scorsese");
 console.log('​CasinoC', CasinoC);

 CasinoC.sell();
 console.log('Casino after selling', jjC);

 var itC = new Book("IT", 34.95, "Stephen King");
 console.log(itC);

 itC.sell();
 console.log('​IT after selling', jjC);

 var jjC = new ComicBookClass("Jessica Jones (Marvel)", 23, "Stan Lee");
 console.log('​jjC', jjC);

 jjC.sell();

 console.log('​Jessica Jones after selling', jjC);
 

 

