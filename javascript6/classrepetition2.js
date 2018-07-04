class ITGuy {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    drinkCoffee() {
        console.log("My name is "  + this.name + ", and I am" + 
        " drinking coffee now.");
    }

    talkAboutTechStuff() {
        console.log("My name is " + this.name + 
         " and I am talking about tech stuff now.");
    }

    talkAboutCodingSpeed() {
        console.log("My name is "  + this.name + ", and I am" + 
        " talking about coding speed now.")
    }
}




class Developer extends ITGuy {
    constructor(name, age, skills, github) {
        super(name, age);
        this.skills = skills;
        this.github = github;
    }

    /*
    remove() {
        $.ajax ({
            method: "POST",
            url: "http://localhost.8080/delete",
            data: JSON.stringify({nickname:this.nickname}),
            success: function (data) {
                console.log("User has been deleted.");
            }
        });
    }
    */

    understandJavascript(really) {
        if (really)
            console.log("I am understanding Javascript");
        else
            console.log("Too Bad.");
    }

    copyPasteFromStackOverFlow() {
        console.log("Once again, I am copy pasting from " + 
        "StackOverflow...");
    }

}

// Task:
// Create a subclass QualifyAssurance and ProjectManager
// From the parent class ITGuy


class QualifyAssurance extends ITGuy {
    constructor(name, age, experience, result) {
        super(name, age);
        this.experience = experience;
        this.result = result;
    }

    testCode(product) {
        this.experience++;

    }

    giveResult() {
        return this.result;
    }
}


class ProjectManager extends ITGuy {
    constructor(name, age, decision, undeservedExtraSalary, contractList) {
        super(name, age);
        this.decision = decision;
        this.undeservedExtraSalary = undeservedExtraSalary;
        this.contractList = contractList;
    }

    abusePower() {
        console.log("Com'on. When is it done.");
    }

    burnOut() {
        setTimeout( function(e) {
            console.log("I am going to sabbatical.");
        }, 1000*60*24*50*6); // half a year
    }

    takeDecision() {
        if(correct) 
            this.decision = "Approved";
        else
            this.decision = "Reproved";
        return this.decision;
    }
}

// Lets create two developers and one project manager
var developer1 = {
    name: "Max",
    age: 36,

    drinkCoffee: function () {
        console.log("My name is "  + this.name + ", and I am" + 
        " drinking coffee now.");
    },

    talkAboutTechStuff: function () {
        console.log("My name is " + this.name + 
         " and I am talking about tech stuff now.");
    },

    talkAboutCodingSpeed: function () {
        console.log("My name is "  + this.name + ", and I am" + 
        " talking about coding speed now.")
    },

    understandJavascript: function (really) {
        if (really)
            console.log("I am understanding Javascript");
        else
            console.log("Too Bad.");
    },

    copyPasteFromStackOverFlow: function () {
        console.log("Once again, I am copy pasting from " + 
        "StackOverflow...");
    }
}

var developer2 = {};

Object.assign(developer2, developer1);

var max = new ITGuy("Max", 35);

var sabine = new ITGuy("Sabine", 28);


var jan = new Developer("Jan", 32, ["JavaScript", "HTML", "CSS", 
    "NodeJS"], "foobaroo");

var ashok = new Developer("Ashok", 32 ["JavaScript", "HTML", 
    "CSS", "NodeJS"], "ashok");


var johannes = new ProjectManager("Johannes", 32, 5000 [jan, ashok]);

