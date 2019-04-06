// start with multiple variables to hold the questions and answers for the trivia game (most likely arrays within a master array)
// create a variable to hold the users choice for the question
var game = {
    questions: [
        {
            question: "What year did the Dallas Stars win the Stanley Cup?",
            answers: [
                "1997",
                "1999",
                "2000",
                "2002"
            ],
            correct: "1999"
        },
        {
            question: "Who was the Captain for the team for the Stanley Cup Victory?",
            answers: [
                "Eddy Belfor",
                "Mike Modano",
                "Brett Hull",
                "Darien Hatcher"
            ],
            correct: "Darien Hatcher"
        },
        {
            question: "Until this year (2019) when was the last time the Stars qualified for the playoffs?",
            answers: [
                "2018",
                "2012",
                "2016",
                "2002"
            ],
            correct: "2016"
        },
        {
            question: "Who scored the Cup winning goal for the Stars?",
            answers: [
                "Darien Hatcher",
                "Brett Hull",
                "Mike Modano",
                "Eddy Belfor",
            ],
            correct: "Brett Hull"
        },
        {
            question: "What team did the Stars NOT have to face on their way to win the Stanley Cup?",
            answers: [
                "Buffalo Sabers",
                "Colorado Avalanche",
                "LA Kings",
                "St. Louis Blues",
            ],
            correct: "LA Kings"
        },
    ],

    // add more variables, to count correct and incorrect guesses, and a last variable to show the users score
    correctCount: 0,
    incorrectCount: 0,
    userAnswer: "",
    currentIndex: 0,
    currentQuestion: {},

    // create logic to get questions at random and their answers and display them using the HTML
    randomOrder: function() {
        var currentIndex = this.questions.length, currentValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex =  Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            currentValue = this.questions[currentIndex];
            this.questions[currentIndex] = this.questions[randomIndex];
            this.questions[randomIndex] = currentValue;
        }
    },

    displayQuestion: function() {
        this.currentQuestion = this.questions[this.currentIndex];

        $("#question").text(this.currentQuestion.question);

        for (var i = 0; i < this.currentQuestion.answers.length; i++) {
			var newAnswer = $("<a href='#' class='answer'>").text(this.currentQuestion.answers[i]);
            $("#answers").append(newAnswer);
            console.log(this.currentQuestion.answers[i]);
        }

    },

    // create logic to determind if the users choices are right or wrong
    advanceGame: function() {
        if (this.userAnswer == this.currentQuestion.correct) {
            console.log("user answered: " + this.userAnswer);
            this.correctCount++;
            this.currentIndex++;
            console.log("Correct!")

            game.displayQuestion();
        } else {
            console.log(this.userAnswer);
            this.incorrectCount++;
            this.currentIndex++;
            console.log("Wrong!")
            $("#result-area").empty();
            $("#result-area").attr("class", "hidden");
            $("#game-area").attr("class", "");
            game.displayQuestion();
        }
    }

}
// create a timer, display it to the user, and if the timer reaches 0 before the user is done, stop the quiz and count all questions not answered as wrong
// LOL Who has time for that?
// get it?
// TIME!
// I'll leave

// take the questions that the user got correct and turn it into a score
// create a button to reset the game without having to refresh the page.

$(document).ready(function() {
	game.randomOrder();
	game.displayQuestion();

	$("body").on("click", ".answer", function() {
		game.userAnswer = $(this).text();
		game.advanceGame();
	});

	$("body").on("click", "#restart-button", function() {
		game.resetGame();
	});
});

