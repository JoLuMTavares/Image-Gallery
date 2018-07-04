
function createStarPyramid(num) {

    var numb = '';

    for (var i=1; i <= num; i++) {
        console.log(numb += '*');
    }
}

// call the Method
console.log('===Using Method===');
createStarPyramid(5);

// Task 3: Create the following pyramid using function and
// parameter passing.
/**
 * Output:
 * 
 *          *
 *        *   *
 *      *   *   *
 *    *   *   *   *
 * and so on... 
 */

/*
 function createRealStarPyramid(num) {
    var fArr = [];
    var value = '';
    var outSpaces = '  ';
    if (num == 1)
        console.log('*');
    else {
        for (var j = 0; j < num; j++) {
            // value = '';
            
            for (let index = 0; index < num/2; index++) {
                if(index%2 == 0)
                    value += ' ';
                else
                    value += '*';
                
            }
            for (var i = 0; i < num-j; i++) {
                outSpaces += ' ';
            }
                
            
            console.log(outSpaces+value);
            outSpaces = '  ';
        }
        /*
        var mid = Math.floor(num / 2);
        for (var l = 0; l < mid; l++)
            fArr[l] = ' ';
        fArr[mid] = '*';
        for (var i = mid+1; i <= num; i++)
            fArr[i] = ' ';
            *
       
      

    }
    
    

 }
*/

function createRealStarPyramid(num) {
    var value = '';
    var outSpaces = ' ';
    if (num == 1)
        console.log('*');
    else {
        for (let i = 0; i < num; i++) {
            outSpaces = "  ";
            for (var j = 0; j <= num-i; j++)
                outSpaces += "  ";
            value += "*   ";
                
            console.log(outSpaces+value);
        }
    }
}

 createRealStarPyramid(24);


 /**
  * 
  * Task 4: Create the following pyramid
  * using function and parameter passing,
  * 
  * Output:
  * 
  *     *****
  *     ****
  *     ***
  *     **
  *     *
  */

  function reversePyramid(num) {

    var numb = '';

    var star = '*';
/*

    This version works well. But it has
    two loops.
    for (var r = num; r > 0; r--) {
        for (var i = 0; i < r; i++) 
            numb += '*';
        console.log(numb);
        numb = '';
    }
*/

/**
 * But this next one has only one loop.
 * So it gives less operations and, therefore,
 * better time.
 */
    for (var j = num; j > 0; j--) {
        numb += star.repeat(j);
        console.log(numb);
        numb = '';
    }
    

  }


  reversePyramid(6);


  function reverseOrganizedPyramid(num) {
    var value = '';
    var outSpaces = "  ";
    if (num == 1)
        console.log('*');
    else {
        for (let i = num; i > 0; i--) {
            value = ' ';
            
            for (var j = 0; j < i ; j++)
                value += '   *';    
            
            outSpaces += "  ";    
            console.log(outSpaces+value);
        }
    }
  }


  reverseOrganizedPyramid(24);


  /**
   * 
   * Task 5: Create the same kind of Pyramid, 
   * but this time with numbers on the Output.
   * 
   * Output:
   * 
   *        1
   *      2   2
   *    3   3   3
   *  4   4   4   4
   * 
   * and so on...    
   */

  function createNumberStarPyramid(num) {
    var res = '';
    var value = '';
    var outSpaces = ' ';
    if (num == 1)
        console.log('1');
    else  {
        for (let i = 1; i <= num; i++) {
            outSpaces = "  ";
            value = " ";
            res = "";
            for (var j = 0; j <= num-i; j++)
                outSpaces += "  ";
            value += "" + i + "  ";
            res += value.repeat(i);  
            console.log(outSpaces+res);
        }
    }
}

createNumberStarPyramid(9);


var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var strLength = txt.length; // It will return the length of the string
console.log("length==>"+strLength);

// Returns the first position
var str = "Please locate where 'locate occurs!'";
var pos = str.indexOf("locate");
console.log("indexOf==>"+pos);

// last index
var str="Please locate where 'locate occurs!'";
var pos=str.lastIndexOf("locate");
console.log("lastIndexOf==>"+pos);


// search method
var str = "Please locate where 'locate occurs!'";
var pos = str.search('locate');
console.log("search==>"+pos);


/**
 * 
 * EXTRACTING STRING PARTS
 */

 var str = "Apple, Banana, Kiwi";

 var res = str.slice(7, 13);

 console.log("slice==>"+res);

 var negRes = str.slice(-12, -6);

 console.log("negative slice==>"+negRes);

 var res2 = str.slice(7);
 console.log("just slice==>"+res2);

/**
 * Substring doesn't accept negative
 * values as indexes.
 */
 var res3 = str.substring(7,13);
 console.log("Substring==>"+res3);

 // replace
 var str = "Please visit Microsoft!";
 var n = str.replace("Microsoft", "Google");
 console.log('replace==>'+n);

 // Uppercase

 var text1 = "Hello World.";
 var text2 = text1.toLocaleUpperCase(); // text2 is text converted to lower
 console.log("uppercase==>"+text2);



 // lowercase

 var text3 = "Hello World.";
 var text4 = text3.toLocaleUpperCase(); // text2 is text converted to lower
 console.log("uppercase==>"+text4);



var text5 = "Hello" + " " + "World";
console.log("using + ==>"+text5);

var text6 = "Hello".concat(" ", "World");
console.log("concat ==>" + text6);

// charAt
var str = "HELLO WORLD";
console.log("charAt ==>"+str.charAt(3));






