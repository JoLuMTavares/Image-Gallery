var name = 'John';

function first() {
    var greeting = 'Hallo';
    var x = greeting + name;
    second();
    console.log(x);
}

function second() {
    var greeting = 'Hi';
    var x = greeting + name;
    third();
    console.log(x);
}


function third() {
    var greeting = 'Hey';
    var x = greeting + name;
    console.log(x);
}

// first();

console.log('x: ' + x);
var x = 5; // expression, usually are marked by var

hello();

function hello() { // statement
    console.log('hallo');
}


// hello2();

var hello2 = function() { // expression
    console.log('hallo2');
}


hello2();


function parent() {
    var x = 9;

    function child1() {
        
        console.log('child1 x is ' + x);
    }

    function child2() {
        var x = 2;
        console.log('child2 x is ' + x);


        function grandChild1() {
            console.log('Grandchild1 x is ' + x);
        }
    }
    child2();
    child1();
    
}

parent();

// Difference between execution stack and scope chain

var a = 'hallo';


function f() {
    var b = 'hi';
    g();

    function g() {
        var c = 'Hey';
        h();
    }
    
}

function h() {

    var d = 'John';
    console.log(c);
    
}

f();

/**
 * Task
 * 
 * Implement a function methods in each object that
 * changes the object attributes
 * 
 * 
 */

// Some objects

// A monster in a computer game
var monster = {

    name: 'casper',
    color: 'white',
    height: 'flexible',
    visible: false,
    opacity: 0.6,
    brothers: 3,

    attack: function(address) {
        console.log("Preparing for devastating attack at ", address);
        this.height = 'XXXXHigh';
        this.visible = true;
        this.opacity = 1.0;
    },
    sleep: function() {
        this.color = 'lightgray';
        this.height = '90',
        this.visible = true;
        this.opacity = 0.8;
    },
    charm: function() {}

};


var playerLoL = { // League of Legends

    mana: 200,
    health: 200,
    skills: ['ignite','flash','heal','exhaust'],
    inventory: ['sword','tesla','shield','portion'],

    // Type either 'melee' or 'range'
    fight: function(type, enemy) {
        var action = {
            eType: type,
            enemy: enemy,
            move: this.skills[1],
            weapon: this.inventory[3]
        };
        return action;
    },

    kill: function(enemy) {
        var action = {
            enemy: enemy,
            move: this.skills[0],
            weapon: this.inventory[0]
        };
        return action;
    },

    die: function() {
        this.health = 0;
    },

    move: function(speed, direction, style) {
        var action = {
            speed: speed,
            direction: direction,
            style: style
        };
        return action;
    }

};

var entenhausen = {

    population: 150,
    shops: 10,
    weather: '50/50',
    animals: ['ducks','mice','dogs','geese', 'cats'],
    grow: function(numPopulation) {
        this.population += numPopulation;
    },
    celebrate: function() {this.weather = 'really sunny';},
    burn: function() {
        this.shops = 0;
        this.population = 10;
    },
    occupied: function() {
        
    }

}; // The city where Donald Duck and others live.



function calculate(year) {
    console.log( 2018 - year );
    console.log( this );
}

console.log(calculateAge(1985));


var john = {

    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
    },
    changeName: function(newName) {
        this.name = mewName;
    }
}


john.calculateAge();


var haha = true;