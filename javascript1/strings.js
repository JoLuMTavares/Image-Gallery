function q(p) {
    console.log(p);
}

var txt1 = 'apple, banana, kiwi';
var res1 = txt1.slice(15, 19);

q(res1);

var res2 = txt1.slice(15);
q(res2);

var res3 = txt1.slice(-4);
q(res3);

var res4 = txt1.substr(7, 6);
q(res4);

var res5 = txt1.replace('kiwi', 'orange');
q(res5);

var res6 = txt1.toUpperCase();
q(res6);

var res7 = txt1.toLowerCase();
q(res7);

var firstName = 'Bob', secondName = 'Jones';
var res8 = firstName.concat(secondName);
q(res8);
q(firstName+secondName);

var res8a = 'Hallo'.concat(' ', 'World');
var res8b = 'Hallo'.concat(' ', txt1.slice(0,5));

var str1 = 'Hallo World';
var res9 = str1.charAt(0);
q(res9);

var res10 = str1[0];
q(res10);

var str2 = ['H','a','l','l','o',' ','W','o','r','l','d'];

q(str1);
q(str2);


var str3 = 'a,b,c,d,e';
q(str3);

var arrStr3 = str3.split(',');
q(arrStr3);

var str4 = 's,d,g,j;a,d,e:c';
var arrStr4 = str4.split(';');
q(arrStr4);

var str5 = 's,d,g,j;a,d,e:c';
var arrStr5 = str5.split(';').sort();
q(arrStr5);


// var str6 This was just a set of names
// The order is alphabetical and by the length

// * Task: Given the following string
var str7 = `devugees is a very good learning institute 
            where we learn good stuff like HTML, CSS and JavaScript`;

/**
 * Create a function named countWords which takes two
 * parameters searchTerm and str and returns the total
 * occurrences of searchTerm in str.
 * Test it with str7.
 * 
 * Hint: Keep things simple.
 */


 function countWords(searchTerm, str) {
     var arrStr = str.split(' ');
     var count = 0;
     for (var i = 0; i < arrStr.length; i++) {
        var currStr = arrStr[i];
        if (currStr.includes(",")) {
            var resStr = currStr.slice(0, currStr.length-1);
            if (resStr === searchTerm)
                count++;
        }
        else if (arrStr[i] === searchTerm)
            count++;
         
            
            
     }
     return count;
 }

var res7 = countWords('HTML', str7);

q(res7);


var str10 = 's,x,g,j,a,o,e,c';
var arrStr10 = str10.split(';');
q('joined together back as' + str1);


var str12 = 'abcdefghijklmnopqrstuvwxyz0123456789';

var arrStr12 = str12.split('');
q(arrStr12);

/**
 * 
 * Task:
 * 
 *  1) Google how to use Math.random()
 *  2) Create a function activationCode(n) with one
 *     parameter n that returns a string of length n
 *     whereas each character is a random character of
 *     the alphabet and the numbers 0 to 9.
 * 
 *      Example:    activationCode(5) = 'f94kx';
 *  3) Add a feature that each character can randomly
 *     can be either uppercase or lowercase.
 *      Example     activationCode(5) = 'F94KXy'
 * 
 * 
 */

var str13 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

 function activationCode(n) {


    

    var randomStr = '';
    for (var i = 0; i < n; i++) {
        var rNum = Math.floor(Math.random() * str13.length);
        randomStr += str13.substring(rNum, rNum+1);
    }
    return randomStr;

 }


 var rStr = activationCode(10);

 q(rStr);

 /**
  * 
  * Now the interesting task.
  * 
  * A function that receives any email and validates it.
  * By validating it, the email must have only one @.
  * On the left part of the email, there are a minimum of 8
  * characters and maximum of 32. Still on this part it must
  * have at least one letter. The $ and the % are not allowed.
  * 
  * On the right part, the domain name has a length between 6 
  * and 16 characters. The email has these extensions '.com',
  * '.de', '.org'.
  * 
  * Lets try this with less than 7 if statements
  * 
  */

  // First an auxiliary function to see if a certain character
  // is a number

  var numStr = '1234567890';

  function checkNum(c) {
    var arrStr = numStr.split('');

    for (var i = 0; i < arrStr.length; i++) {
        if (arrStr[i] == c)
            return true;
    }
    return false;
  }

  // Another version of the countWords (just that the separation
  // occurs without any space). This one returns boolean value
  function countWordsNoSpace(searchTerm, str) {
    var arrStr = str.split('');
        var count = 0;
        for (var i = 0; i < arrStr.length; i++) {
            if (arrStr[i] === searchTerm)
                count++;
        }
        return count;
    }

  // Now the validating function
  function validateEmail(email) {
      // Checking first if the '@' is there
      var atCount = countWordsNoSpace('@',email);
      if (( atCount == 0) || (atCount > 1))
        return false;
      else {
        // Splitting then the string in two arrays  
        var strArr = email.split('@');
        var leftStr = strArr[0];
        var rightStr = strArr[1];

        // Checking if the length is acceptable
        if ((leftStr.length > 32) || (leftStr.length < 8))
            return false;
        else if((countWordsNoSpace('$', leftStr) != 0) || (countWordsNoSpace('%', leftStr) != 0))
            return false;
        else {
            // Splitting the left String to see if 
            // there's at least one letter
            var tempArr = leftStr.split('');
            for (var i = 0; i < tempArr.length; i++) {
                if (checkNum(tempArr[i]) == true)
                    continue;
                // Now the right string. First checking if
                // there's the point that separate the company
                // from the general domain
                else if ((countWordsNoSpace('.', rightStr) == false))
                    return false;
                else {
                    // Splitting again
                    var secArr = rightStr.split('.');

                    // This one is only to check the length of 
                    // the string
                    var dom = secArr[0];
                    
                    // Confirming that one of these three domains match
                    if ((secArr[1] != 'de') && (secArr[1] != 'com') && (secArr[1] != 'org'))
                        return false;
                    // Checking if the length is acceptable
                    else if ((dom.length < 6) || (dom.length > 16))
                        return false;
                    else    
                        return true;
                }
            }
            return false;
        }
      }  
      
  }


var boolRes =  validateEmail("092138a4928348@gmailfire.com");

q('Email verification...');
q(boolRes);


var mailTemplate = `
        Hallo $USERNAME,
        Thank you for your registration at MyService.com.
        Your account balance is $ACCOUNT_BALANCE.
        Please hit the following activation link in order
        to complete your registration at MyService.com.

        https://myservice.com/activation/$ACTIVATIONCODE

        Enjoy it,
        Your MyService.com - Team
`;

/**
 * 
 * Task:
 * 
 * With the given template above, generate an email and
 * print it out.
 * Make it for the user 'alex'. He has 100 dolars and the
 * activation link will be attached to the activation code
 * function (having 20 characters).
 */

 var activationCodeVal = activationCode(20);

 q(activationCodeVal);

 function activationEmail(name, balance) {
     var activEmail = `
     Hallo `+ name + `,
     Thank you for your registration at MyService.com.
     Your account balance is `+ balance + `.
     Please hit the following activation link in order
     to complete your registration at MyService.com.

     https://myservice.com/activation/`+ activationCodeVal +`

     Enjoy it,
     Your MyService.com - Team
`
    return activEmail;
 }


 var activEmailRes = activationEmail('Michael', "$2000000000");

 q(activEmailRes);


 function activationEmailReplace(name, balance) {
    var mailFinal = mailTemplate.replace("$USERNAME", name);
    mailFinal = mailFinal.replace("$ACCOUNT_BALANCE", balance);
    mailFinal = mailFinal.replace("$ACTIVATIONCODE", activationCodeVal);

    return mailFinal;
 }

 var activEmailRes2 = activationEmailReplace('Michael', '$2000000000');


 q(activEmailRes2);

 // Using Piping to do the same operation

 var activEmailRes3 = mailTemplate.replace("$USERNAME", 'Alex')
                                   .replace("$ACCOUNT_BALANCE", '$100')
                                   .replace("$ACTIVATIONCODE", activationCodeVal);


q(activEmailRes3);  


