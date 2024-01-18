document.addEventListener('DOMContentLoaded', function () {
    const words = ['Guatemala','JAVA','INFORMATICA','KINAL' ];
    let selectedWord = words[Math.floor(Math.random() * words.length)];
    let guessedWord = Array(selectedWord.length).fill('_');
    let wrongGuesses = 0;
});
