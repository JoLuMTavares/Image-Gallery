(function  () {
    


    function Question(question, answer, correct) {
            this.question = question;
            this.answer = answer;
            this.correct = correct;
    }

    var quest1 = new Question("What is the name?", ["The name is Joao.","The name is Philip", "The name is Joseph"], 2);

    var quest2 = new Question("What is the age?", ["The age is 36.", "The age is 47."], 1);

    var quest3 = new Question("What is the car?", ["V12 Ferrari TDF.", "The car is Renault Clio Williams."], 1);

    var quest4 = new Question("What is the address?", ["No answer to this one.", "This question is strange.", "The address is Juliustrasse, 28", "The address is London Street.", "The address is private.", "The address is unknown."], 3);

    var quest5 = new Question("How is the World Cup going?", ["Going good until now.", "Not interested.", "It's a shame.", "It could be better.", "The best from all time.", "It's getting better."], 5);


    var questSet = [];

    questSet.push(quest1);
    questSet.push(quest2);
    questSet.push(quest3);
    questSet.push(quest4);
    questSet.push(quest5);

    Question.prototype.displayQuestion = function () {
    
        console.log(this.question);
        // console.log("Choose one of the possible answers.");

        for(i = 0; i < this.answer.length; i++)
            console.log(i + ":" + this.answer[i]);
            

    }

    Question.prototype.displayScore = function (score) {
        console.log("Your current score: ", + score );
        console.log("-------------------------------");
    }

    Question.prototype.checkAnswer = function (answerNumber, callback) {
        
        var sc;

        if (answerNumber === this.correct) {
            console.log("You chose the right answer.");
            sc = callback(true);
            
            // return 1;
        }
            
        else {
            console.log("You chose a wrong answer.");
            sc = callback(false);
            // return -1;
        }
        this.displayScore(sc);
    }

/*
    function game() {
        for (;;) {
            var randQuest = questSet[Math.floor(Math.random()*questSet.length)];
            randQuest.displayQuestion();
            var answer = prompt("Choose one of the possible answers by selecting the corresponding number.");
            if (answer == "exit") {
                console.log("Game over.");
                return;
            }

            else {
                ansNumber = parseInt(answer);
                randQuest.checkAnswer(ansNumber);
            }
            
        }
    }

    */

    // The closures version

   

    function score(correct) {
        var sc = 0;
        return function (correct) {
            if (correct)
                sc++; 
            return sc;
        }
    }

    var keepScore = score();

   

   function game() {
        
            var randQuest = questSet[Math.floor(Math.random()*questSet.length)];
            randQuest.displayQuestion();
            var answer = prompt("Choose one of the possible answers by selecting the corresponding number.");
            if (answer == "exit") {
                console.log("Game over.");
                return;
            }

            else {
                // ansNumber = parseInt(answer);
                randQuest.checkAnswer(parseInt(answer), keepScore);
                game();
            }
    }

    // var question = randQuest[0];

    

    

    game();

})(); // Invoke