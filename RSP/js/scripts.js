var ROCK = 'Rock';
var SCISSORS = 'Scissors';
var PAPER = 'Paper';

var userInput = prompt('Rock, Scissors, Paper');

if (userInput !== ROCK && userInput !== SCISSORS && userInput !== PAPER) {
    alert('Please put in the word that picking one of "Rock, Scissors, Paper"');
} else {
    var comInput;

    //Math.random()은 0부터 1사이의 임의의 값을 리턴함
    var rnd = Math.random();

    if (rnd < 0.33) {
        comInput = ROCK;
    } else if (rnd < 0.66) {
        comInput = SCISSORS;
    } else {
        comInput = PAPER;
    }

    console.log('User = ' + userInput);
    console.log('Computer = ' + comInput);
}

if (userInput === ROCK) {
    // 컴퓨터 패 비교
    if (comInput === ROCK) {
        // 비긴 경우
        alert('Computer = ' + comInput + ' -> 컴퓨터와 비겼습니다');
    } else if (comInput === SCISSORS) {
        // 이긴 경우
        alert('Computer = ' + comInput + ' -> 컴퓨터에게 이겼습니다');
    } else {
        // 진 경우
        alert('Computer = ' + comInput + ' -> 컴퓨터에게 졌습니다');
    }
} else if (userInput === SCISSORS) {
    // 컴퓨터 패 비교
    if(comInput === SCISSORS) {
        alert('Computer = ' + comInput + ' -> 컴퓨터와 비겼습니다');
    } else if (comInput === PAPER) {
        alert('Computer = ' + comInput + ' -> 컴퓨터에게 이겼습니다');
    } else {
        alert('Computer = ' + comInput + ' -> 컴퓨터에게 졌습니다');
    }
} else {
    // 컴퓨터 패 비교
    if (comInput === PAPER) {
        alert('Computer = ' + comInput + ' -> 컴퓨터와 비겼습니다');
    } else if (comInput === ROCK) {
        alert('Computer = ' + comInput + ' -> 컴퓨터에게 이겼습니다');
    } else {
        alert('Computer = ' + comInput + ' -> 컴퓨터에게 졌습니다');
    }
}
