var mainC = document.getElementById("main-content");

var usersSet = [];

// Some variables to control the shown content

var actUsers = 0;

var actComments = 0;

var actAddUsers = 0;

var actAddCom = 0;

// This is for XML HTTP requests
var xhr = new XMLHttpRequest();

/*
if(localStorage.getItem("user")) {
    var usersJSON = localStorage.getItem("user");

    usersSet = JSON.parse(usersJSON);




}*/

var options = document.getElementsByClassName("nav-link");
console.log('​options', options);


var users = document.getElementById("users");
console.log('​users', users);

var comments = document.getElementById("comments");

var addUser = document.getElementById("add-user");
console.log('​addUser', addUser);

var addComm = document.getElementById("add-comment");

// Initialization

function init() {
    getUsers();
    document.getElementById("users-list").style.display = "block";
    document.getElementById("comments-list").style.display = "none";
    document.getElementById("main-user").style.display = "none";
    document.getElementById("main-comment").style.display = "none";
}


init();


/** 
 * Functions to get the users from the server
 * created by Jan
 * 
 * The server is cileria
 * 
 * The link is htp://cileria.com:3050/ 
 * 
 * 
 */ 

 // This one gets the users
 function getUsers() {
    // var data, dataObj;

    xhr.open("GET", "http://cileria.com:3050/users/");

    // This is for the type of expected response
    // xhr.setRequestHeader("Content-Type", "application/json"); // Type of body

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("success, status code is 200");

            var data = xhr.responseText;
            var dataObj = JSON.parse(data);

            console.log(data);
            console.log(dataObj);

            // Construction of the table
          /*  var table = document.createElement("table");
            var th1 = document.createElement("th");
            th1.innerHTML = "Name";
            table.innerHTML = th1;
            var th2 = document.createElement("th");
            th1.innerHTML = "Username";
            table.innerHTML += th2;
            var th3 = document.createElement("th");
            th1.innerHTML = "Email";
            table.innerHTML += th3;
*/

            var tableString = "<table>";
            tableString += "<th>Name</th>";
            tableString += "<th>Username</th>";
            tableString += "<th>Email</th>";
            for (var i = 0; i < dataObj.length; i++) {
                tableString += "<tr>";
                // var nameData = data[i].name;
                tableString += "<td>" + dataObj[i].name + "</td>";
                tableString += "<td>" + dataObj[i].username + "</td>";
                tableString += "<td>" + dataObj[i].email + "</td>";
                tableString += "</tr>";

            }

            tableString += "</table>";

            var usersList = document.getElementById("users-list");
            usersList.innerHTML = tableString;
        }
    } 
    xhr.send();    
 }

// This function gets the list of comments
// from the server and shows it on the page
function getComments() {
    // var data, dataObj;

    xhr.open("GET", "http://cileria.com:3050/comments/");

    // This is for the type of expected response
    // xhr.setRequestHeader("Content-Type", "application/json"); // Type of body

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("success, status code is 200");

            var data = xhr.responseText;
            var dataObj = JSON.parse(data);

            console.log(data);
            console.log(dataObj);

            // Construction of the table
  
            var tableString = "<table>";
            tableString += "<th>Name</th>";
            tableString += "<th>Email</th>";
            tableString += "<th>Comment</th>";
            for (var i = 0; i < dataObj.length; i++) {
                tableString += "<tr>";
                // var nameData = data[i].name;
                tableString += "<td>" + dataObj[i].name + "</td>";
                tableString += "<td>" + dataObj[i].email + "</td>";
                tableString += "<td>" + dataObj[i].body + "</td>";
                tableString += "</tr>";

            }

            tableString += "</table>";

            var commentsList = document.getElementById("comments-list");
            commentsList.innerHTML = tableString;
        }
    } 
    xhr.send();    
 }

 // This function adds a new user to the server

 function createUser() {
    var data, dataObj;
    xhr.open("POST", "http://cileria.com:3050/users/");

    // This is for the type of expected response
    xhr.setRequestHeader("Content-Type", "application/json"); // Type of body

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("success, status code is 200");

            data = xhr.responseText;
            dataObj = JSON.parse(data);

            console.log(data);
            console.log(dataObj);

        }
    } 

    var name = document.getElementById("validationCustom01");

    var username = document.getElementById("validationCustom02");

    var emailAddress = document.getElementById("validationCustomEmail");



    var body = {
        "name": name.value,
        "username": username.value,
        "email": emailAddress.value
    };
    xhr.send(JSON.stringify(body));
    // return dataObj;
 }

 // This function inserts a new comment, associated
 // to a user, to the server
 // This function adds a new user to the server

 function createComment() {
    var data, dataObj;
    xhr.open("POST", "http://cileria.com:3050/comments/");

    // This is for the type of expected response
    xhr.setRequestHeader("Content-Type", "application/json"); // Type of body

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("success, status code is 200");

            data = xhr.responseText;
            dataObj = JSON.parse(data);

            console.log(data);
            console.log(dataObj);

        }
    } 

    var name = document.getElementById("validationCustom04");

    var emailAddress = document.getElementById("validationCustom05");

    var newComment = document.getElementById("validationCustom06");



    var body = {
        "name": name.value,
        "email": emailAddress.value,
        "body": newComment.value
    };
    xhr.send(JSON.stringify(body));
    // return dataObj;
 }

 function loadUsers() {
    var usersList = getUsers();
    console.log('​loadUsers -> usersList', usersList);
 }



 users.onclick = function () {
    loadUsers();
    document.getElementById("users-list").style.display = "block";
    document.getElementById("comments-list").style.display = "none";
    document.getElementById("main-user").style.display = "none";
    document.getElementById("main-comment").style.display = "none";
   
}


comments.onclick = function () {
    getComments();
    document.getElementById("users-list").style.display = "none";
    document.getElementById("comments-list").style.display = "block";
    document.getElementById("main-user").style.display = "none";
    document.getElementById("main-comment").style.display = "none";
}


addUser.onclick = function () {
    document.getElementById("users-list").style.display = "none";
    document.getElementById("comments-list").style.display = "none";    
    document.getElementById("main-user").style.display = "block";  
    document.getElementById("main-comment").style.display = "none";
}

// Now the button that will trigger the user creation



addComm.onclick = function () {
    document.getElementById("users-list").style.display = "none";
    document.getElementById("comments-list").style.display = "none";
    document.getElementById("main-user").style.display = "none";
    document.getElementById("main-comment").style.display = "block";
}


var submitB = document.getElementById("submit-comm");

submitB.onclick = function () {
    createComment();
}



