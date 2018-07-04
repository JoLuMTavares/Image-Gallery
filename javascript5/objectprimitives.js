// Primitives

var a = 23;
var b = a;

a = 46;

console.log(a); // Now 46
console.log(b); // Remains 23

// Objects

var obj1 = {
    name: 'John',
    age: 26
}

console.log( obj1 );

var obj2 = obj1; // Referencing pointing to obj1

obj1.age = 30;

console.log( obj1 );
console.log( obj2 );

var age = 32;
var obj3 = {
    name: 'Jan',
    city: 'Berlin'
};

function change(a, b) {
    a = 30;
    b.city = 'New York';
}

change(age, obj3);

console.log( age );
console.log( obj3 );

var obj4 = {
    name: 'Robot',
    id: 1
};

var obj4Clone = {};

Object.assign(obj4Clone, obj4);

obj4Clone.id = 2;

var obj4Reference = obj4;
obj4Reference.id = 3;

console.log(obj4Reference.id);