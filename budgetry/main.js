
// Budget Controller App controller
var budgetController = (function () {
    
    function Expense(type, description, value) {
        this.type = type;
        this.description  = description;
        this.value = parseInt(value);
    }

    function Income(type, description, value) {
        this.type = type;
        this.description = description;
        this.value = parseInt(value);
    }

    var item;

    var items = [];

    var incomes = [];

    var expenses = [];

    var budget = 0;

    var incomeTotal = 0;

    var expensesTotal = 0;

    var totalPerc = 0;


    var addItem = function (input) {
        if (input.type == "income") {
            item = new Income(input.type, input.description, input.value);
            incomeTotal += parseInt(input.value);
        }
        else {
            item = new Expense(input.type, input.description, input.value);
            expensesTotal += parseInt(input.value);
        }
        items.push(item);
        console.log('​addItem -> items', items);
    };
    

    var calculateTotal = function (total1, total2) {
        return total2 - total1;
    };

    var calculateBudget = function () {
        
        /*
        for (i = 0; i < items.length; i++) {
            item = items[i];
            
            if (item.type == "expense")
                expensesTotal += item.value;
            else 
                incomeTotal += item.value; 
        }
        */
        budget = calculateTotal(expensesTotal, incomeTotal);
        totalPerc = calculateTotalPercentage(expensesTotal, incomeTotal);
    };

    var calculateTotalPercentage = function (total1, total2) {
        return Math.round((total1 / total2) * 100);
    };

    var calculatePercentage = function (itValue, totalInc) {
        return Math.round((itValue / totalInc) * 100);
    };

    

    return {

        
    
        getBudget: function (input) {
            addItem(input);
            calculateBudget();
          /*  for (var i = 0; i < items.length; i++) {
                currElement = items[i];
                if (currElement.type == "expense") {
                    perc = calculatePercentage(currElement.value, incomeTotal);
                    items[i] = {
                        type: currElement.type, 
                        description: currElement.description, 
                        value: currElement.value, 
                        percent: perc
                    };
                }                
          } */
            return {
                incomeTotal,
                expensesTotal,
                totalPerc,
                budget
            }
        },

        removeItem: function (type, id) {
            
            type = "income";

            id = items[type].map(function (current) {
                console.log(current);
                return current.id;
            });

            index = ids.indexOf(id);

            if (index !== -1) 
                data.allItems[type].splice(index, 1);

            console.log(index);
        }

        
    }
})();

// UI Controller App controller
var UIController = (function () {

    var DOMStrings = {
        inputType: ".addType",
        inputDescription: "#addDescription",
        inputValue: "#addValue",
        // inputType = "add__type"
        inputBtn: "submit-item"
    };


    return {

        getInput: function () {
            return {
                type : document.querySelector(DOMStrings.inputType).value,
                description : document.querySelector(DOMStrings.inputDescription).value,
                value : document.querySelector(DOMStrings.inputValue).value
            }
           
        },

        addListItem: function (item, incomeTotal) {
            if (item.type == "income")
                document.getElementById("incomeList").innerHTML += "<tr class='dataRow'><td class='desc'>" + item.description + 
                    "</td><td class='val'>+ " + item.value + "</td><td><button type='submit' class='clear-elem'><i class='ion-android-delete' title='Remove this income'></i></button></td></tr>";
            else {
                if (incomeTotal !== 0) {
                    perc =  Math.round((item.value / incomeTotal) * 100);
                    document.getElementById("expensesList").innerHTML += "<tr class='dataRow'><td class='desc'>" + item.description + 
                        "</td><td class='val'>- " + item.value + "</td><td class='percent'>" + perc + "%</td><td><button type='submit' class='clear-elem'><i class='ion-android-delete' title='Remove this income'></i></button></td></tr>"; 
                }
                else
                    document.getElementById("expensesList").innerHTML += "<tr class='dataRow'><td class='desc'>" + item.description + 
                        "</td><td class='val'>- " + item.value + "</td><td class='percent'>0%</td><td><button type='submit' class='clear-elem'><i class='ion-android-delete' title='Remove this income'></i></button></td></tr>"; 
            }    
            /*    
            for (var i = 0; i < items.length; i++) {
                if (items[i].type == "income")
                    document.getElementById("incomeList").innerHTML += "<tr class='dataRow'><td class='desc'>" + items[i].description + 
                    "</td><td class='val'>+ " + items[i].value + "</td><td><button type='submit' id='clear-elem' ><i class='ion-android-delete' title='Remove this income'></i></button></td></tr>";
                else
                    document.getElementById("expensesList").innerHTML += "<tr class='dataRow'><td class='desc'>" + items[i].description + 
                    "</td><td class='val'>- " + items[i].value + "</td><td class='percent'>" + items[i].percent + "%</td><td><button type='submit' id='clear-elem' ><i class='ion-android-delete' title='Remove this income'></i></button></td></tr>";
            }      */          
        },

        clearFields: function () {
            document.getElementById("addDescription").value = "";
            document.getElementById("addValue").value = "";
           /* document.getElementById("").innerHTML = "";
            document.getElementById("").innerHTML = "";
            document.getElementById("").innerHTML = "";
            document.getElementById("").innerHTML = "";
            document.getElementById("").innerHTML = "";
            */
        },

        displayBudget: function (budget, totalIncome, totalExpenses, totalPerc) {
            if (budget === 0) {
                document.querySelector("#totalValue").innerHTML = "";
            
                document.querySelector(".incomeValue").innerHTML = "";
                document.querySelector(".expensesValue").innerHTML = "";
                document.querySelector(".expensesPercentage").innerHTML ="";
            }

            if (budget > 0)
                document.querySelector("#totalValue").innerHTML = "+ " + budget;
            else
                document.querySelector("#totalValue").innerHTML = "- " + budget;
            
            document.querySelector(".incomeValue").innerHTML = "+ " + totalIncome;
            document.querySelector(".expensesValue").innerHTML = "- " + totalExpenses;
            document.querySelector(".expensesPercentage").innerHTML = totalPerc + "%&nbsp;";
        },

        removeItem: function (r) {
          //  var i = r.parentNode.parentNode.rowIndex;
          //  document.getElementById("incomeList").deleteRow(i);
        },

        getDOMStrings: function () {
            return DOMStrings;
        }
    }
    
})();

// Global App controller
var controller = (function (budgetCtrl, UIContrl) {
    // var incomeTotal = 0, expensesTotal = 0, totalBudget = 0;

    var setupEventListeners = function () {

        var DOM = UIContrl.getDOMStrings();

        document.querySelector("#submit-item").addEventListener("click", ctrlAddItem);

        

        document.addEventListener('keypress', function(e) {
            if (e.keyCode === 13)
                ctrlAddItem();
        });

        document.querySelector("#clear-fields").addEventListener("click", UIContrl.clearFields);

        document.querySelector("#budgetTable").addEventListener("click", ctrlDeleteItem);
    };

    var ctrlAddItem = function () {

        var input;


        
        input = UIContrl.getInput();
        console.log('​ctrlAddItem -> input', input);
        var res = budgetCtrl.getBudget(input);
        console.log('​ctrlAddItem -> res', res);
        UIContrl.addListItem(input, res.incomeTotal);
        UIContrl.displayBudget(res.budget, res.incomeTotal, res.expensesTotal, res.totalPerc);

        // console.log(res.budget);
        console.log(res.incomeTotal);
        console.log(res.expensesTotal);

        // var button = document.getElementById("submit-item");
        // $('#submit-item').on('click', ((e) => {
        //     console.log(e);
        //     // e.preventDefault();
        //     type = $( "select option:selected" ).each(function() {
        //             str += $( this ).text() + " ";
        //         });
                
            
            
        //     description = $("addDescription").val();
        //     value = $("addValue").val();

        //     UIContrl.addListItem(type, description, value);
        // }));
    };
/*
    var updateBudget = function () {
        budgetCtrl.getBudget();
        UIContrl.displayBudget();
        // Calculate and update the percentages
    };*/

    var ctrlDeleteItem = function (event) {

        var itemID = event.target.parentNode.parentNode.parentNode.rowIndex;
        console.log('​ctrlDeleteItem -> itemID', itemID);

        if (itemID) {
            // UIContrl.removeItem(itemID);
            // budgetCtrl.removeItem(itemID);

            // updateBudget();
        }
    }
    

    return {
/*
        ctrlClear: function () {
            $("#clear-fields").on("click", ((e) => {
                document.getElementById("addDescription").innerHTML = "";
                document.getElementById("addValue").innerHTML = "";
            }));
        },*/

        
        
        

        init: function () {
            console.log("Application has started...");
            setupEventListeners();
            // UIContrl.displayBudget();
        }
    }
})(budgetController, UIController);

// We have to use the following fundamentals

// objects, prototype, invoke

controller.init();
