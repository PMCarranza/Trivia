

//  declaring variables needed

var questionNumber=-1;
var choiceA=$('<button>');
var choiceB=$('<button>');
var choiceC=$('<button>');
var choiceD = $('<button>');
var firstChoice;
var secondChoice;
var thirdChoice;
var fourthChoice;
var correct=0;
var wrong=0;
var unanswered=0;
var playing = false;
var seconds = 5;
var intervalId=0;
var choiceMade;
// var questionsLeft = 4;

var questions = [
    {
        'question': 'How many different species of birds can be found in Guatemala?',
        'choiceA': 'Over 100',
        'choiceB': 'Under 100',
        'choiceC': 'Over 700',
        'choiceD': 'Guatemala is a country, not an aviary',
        'answer': 'Over 700',
        // 'rightImage':'assets/images/.jpg',
        'rightImage': 'https://via.placeholder.com'
        // 'wrongImage': 'assets/images/.jpg'
    },
    {
        'question': 'What country has won the most World Cups?',
        'choiceA': 'Brazil',
        'choiceB': 'Italy',
        'choiceC': 'Uruguay',
        'choiceD': 'England',
        'answer': 'Brazil',
        // 'rightImage':'assets/images/.jpg',
        'rightImage': 'https://via.placeholder.com'
        // 'wrongImage': 'assets/images/.jpg'
    },
    {
        'question': 'Where and when was the first World Cup played?',
        'choiceA': 'England 1870',
        'choiceB': 'Uruguay 1930',
        'choiceC': 'USA 1994',
        'choiceD': 'Italy 1934',
        'answer': 'Uruguay 1930',
        // 'rightImage':'assets/images/.jpg',
        'rightImage': 'https://via.placeholder.com'
        // 'wrongImage': 'assets/images/.jpg'
    },
    {
        'question': 'How many volcanoes can be found in Guatemala?',
        'choiceA': 'None',
        'choiceB': '18',
        'choiceC': 'Under 25',
        'choiceD': 'Over 25',
        'answer': 'Over 25',
        // 'rightImage':'assets/images/.jpg',
        'rightImage': 'https://via.placeholder.com'
        // 'wrongImage': 'assets/images/.jpg'
    }
];


// start();

    // Games starts on when start button is clicked and after click button dissappears from screen the timer appears along with the first question
function start() {
    $('button').on('click', function () {

        $('.press').hide();
        // adding the timer to the page starting at 20 secs
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(countDown, 1000);
        };// closes run function
    run();

        //  The countDown function.
        function countDown() {
            //  Decrease number by one.
            seconds--;
            var redSeconds = "<span style='color:red;font-size:200%;'>" + seconds + "</span>"
            //  adding the numbers to the #timer div.
            $('#timer').html('<p> You have :  ' + redSeconds + '  seconds to answer </p>');

            // if timer reaches 0 move to unanswered window eventually
            if (seconds === 0) {
                // unanswered++;
                console.log('TIMER REACHED 0');
                clearInterval(intervalId);
                outOfTime();
                askQuestions();
            }
        }  // closes the countDown function

        askQuestions();

    });  // on.click function closing bracket parenthesis

};// this is the closing bracket for the start function 

start();

// function to generate questions
function askQuestions() {
    questionNumber++;
    $('#choices').empty();
    $('#image').empty();
    $('#right-answer').empty();
    $('#wrong-answer').empty();
    // adding the question and the list of possible answers
    var questionHere = $("<h3>").text(questions[questionNumber].question);
    questionHere.addClass('pregunta');
    $('#choices').append(questionHere);
    
    // list of choice possible answers
    firstChoice = $('<button class="q-button">').text(questions[questionNumber].choiceA);
    firstChoice.addClass('choice');
    secondChoice = $('<button class="q-button">').text(questions[questionNumber].choiceB);
    secondChoice.addClass('choice');
    thirdChoice = $('<button class="q-button">').text(questions[questionNumber].choiceC);
    thirdChoice.addClass('choice');
    fourthChoice = $('<button class="q-button">').text(questions[questionNumber].choiceD);
    fourthChoice.addClass('choice');
    $('#choices').append(firstChoice).append(secondChoice).append(thirdChoice).append(fourthChoice);
    
};
console.log('questionNo. ', questionNumber);

// capturing the click on the choices and comparing it to the answer
$('#choices').on('click', '.q-button', function () {
    if ($(this).text() === questions[questionNumber].answer) {
        rightAnswer();
        $('#choices').empty();
        wait();
        // runAgain();
        // countDownTwo();
    } else if ($(this).text() !== questions[questionNumber].answer) {
        wrongAnswer();
        $('#choices').empty();
        wait();
        // runAgain();
        // countDownTwo();
    } else {
        $('#choices').empty();
        wait();
        // runAgain();
        // countDownTwo();
    }
    console.log('this is what was clicked ', $(this).text());

});

function rightAnswer() {
    clearInterval(intervalId);
    correct++;
    console.log('correct --> ', correct);
    $('#right-answer').append('<p>That is right !');
    $('#image').append("<img id='right' src=assets/images/right.png>");
    // questionNumber++;
    // questionsLeft--;
    console.log('question No after right answer -->', questionNumber);
    // console.log('questionsLeft-->', questionsLeft);
};

function wrongAnswer() {
    clearInterval(intervalId);
    wrong++;
    console.log('wrong --> ', wrong);
    $('#wrong-answer').append('<p>Rats ! that was unfortunate.');
    var $rightAnswer = $('<p>').text('The correct answer was : ' + questions[questionNumber].answer);
    $rightAnswer.addClass('wrong');
    $('#wrong-answer').append($rightAnswer);
    $('#image').append("<img id='wrong' src=assets/images/wrong.png>");
    // questionNumber++;
    // questionsLeft--;
    console.log('question No after wrong answer ', questionNumber); 
    // console.log('questionsLeft-->', questionsLeft);
};  //closes wrong answer function

function outOfTime() {
        $('#choices').empty();
        $('#image').empty();
        $('#right-answer').empty();
        $('#wrong-answer').empty();
        console.log('noAnswer --> ', unanswered);
        $('#wrong-answer').append('<p>Rats ! that was unfortunate.');
        var $rightAnswer = $('<p>').text('The correct answer was : ' + questions[questionNumber].answer);
        $rightAnswer.addClass('wrong');
        $('#wrong-answer').append($rightAnswer);
        $('#image').append("<img id='wrong' src=assets/images/wrong.png>");
        questionNumber++;
        // questionsLeft--;
        console.log('questionNo. ', questionNumber);
        // console.log('questionsLeft-->', questionsLeft);
};  //closes out of time function

var waitForIt;
function wait() {
    waitForIt = setTimeout(function () {
        askQuestions();
        if (questionNumber >=4) {
        $('#choices').empty();
        showResults();
        };
    },3000);
};   //closes wait function

// show results
function showResults() {
    $('#results').append('<h4>It is not about winning or losing but how you play the game, but in case you are keeping score,  here is how you did</h4>')
    var $rightOnes = $('<p>').text('You knew ' + correct + ' answers');
    $rightOnes.addClass('show-results');
    var $wrongOnes = $('<p>').text('You did not know ' + wrong + ' answers');
    $wrongOnes.addClass('show-results');
    var $noAnswer = $('<p>').text('You ran out of time on ' + unanswered + ' questions');
    $noAnswer.addClass('show-results');
    $('#results').append($rightOnes).append($wrongOnes).append($noAnswer);
};   //closes shoe results


// *=*=*=*=*=  TRYING TO GET THE COUNTER TO RESTART

// function runAgain() {
//     clearInterval(intervalId);
//     intervalId = setInterval(countDownTwo, 1000);
// };// closes runAgain function

// function countDownTwo() {
//     //  Decrease number by one.
//     seconds;
//     var redSeconds = "<span style='color:red;font-size:200%;'>" + seconds + "</span>"
//     //  adding the numbers to the #timer div.
//     $('#timer').html('<p> You have :  ' + redSeconds + '  seconds to answer </p>');

//     // if timer reaches 0 move to unanswered window eventually
//     if (seconds === 0) {
//         unanswered++;
//         console.log('TIMER REACHED 0');
//         clearInterval(intervalId);
//         outOfTime();
//         askQuestions();
//     }
// };  // closes the count down two function


// runAgain();


// function reStart() {
//     start();
// };