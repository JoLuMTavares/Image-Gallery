function multiply(a, b=1) {
    return a*b;
}

console.log ( multiply(5,2) );
console.log ( multiply(5) );

// Task: rewrite multiply with the same return
//       value under the restriction that it does
//       not use a default parameter.


function multiplyNoDefault(a, b) {
    if (!b) {
        console.log("b is not defined!");
        return a*1;
    }
        
    else
        return a*b;
}

console.log(multiplyNoDefault(5,2));
console.log(multiplyNoDefault(5));