//---------------------- Variables ----------------------//

const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startButton = document.querySelector('.btn__reset');
const phraseUl = document.querySelector("#phrase ul");
let missed = 0; 
let phrases = [
    'A DIME A DOZEN',
    'BREAK A LEG',
    'SO FAR SO GOOD',
    'UNDER THE WEATHER',
    'BREAK THE ICE'
]

//---------------------- Functions ----------------------//

// Return a random phrase from an array
function getRandomPhraseAsArray (arr) {
    const index = Math.floor(Math.random() * arr.length);
    const randomPhrase = arr[index].split("");
    return randomPhrase;
}

// Adds the letters of a string to the display
function addPhraseToDisplay (arr) {
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        const character = arr[i];
        const ul = document.querySelector('#phraseList');

        li.appendChild(document.createTextNode(character));
        ul.appendChild(li);
        if (character !== " ") {
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
    }
}

// // Check if a letter is in the phrase
function checkLetter(button) {
    const letters = document.querySelectorAll('.letter');
    let match = null;
    let chosenLetter = button.textContent.toUpperCase();

    for (let i = 0; i < letters.length; i++) {
        if (chosenLetter === letters[i].textContent) {
            letters[i].className += ' show';
            match = letters[i].textContent;
        }
    }
    return match;
}

// Change heart on display
function changeHeart () {
    const tries = document.querySelectorAll('.tries');
    const heart = document.querySelectorAll('.tries img');

    heart[0].src = 'images/lostHeart.png';
    tries[0].className = "lostHeart";
}

// Reset game overlay
function resetGame () {
    const tries = document.querySelectorAll('.lostHeart');
    const hearts = document.querySelectorAll('.lostHeart img');
    const chosenButton = document.querySelectorAll('.chosen'); 
    const displayLetter = document.querySelectorAll('.show');
    const phraseList = document.querySelector('#phraseList');
    const li = phraseList.querySelectorAll('li');

    missed = 0;
    phraseUl.textContent = "";
    // reset shown letters
    for (let i = 0; i < displayLetter.length; i++) {
        displayLetter[i].classList.remove('show');
    }
    // reset clicked buttons
    for (let i = 0; i < chosenButton.length; i++) {
        chosenButton[i].classList.remove('chosen');
        chosenButton[i].removeAttribute("disabled");
    }
    // reset live hearts
    for (let i = 0; i < hearts.length; i++) {
        hearts[i].src = 'images/liveHeart.png';
        tries[i].className = 'tries';
    }
    // initalize new phrase to guess
    let phraseToGuess = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseToGuess);
}

// Check if the game has been or lost
const checkWin = () => {
    let shownLetters = document.querySelectorAll('.show');
    const letters = document.querySelectorAll('.letter');
    const overlay = document.querySelector('#overlay');
    const title = document.querySelector('.title');

    if (shownLetters.length === letters.length) {
        overlay.className = 'win';
        title.textContent = 'You won!';
        overlay.style.display = 'flex';
        startButton.textContent = 'Play Again';
        resetGame();
    }
    if (missed > 4) {
        overlay.className = 'lose';
        title.textContent = 'You lost!';
        overlay.style.display = 'flex';
        startButton.textContent = 'Try Again';
        resetGame();
    }
}


//---------------------- Main ----------------------//

// Initialize phrase to guess
let phraseToGuess = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseToGuess);

// Listen for the start game button to be pressed
startButton.addEventListener('click', (e) => {
    e.target.parentNode.style.display = 'none';
});

// // Listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && e.target.getAttribute !== 'disabled') {
        const button = e.target;
        let letterFound = null;
        button.className = 'chosen';
        button.setAttribute('disabled', true);
        letterFound = checkLetter(button);
        if (letterFound === null) {
            missed += 1;
            changeHeart();
        }
        checkWin();
    }
});






