const textareaEl = document.querySelector('.textarea');
const charsNumberEl = document.querySelector('.stat__number--characters');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');
const wordsNumberEl = document.querySelector('.stat__number--words');

const inputHandler = () => {
    let text = textareaEl.value.trim();
    let numberOfWords = text ? text.split(/\s+/).length : 0;

    if (textareaEl.value.includes('<script>')) {
        alert('wrong input!');
        textareaEl.value = textareaEl.value.replace('<script>', '');
    }

    const numberOfChars = textareaEl.value.length;
    const twitterCharsLeft = 280 - numberOfChars;
    const facebookCharsLeft = 2200 - numberOfChars;

    twitterNumberEl.classList.remove('color-red', 'color-green');
    if (twitterCharsLeft < 0) {
        twitterNumberEl.classList.add('color-red');
    } else if (twitterCharsLeft == 0) {
        twitterNumberEl.classList.add('color-green');
    }

    facebookNumberEl.classList.remove('color-red', 'color-green');
    if (facebookCharsLeft < 0) {
        facebookNumberEl.classList.add('color-red');
    } else if (facebookCharsLeft == 0) {
        facebookNumberEl.classList.add('color-green');
    }

    charsNumberEl.textContent = numberOfChars;
    twitterNumberEl.textContent = twitterCharsLeft;
    facebookNumberEl.textContent = facebookCharsLeft;
    wordsNumberEl.textContent = numberOfWords;
}

textareaEl.addEventListener('input', inputHandler);