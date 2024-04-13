let blueLettersCount = 0;

document.addEventListener('keydown', function(event) {
    // Check if the '+' key is pressed
    if (event.keyCode === 187 || event.keyCode === 107) { // Check for both '+' and '=' keycodes
        // Make another letter Blue
        const wordLetters = document.querySelectorAll('.underline');
        
        if (blueLettersCount < wordLetters.length) {
            wordLetters[blueLettersCount].classList.add('green');
            blueLettersCount++;
        }
    }
});