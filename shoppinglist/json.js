var obj = {
    a: 1,
    b: 2,
    c: 3
};

console.log( obj );


var objJSON = JSON.stringify(obj);

console.log( objJSON );

console.log( objJSON );


var objJSONReconverted = JSON.parse(objJSON);

console.log(objJSONReconverted);

var name;
if (localStorage.getItem("myname")) {

    name = localStorage.getItem("myname");

    var greetingObj = document.getElementById("greeting");
    greetingObj.innerHTML = "Hallo " + name;
}
else {
    var greetingObj = document.getElementById("greeting");
    greetingObj.innerHTML = "Hallo stranger.";
}

var n = [];
var x = localStorage.getItem("n");
if (x) {
    n = JSON.parse(x);
}

var addNumberObj = document.getElementById("addNumber");
addNumberObj.onclick = function () {
    n.push(n.length);
    console.log(n);

    var nJSON = JSON.stringify(n);
    localStorage.setItem("n", nJSON);
}




