document.addEventListener('DOMContentLoaded', function () {
    const words = ['JAVASCRIPT', 'HTML', 'CSS', 'NODEJS', 'REACT']; 
    let selectedWord = words[Math.floor(Math.random() * words.length)]; 
    let guessedWord = Array(selectedWord.length).fill('_'); 
    let wrongGuesses = 0; 

    const wordDisplay = document.getElementById('word-display');
    const hangmanImage = document.getElementById('hangman-image').querySelector('img');
    const wrongGuessList = document.getElementById('wrong-guesses');
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');

    function updateGameDisplay() {
        wordDisplay.textContent = guessedWord.join(' ');
        hangmanImage.src = `images/${wrongGuesses}.png`;

        if (!guessedWord.includes('_')) {
            alert('¡Felicidades! Has ganado.');
            resetGame();
        }
    }

    function handleGuess() {
        const guess = guessInput.value.toUpperCase();

        if (guessedWord.includes(guess) || !/[A-Z]/.test(guess)) {
            alert('Por favor, ingresa una letra válida.');
            return;
        }

        if (selectedWord.includes(guess)) {
            for (let i = 0; i < selectedWord.length; i++) {
                if (selectedWord[i] === guess) {
                    guessedWord[i] = guess;
                }
            }
        } else {
            wrongGuesses++;
            wrongGuessList.innerHTML += `<li>${guess}</li>`;
        }

        updateGameDisplay();

        if (wrongGuesses === 6) {
            alert(`¡Has perdido! La palabra era "${selectedWord}".`);
            resetGame();
        }

        guessInput.value = '';
    }

    function resetGame() {
        selectedWord = words[Math.floor(Math.random() * words.length)];
        guessedWord = Array(selectedWord.length).fill('_');
        wrongGuesses = 0;
        wrongGuessList.innerHTML = '';
        guessInput.value = '';
        updateGameDisplay();
    }

    guessButton.addEventListener('click', handleGuess);
    updateGameDisplay();
});
