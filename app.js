const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startButton = document.querySelector('.btn__reset');
let missed = 0; 
let phrases = [
    'A DIME A DOZEN',
    'BREAK A LEG',
    'SO FAR SO GOOD',
    'UNDER THE WEATHER',
    'BREAK THE ICE'
]

// Return a random phrase from an array
function getRandomPhraseAsArray (arr) {
    const index = Math.floor(Math.random() * arr.length);
    const randomPhrase = arr[index].split("");
    return randomPhrase;
}

// // Adds the letters of a string to the display
function addPhraseToDisplay (arr) {

    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        const character = arr[i];
        const ul = document.querySelector('#phraseList');
        li.appendChild(document.createTextNode(character));
        console.log(li);
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
    console.log(button.textContent);
    for (let i = 0; i < letters.length; i++) {
        console.log(letters[i]);
        if (chosenLetter === letters[i].textContent) {
            letters[i].className += ' show';
            match = letters[i].textContent;
        }
    }
    return match;
}

function changeHeart () {
    const triesLi = document.querySelectorAll(".tries");
    const loseHeart = document.querySelectorAll(".tries img");
    loseHeart[0].src = "images/lostHeart.png";
    triesLi[0].className = "";
}

let phraseToGuess = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseToGuess);

// Listen for the start game button to be pressed
startButton.addEventListener('click', (e) => {
    e.target.parentNode.style.display = 'none';
});


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
    }
});



// // Check if the game has been or lost
// const checkWin = () => {


// }


// // Listen for the onscreen keyboard to be clicked
// qwerty.addEventListener('click', e => {


// });