//  declaring variables needed
var questionNumber=0;
var choiceA=$('<button>');
var choiceB=$('<button>');
var choiceC=$('<button>');
var choiceD = $('<button>');
var choiceD = $('<button>');
var choiceE = $('<button>');
var choiceF = $('<button>');
var firstChoice;
var secondChoice;
var thirdChoice;
var fourthChoice;
var correct=0;
var wrong=0;
var unanswered=0;
var intervalId;
var questions = [
    {
        'question': 'How many different species of birds can be found in Guatemala?',
        'choiceA': 'Over 100',
        'choiceB': 'Under 100',
        'choiceC': 'Over 700',
        'choiceD': 'Guatemala is a country, not an aviary',
        'answer': 'Over 700',
    },
    {
        'question': 'What country has won the most World Cups?',
        'choiceA': 'Brazil',
        'choiceB': 'Italy',
        'choiceC': 'Uruguay',
        'choiceD': 'England',
        'answer': 'Brazil',
    },
    {
        'question': 'Where and when was the first World Cup played?',
        'choiceA': 'England 1870',
        'choiceB': 'Uruguay 1930',
        'choiceC': 'USA 1994',
        'choiceD': 'Italy 1934',
        'answer': 'Uruguay 1930',
    },
    {
        'question': 'How many volcanoes can be found in Guatemala?',
        'choiceA': 'None',
        'choiceB': '18',
        'choiceC': 'Under 25',
        'choiceD': 'Over 25',
        'answer': 'Over 25',
    },
    {
        'question': 'What is the word for goodness in spanish?',
        'choiceA': 'justicia',
        'choiceB': 'triunfo',
        'choiceC': 'bondad',
        'choiceD': 'diez',
        'answer': 'bondad',
    },
    {
        'question': 'Which one is the longest-running Broadway show?',
        'choiceA': 'Lion King',
        'choiceB': 'The Phantom of the Opera',
        'choiceC': 'Hamilton',
        'choiceD': 'Wicked',
        'answer': 'The Phantom of the Opera',
    }
];
// start();
    // Games starts on when start button is clicked and after click button dissappears from screen the timer appears along with the first question
    
    //  The countDown function.
function countDown() {
    //  Decrease number by one.
    seconds--;
    var redSeconds = "<span style='color:red;font-size:225%;'>" + seconds + "</span>"
    //  adding the numbers to the #timer div.
    $('#timer').html('<p> You have :  ' + redSeconds + '  seconds to answer </p>');
        // if timer reaches 0 move to unanswered window eventually
    if (seconds <= 0) {
        // unanswered++;
        console.log('TIMER REACHED 0');
        clearInterval(intervalId);
        outOfTime();
    }
}  // closes the countDown function
function run() {
    // clearInterval(intervalId);
    seconds = 10;
    intervalId = setInterval(countDown, 1000);
    
};// closes run function

    $('button').on('click', function () {
        $('.press').hide();
        // adding the timer to the page starting at 20 secs
        // run();
        askQuestions();
    });  // on.click function closing bracket parenthesis

// function to generate questions
function askQuestions() {
    run();
    // questionNumber++;
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
    fifthChoice = $('<button class="q-button">').text(questions[questionNumber].choiceE);
    fifthChoice.addClass('choice');
    sixthChoice = $('<button class="q-button">').text(questions[questionNumber].choiceF);
    sixthChoice.addClass('choice');
    $('#choices').append(firstChoice).append(secondChoice).append(thirdChoice).append(fourthChoice)
};// closes ask questions function

console.log('questionNo. ', questionNumber);

// capturing the click on the choices and comparing it to the answer
$('#choices').on('click', '.q-button', function () {
    if ($(this).text() === questions[questionNumber].answer) {
        rightAnswer();
    } else if ($(this).text() !== questions[questionNumber].answer) {
        wrongAnswer();
    }
    $('#choices').empty();
    wait();
    console.log('this is what was clicked ', $(this).text());
});

function rightAnswer() {
    correct++;
    console.log('correct --> ', correct);
    $('#right-answer').append('<p>That is right !');
    $('#image').append("<img id='right' src=assets/images/right.png>");
    console.log('question No after right answer -->', questionNumber);
};

function wrongAnswer() {
    // clearInterval(intervalId);
    wrong++;
    console.log('wrong --> ', wrong);
    $('#wrong-answer').append('<p>Rats ! that was unfortunate.');
    var $rightAnswer = $('<p>').text('The correct answer was : ' + questions[questionNumber].answer);
    $rightAnswer.addClass('wrong');
    $('#wrong-answer').append($rightAnswer);
    $('#image').append("<img id='wrong' src=assets/images/wrong.png>");
    console.log('question No after wrong answer ', questionNumber); 
};  //closes wrong answer function

function outOfTime() {
    unanswered++;
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
    
    console.log('questionNo. ', questionNumber);
    
    wait();
};  //closes out of time function

// var waitForIt;
function wait() {
    questionNumber++;
    clearInterval(intervalId);
    var waitForIt = setTimeout(function () {
        if (questionNumber > 5) {
            $('#timer').empty();
            $('#choices').empty();
            $('#image').empty();
            $('#right-answer').empty();
            $('#wrong-answer').empty();
            showResults();
        } else {
            askQuestions();
        }
    },3000);
};   //closes wait function

// show results
function showResults() {
    $('#results').append('<h4>It is not about winning or losing but how you play the game, but in case you are keeping score,  here is how you did</h4>')
    var $rightOnes = $('<p>').text('You knew the answers to : ' + correct );
    $rightOnes.addClass('right-ones');
    var $wrongOnes = $('<p>').text('You did not know the answers to : ' + wrong);
    $wrongOnes.addClass('wrong-ones');
    var $noAnswer = $('<p>').text('You ran out of time on : ' + unanswered);
    $noAnswer.addClass('no-answer');
    $('#results').append($rightOnes).append($wrongOnes).append($noAnswer);
    
    $('#results').append('<a href="https://en.wikipedia.org/wiki/List_of_birds_of_Guatemala" target="_blank">Birds of Guatemala</a>');

    $('#results').append('<a href="https://en.wikipedia.org/wiki/FIFA_World_Cup" target="_blank">World Cup Winners</a>');

    $('#results').append('<a href="https://en.wikipedia.org/wiki/FIFA_World_Cup_hosts" target="_blank">World Cup Hosts</a>');

    $('#results').append('<a href="https://en.wikipedia.org/wiki/List_of_volcanoes_in_Guatemala" target="_blank">Volcanoes of Guatemala</a>');

    $('#results').append('<a href="https://translate.google.com/?hl=en&tab=TT&authuser=0" target="_blank">Basic Translator</a>');

    $('#results').append('<a href="https://en.wikipedia.org/wiki/List_of_the_longest-running_Broadway_shows" target="_blank">Longest Running Shows</a>');

    
    reStart();
};   //closes shoe results

function reStart() {
    clearInterval(intervalId);
    setTimeout(function(){
        location.reload();
    }, 7000);
};