sayHelloExpression();

// function expression
function sayHelloExpression() {
    console.log("Hello from function expression.");
}

// console.log( y ); // y exists nowhere. So it won't work

console.log( x );  // x is somewhere declared and assigned

// sayHelloStatement(); // Here it's not possible. There's no assignment yet

// function statement
var sayHelloStatement = function () {
    console.log("Hello from function statement.");
}

sayHelloStatement(); // Here there's already an assignment. So it works



var x = 1; // Here is x


// es6

var sayHelloStatement6 = () => {
    console.log("Hello from function statement es6.");
}

var sayHelloStatement6b = (name) => {
    console.log("Hello " + name + " from function statement es6.");
}

sayHelloStatement6b("max");


var multiply = (a,b) => { return a*b }; // imperative
console.log( multiply(2,5) );  


 var multiply2 = (a, b) => a * b; // functional
 console.log( multiply2(2, 7) );


 /**
  * 
  * Task:
  * 
  * Write an array function version of the following
  * es5 functions
  * 
  * 
  */

  function intro(name, age) {
      return "My name is " + name + " and I am " + age + " years old.";
  }

  function doubleArr(arr) {
      return arr.map( function (el) {
          return 2 * el;
      });
  }

  var person = {
      age: 30,
      name: "max",
      intro: function () {
          console.log("My name is " + this.name + " and I am " + this.age + " years old.");
      }
  }

  person.intro();
  
  /** ----------------------------------------------------------------- */

  // es6 version
  var intro6 = (name, age) => "My name is " + name + " and I am " + age + " years old.";

  var doubleArr6 = arr => arr.map( el => 2 * el);

  var person6 = {
      age: 30,
      name: "max",
      // The arrow function is not exactly suitable for use as a part of an object
      // It works better with the window-object context
      intro()  { // es6 shorthand method definition
          console.log("My name is " + this.name + " and I am " + this.age + " years old.");
      }
      
  }

console.log(intro6("Joao", 36));

person6.intro();

var box6 =  {
    color: "green",
    position: 1,
  /**  clickMe: function () { NOT WORKING FOR UNKNOWN REASON
        document.querySelector(".green").addEventListener('click', () =>  {
            var str = "This is box number " + this.position + " and the color is " +
                        this.color;
            alert(str);
        });
    },*/

    foo: () => {
        alert("My position is " + this.position);
        // this.position is undefined because
        // 'this' will reference to window object
    },

    foo2() { // es6, same as foo2: function() {}
        var x = () => {
            console.log( 'Parent scope this.position = ' + this.position );
        }
        x();
    },

    


}

// box6.clickMe();
box6.foo();
box6.foo2();
// box6.clickMe();


