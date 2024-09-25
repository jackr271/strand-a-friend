// input-types.js

export default class InputTypes {
    constructor() {
        this.configs = {
            userName: new SingleLine(`What's your name?`, 'userName', 'Your Name'),
            title: new SingleLine('Enter the title to your puzzle', 'title', 'Puzzle Title'),
            hint: new MultiLine(`Enter a hint to your puzzle's theme`, 'themeHint', 'Theme Hint'),
            words: new Collection('Enter the words for your puzzle', 'words')
        };
    }

    getInputTypes() {
        const types = {};
        for (const key in this.configs) {
            types[key] = null;
        }
        return types;
    }

    // async summarizeInfo() {

    // }
}

// loadInput(), getInput()

class SingleLine {
    constructor(message, id, name) {
        this.message = message;
        this.id = id;
        this.name = name;
        this.value = null;
        this.isValid = false;
        this.container = null;
    }

    loadInput(container = document.querySelector('.inputs-container'), includeMessage = true) {
        this.container = container;
        this.container.innerHTML = '';

        this.container.innerHTML = `<div class="single-line-input-container">
                    ${includeMessage ? `<div class="horizontal-holder"><label class="bold" for="${this.id}">${this.message}</label></div>` : ''}
                    <div class="horizontal-holder">${includeMessage ? '' : `<label class="bold" for="${this.id}">${this.name}</label>`}<input name="${this.id}" id="${this.id}"></input></div>
                </div>`;

        this.container.querySelector('input').value = this.value;
        
        return document.querySelector('button.next');
    }

    getInput() {
        const inputValue = this.container.querySelector('input').value;

        if (this.#checkValid()) {
            this.isValid = true;
            this.value = inputValue;
            return inputValue;
        }

        this.#displayError();
    }

    #checkValid() {
        return true;
    }

    #displayError() {

    }
}

class MultiLine {
    constructor(message, id, name) {
        this.message = message;
        this.id = id;
        this.name = name;
        this.value = '';
        this.isValid = false;
        this.container = null;
    }

    loadInput(container = document.querySelector('.inputs-container'), includeMessage = true) {
        this.container = container;
        this.container.innerHTML = '';

        this.container.innerHTML = `<div class="single-line-input-container">
                    ${includeMessage ? `<div class="horizontal-holder"><label class="bold" for="${this.id}">${this.message}</label></div>` : ''}
                    <div class="horizontal-holder">${includeMessage ? '' : `<label class="bold" for="${this.id}">${this.name}</label>`}<textarea name="${this.id}" id="${this.id}"></textarea></div>
                </div>`;

        this.container.querySelector('textarea').value = this.value;
        
        return document.querySelector('button.next');
    }

    getInput() {
        const inputValue = this.container.querySelector('textarea').value;

        if (this.#checkValid()) {
            this.isValid = true;
            this.value = inputValue;
            return inputValue;
        }

        this.#displayError();
    }

    #checkValid() {
        return true;
    }

    #displayError() {

    }
}

class Collection {
    constructor(message, id) {
        this.message = message;
        this.id = id;
        this.values = [];
        this.isValid = false;
        this.container = null;
    }

    loadInput(container = document.querySelector('.inputs-container'), includeMessage = true) {
        this.container = container;
        this.container.innerHTML = '';

        this.container.innerHTML = `${includeMessage ? `<div class="horizontal-holder bold">${this.message}</div>` : ''}
        <div class="words-container ${includeMessage ? '' : 'summarized'}">
            <div id="char-counter">Total Letter Count: ${includeMessage ? '0' : '48'}/48</div>
            <input type="text" name="themeWord" id="word-0" placeholder="Theme Word (min. 6 letters)">
            <div class="horizontal-holder button-holder"><button id="add-word-button">Add Word</button></div>
        </div>`;

        this.container.classList.toggle('collection-input-container');
        addInputListeners(this.container.querySelector('#word-0'));

        const addWordButton = this.container.querySelector('#add-word-button');
        addWordButton.addEventListener('click', () => {
            this.#addWord(addWordButton);
        });

        if (this.values.length > 0) {
            this.container.querySelector('input').value = this.values[0];

            for (const value of this.values.slice(1)) {
                const newWordInput = this.#addWord(addWordButton);
                newWordInput.value = value;
            }
        }
        
        return document.querySelector('button.next');
    }

    getInput() {
        const inputs = Array.from(this.container.querySelectorAll('input')).map(x => x.value);
        const themeWord = inputs[0];
        const words = inputs.slice(1);

        const result = [];
        let flag = true;
        let sum = themeWord.length;
        let message = '';

        if (sum < 6 || !/^([a-zA-Z]+)$/.test(themeWord)) {
            flag = false;
            message += 'Theme word invalid: must be at least 6 characters, English letters only\n\n';
        }

        for (const index in words) {
            const word = words[index];
            if (word.length > 0 && (word.length < 4 || !/^([a-zA-Z]+)$/.test(word))) {
                flag = false;
                message += `Word ${Number(index) + 1} invalid: must be at least 4 characters, English letters only\n\n`;
            }
            sum += word.length;
        }

        if (sum != 48) {
            flag = false;
            message += `Word character count must total to 48`
        }

        if (!flag) {
            alert(message);
        }
        else {
            this.container.classList.toggle('collection-input-container');
        }

        this.isValid = flag;

        for (const word of inputs) {
            if (word.length > 0)
                result.push(word);
        }

        console.log(result);
        this.values = result;

        return result;
    }

    #addWord(addWordButton) {
        const inputCount = this.container.querySelectorAll('input').length;
        const wordsContainer = document.querySelector('.words-container');
        const newWordInput = document.createElement('input');
        newWordInput.name = `word${inputCount}`;
        newWordInput.id = `word-${inputCount}`;
        newWordInput.placeholder = `Word ${inputCount} (min. 4 letters)`;
        addInputListeners(newWordInput);
        wordsContainer.insertBefore(newWordInput, addWordButton.parentElement);
        newWordInput.focus();

        if (inputCount >= 9) {
            addWordButton.remove();
        }

        return newWordInput;
    }

    #checkValid() {
        return true;
    }

    #displayError() {

    }
}

function addInputListeners(input) {
    input.addEventListener('input', () => {
        if (input.value.length >= 4) {
            input.className = 'valid';
        }
        let sum = 0;
        const allInputs = document.querySelector('.words-container').querySelectorAll('input');
        for (const oneInput of allInputs) {
            sum += oneInput.value.length;
        }
        document.querySelector('#char-counter').innerText = `Total Letter Count: ${sum}/48`;
    });

    input.addEventListener('focusout', ()=> {
        if (input.value.length < 4) {
            input.className = 'invalid';
        }
    });
}