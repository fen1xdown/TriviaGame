// start with multiple variables to hold the questions and answers for the trivia game (most likely arrays within a master array)
// create a variable to hold the users choice for the question
// class TriviaAnswer
// {
//     _text = "";
//     _ordinal = 0;

//     constructor (ordinal, text)
//     {
//         this._answerOrdinal = ordinal;
//         this._answerText = text;
//     }

// }

// class TriviaQuestion
// {

//     _text = "";
//     _answers = new Array();
//     _ordinal = 0;

//     constructor (ordinal, text)
//     {
//         this.tet  = text;
//         this.ordinal = ordinal;
//     }

//     setAnswers(answers)
//     {
//         this._answers = answers;
//     }
//     getAnswers() 
//     {
//         return this._answers;
//     }
//     addAnswer(ordinal, text)
//     {
//         _answers.splice(ordinal, 0, new TriviaAnswer(ordinal, text));
//     }

//     delAnswer(ordinal)
//     {

//     }
// }

// class TriviaChoice
// {
//     _ordinal = 0;
//     _answerChosen = -1;
//     _isCorrect = false;

//     constructor(ordinal)
//     {
//         this._ordinal = ordinal;
//     }

//     getIsCorrect()
//     {
//         return this._isCorrect;
//     }
//     setIsCorrect(isCorrect)
//     {
//         this._isCorrect = isCorrect;
//     }
// }

// var userAnswers = new Array();
// var currentUserAnswer;
// var currentCorrectAnswer;
// var currentQuestion;
// var allTriviaQuestions = [ new TriviaQuestion(0, 'question1'),
//                     new TriviaQuestion(1, 'question2'),
//                     new TriviaQuestion(2,  'question3')];


// var allQuestions = [{text: 'question1',answers: ['answer1', 'answer2', 'answerQ13', 'answer4'], correctAnswer: 'a' },
// {text: 'question2',answers: ['answer1', 'answer2', 'answer3', 'answer4'], correctAnswer: 'b'},
// {text: 'question3',answers: ['answer1', 'answer2', 'answer3', 'answer4'], correctAnswer: 'c'},
// {text: 'question4',answers: ['answer1', 'answer2', 'answer3', 'answer4'], correctAnswer: 'd'},
// ]
// add more variables, to count correct and incorrect guesses, and a last variable to show the users score (out of 100)

// create logic to get questions at random and their answers and display them using the HTML
    // example = var random = Math.floor(Math.random() * 1000) + 1; <=== something like that
// var randomQuestionIndex = Math.floor(Math.random() * allQuestions.length);
// var question = allQuestions[randomQuestionIndex];



// var questionRender = $("<div>");
// questionRender.text(question.text);
// $("#question").append(questionRender);

// console.log(question.text);
// for (var i=0; i < question.answers.length; i++)
// {
//     console.log(question.answers[i]);
//     $(".button").html(question.answers);
// }
//     console.log(question.correctAnswer);


// create a timer, display it to the user, and if the timer reaches 0 before the user is done, stop the quiz and count all questions not answered as wrong
    // ex: setTimeout(timeUp, 15000);

// use buttons in html for the multiple choice questions and log the users response
    // ex: newDiv.button("option A"); etc

// create logic to determind if the users choices are right or wrong
    // if (currentUserAnswer === currentCorrectAnswer) {....} else {......}
    // if( $("#a").on("click", function() {
    //      var currentUserAnswer = a;

    //   })
    // );
// take the questions that the user got correct and turn it into a score out of 100 possible points.
    // questionsRight.value * x (and put it over 100)
// create a button to reset the game without having to refresh the page.
