/**
 * 
 * This file was created because some 
 * colleagues weren't here on the last
 * class.
 * 
 */

 function myBlock() {
     var i = 2;


     function myChildBlock() {
         console.log( i );
     }

     myChildBlock();

 }


 myBlock();


//  console.log( i );

 // anonymous blocks

 for (var j = 0; j < 10; j++) {
     console.log( j );
 }