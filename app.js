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
        } 
    }

}

let phraseToGuess = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseToGuess);




// // Check if a letter is in the phrase
// function checkLetter(button) {


// }

// // Check if the game has been or lost
// const checkWin = () => {


// }


// Listen for the start game button to be pressed
startButton.addEventListener('click', (e) => {
    e.target.style.display = 'none';

});

// // Listen for the onscreen keyboard to be clicked
// qwerty.addEventListener('click', e => {


// });