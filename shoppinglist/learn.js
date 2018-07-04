var addButton = document.getElementById("btnAdd");

var remButton = document.getElementById("btnRemove");

var btnGetObj = document.getElementById("btnGet");

addButton.onclick = function () {
    var textValueObj = document.getElementById("txtValue");

    var txtValue = textValueObj.value;

    console.log("btnAdd clicked...");

    console.log("Textbox value ==> " + txtValue);

    document.getElementById("txtValue").value = "";

    // create one element
    var newListItem = document.createElement("li");
    newListItem.innerHTML = txtValue;
    newListItem.id = "key1";

    // Now adding this element to the ul
    document.getElementById("itemList").appendChild(newListItem);

    // add item to local storage
    localStorage.setItem("key1", "Apple");
    console.log("Item added...");

}


remButton.onclick = function () {
    var textValueObj = document.getElementById("txtValue");

    var txtValue = textValueObj.value.toLowerCase();


    var key1 = "";


    localStorage.removeItem("key1", key1);
    console.log("item removed...");
}


// bind get button click event
btnGetObj.onclick = function () {
    console.log("btnGet clicked...");

    // get item from the local storage
    var item = localStorage.getItem("key1");

    console.log("Storaged item ==> " + item);
}


// When the user presses enter

var inputE = document.getElementById("txtValue");

inputE.addEventListener("keyup", function (event) {
    //  To cancel the default action, if needed
    event.preventDefault();
    // The code that represents the "Enter" key
    if (event.keyCode === 13)
       // Calling the addgift button
       document.getElementById("btnAdd").click();

});