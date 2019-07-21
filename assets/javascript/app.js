

//  declaring variables needed

var questionNumber=0;
var choiceA=$('<button>');
var choiceB=$('<button>');
var choiceC=$('<button>');
var choiceD=$('<button>');
var correct=0;
var wrong=0;
var unanswered=0;
var playing = false;
var seconds = 20;
var intervalId;
    
var questions = [
    {
        'question': 'How many different species of birds can be found in Guatemala?',
        'choiceA': 'Over 100',
        'choiceB': 'Under 100',
        'choiceC': 'Over 700',
        'choiceD': 'Guatemala is a country, not an aviary',
        'answer': 'choiceC',
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
        'answer': 'choiceA',
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
        'answer': 'choiceB',
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
        'answer': 'choiceD',
        // 'rightImage':'assets/images/.jpg',
        'rightImage': 'https://via.placeholder.com'
        // 'wrongImage': 'assets/images/.jpg'
    }
];


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
            var redSeconds = "<span style='color:red;font-size:200%;'>" + seconds + "</span>"
            //  adding the numbers to the #timer div.
            $('#timer').html('<p> You have :  ' + redSeconds + '  seconds to answer </p>');
        }
        run();

        // adding the question and the list of possible answers

        var questionHere = $("<h3>").text(questions[questionNumber].question);
        questionHere.addClass('pregunta');
        $('#question').append(questionHere); 
        
        // list of choice possible answers

        var firstChoice = $('<button>').text(questions[questionNumber].choiceA);
        firstChoice.addClass('choice').attr('data-click');
        var secondChoice = $('<button>').text(questions[questionNumber].choiceB);
        secondChoice.addClass('choice').attr('data-click');
        var thirdChoice = $('<button>').text(questions[questionNumber].choiceC);
        thirdChoice.addClass('choice').attr('data-click');
        var fourthChoice = $('<button>').text(questions[questionNumber].choiceD);
        fourthChoice.addClass('choice').attr('data-click');
        $('#choices').append(firstChoice).append(secondChoice).append(thirdChoice).append(fourthChoice);
        questionNumber++;

        // checking to see if the answer is right or not

        

    })
}

    start();