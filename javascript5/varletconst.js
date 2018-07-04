for(var i1 = 0; i1 < 10; i1++) {
    console.log(i1);
}

console.log("Where i1 stopped - " + i1);

function counter() {
    for (var i2 = 0; i2 < 5; i2++) {
        console.log(i2);
        
    }
}

counter();

// console.log("Trying the same with i2 - ");
// console.log(i2);

// In case of a conditional block

if(true)
    var i3 = 2;


console.log(i3);

// for an anonymous block

{
    var i4 = 3;
}

// Also is the same. i4 is inside a function scope,
// even if it is anonymous. Therefore it doesn't 
// work.


/**
 * As "let", there's also no access outside the
 * anonymous scope.
 */
{
    let i5 = 4;
}

// in a conditional block
if (true) {
    let i6 = 11;
}
    

for (let i7 = 0; i7 < 5; i7++)
    console.log(i7);


// console.log(i7);

let i8 = 10; // 1. assignment. This one is not possible
i8 = 15;     // 2. assignment, re-assingment
console.log(i8);


const i9 = 20; // 1. assignment
// i9 = 25;       // 2. assignment not allowed


// anonymous block
{
    const i10 = -5; // block scope
}

// console.log(i10); It doesn't work outside the block

function f(x) {
    let c = 7;
    return 2*x + c;
}

console.log( f(2) );