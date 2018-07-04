var sendrequestObj = document.getElementById("send-request");
var sendrequestsyncObj = document.getElementById("send-sync-request");
var sendrequestasyncObj = document.getElementById("send-async-request");
var alertsomethingObj = document.getElementById("alertsomething");

alertsomethingObj.onclick = function () {
    console.log("Alerting somithing...");
}

// Auxiliary function that checks if an object is empty (from coderwall site)
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


sendrequestObj.onclick = function () {
    var request = new XMLHttpRequest();
    request.open("GET", "http://cileria.com:3050/longrequest", false);
    console.log("Sending request...");
    request.send(null);

    if (request.status === 200)
        console.log(request.responseText);
    


        /*
    var data = {};
    setTimeout(() => {  
        console.log("Done set to true.");
        data = {username: "max"}; // This is only applied after 2 seconds
    }, 2000);

    // Using a loop may force the program to wait before printing the modified data
   * while (isEmpty(data)) { // The problem is this put all on an infinite loop
        console.log("waiting...");aa
        if (!isEmpty(data))
            break;
    }*/

    // console.log("username = " + data.username);
}

sendrequestsyncObj.onclick = function () {
    var request = new XMLHttpRequest();
    request.open("GET", "http://cileria.com:3050/longrequest", false);
    console.log("Sending request...");

    request.send(null);

    console.log("data: " + request.responseText);

    if (request.status === 200)
        console.log(request.responseText);
    
}

sendrequestasyncObj.onclick = function () {
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://cileria.com:3050/longrequest", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("success, status code is 200.");

            var data = xhr.responseText;
            var dataObj = JSON.parse(data);

            console.log(data);
            console.log(dataObj);
        }
    }

    xhr.send();

}
