var xhr = new XMLHttpRequest();
function getPing() {
    xhr.open("GET", "http://cileria.com:3050/ping");

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("success, status code is 200");

            var data = xhr.responseText;
            var dataObj = JSON.parse(data);


            console.log(data);
            console.log(dataObj);

        }
    }

    xhr.send();
} 

function postPing() {
    xhr.open("POST", "http://cileria.com:3050/ping");

    // This is for the type of expected response
    xhr.setRequestHeader("Content-Type", "application/json"); // Type of body

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("success, status code is 200");

            var data = xhr.responseText;
            var dataObj = JSON.parse(data);


            console.log(data);
            console.log(dataObj);

        }
    }


    var body = {
        message: "hallo world",
        weather: "not so hot today"
    };

    xhr.send(JSON.stringify(body));
}


/**
 * 
 * 
 * Send the request only when the button is pressed.
 * Print out the response as an innerHTML of a new
 * div appended to the body
 * 
 */

 var getPingObj = document.getElementById("get-ping");

getPingObj.onclick = function () {
    getPing();
    
}


var postPingObj = document.getElementById("post-ping");

postPingObj.onclick = function () {

    postPing();
    
}

/**
 * 
 * Task:
 * 
 * Create a login with a username and a password and
 * a button "Login", that sends a POST request to 
 * cileria.com:3050/fakelogin. Then it behaves like the 
 * Postman request that we created. Think of the body
 * of the request and console.log out whether the login 
 * was successful or not.
 * 
 * 
 */


function fakeLogin() {
    xhr.open("POST", "http://cileria.com:3050/fakelogin");

    // This is for the type of expected response
    xhr.setRequestHeader("Content-Type", "application/json"); // Type of body

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("success, status code is 200");

            var data = xhr.responseText;
            var dataObj = JSON.parse(data);


            console.log(data);
            console.log(dataObj);

        }
    }

    var theUsername = document.getElementById("username");

    var thePassword = document.getElementById("password");

    console.log(theUsername.value);
    
    var loginData = {
        username: theUsername.value,
        password: thePassword.value
    };

    xhr.send(JSON.stringify(loginData));
}

 var loginObj = document.getElementById("login");

 
 loginObj.onclick = function () {
     fakeLogin();
 }




