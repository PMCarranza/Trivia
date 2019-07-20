

//  declaring variables needed

var question;
var questionNumber;
var choiceA;
var choiceB;
var choiceC;
var choiceD;
var correct;
var wrong;
var unanswered;
var playing = false;
var seconds = 20;
var intervalId;

// adding button to page
function startButton() {

    var $heading = $('#titulo');
    $heading.addClass('top-text');
    $heading.html('<h1>Trivia Game !</h1>');

    var $gameStart = $('#top');
    $gameStart.addClass('start-boton');

    var boton = $('<button>');
    boton.addClass('press').text('Start !');
    $gameStart.append(boton);
}
startButton();

// Games starts on when start button is clicked and after click button dissappears from screen the timer appears along with the first question
function start() {
    $('button').on('click', function () {
        $('.press').hide();

        // adding the timer to the page starting at 20 secs
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(countDown, 1000);
        }
          //  The countDown function.
        function countDown() {
            //  Decrease number by one.
            seconds--;
            
            //  adding the numbers to the #timer div.
            $('#timer').html('<p> You have : ' + seconds + ' seconds to answer </p>');
        }
        run();

        // adding the question and the list of possible answers


    })





    // the bracket below closes the start function
}; 

start();