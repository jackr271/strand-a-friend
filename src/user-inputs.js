import { fadeIn, fadeOut } from "./fade.js";

const DURATION = 10;


export default class NewPuzzle {

    constructor(endingFunc) {
        this.userInputs = [new SingleLineInput('userName', `What's your name?`),
            new SingleLineInput('title', `What's the title of your puzzle?`),
            new MultiLineInput('themeHint', `Write a hint to your puzzle's theme`),
            new CollectionInput('words', `Input the words for your puzzle`)
        ];
        this.endingFunc = endingFunc;
    }

    getUserInputs(containerElement) {

        this.#phaseManager(containerElement, 0);
    }

    #phaseManager(containerElement, index) {
        if (index >= this.userInputs.length) {
            this.#summarize(containerElement);
            return;
        }

        const userInput = this.userInputs[index];

        const nextButton = userInput.build(containerElement);

        nextButton.addEventListener('click', () => {
            if (userInput.checkValid()) {
                userInput.terminate();
                setTimeout(() => {
                    this.#phaseManager(containerElement, index + 1);
                }, DURATION*1.25);
            }
        });
    }

    #summarize(containerElement) {
        const children = [];

        for (const userInput of this.userInputs) {
            children.push(userInput.buildSubSection(containerElement));
        }

        const button = buildButton('generate', 'Generate Board');

        button.addEventListener('click', () => {
            const results = {};
            for (const userInput of this.userInputs) {
                if (!userInput.checkValid())
                    return;
                results[userInput.name] = userInput.getValues();
            }
            this.endingFunc(this.getWords(results));
        });

        children.push(buildHolder([button]));

        fadeIn(containerElement, children, DURATION);
    }

    getWords(results) {
        const half = [];
        half.push(results['words'].themeWord);
        const words = half.concat(results['words'].words);
        
        return words;
    }

}

class SingleLineInput {
    constructor(name, label) {
        this.label = label;
        this.name = name;
        this.value = '';
        this.container = undefined; // DOM container
    }

    build(containerElement) {
        this.container = containerElement;

        const labelHolder = buildHolder([buildLabel(this.label, this.name)]);

        const inputHolder = buildHolder([buildInput(this.name)]);

        const nextButtonHolder = buildHolder([buildButton('next-button', 'Next')]);

        fadeIn(containerElement, [labelHolder, inputHolder, nextButtonHolder], DURATION);
        
        return nextButtonHolder.querySelector('button');
    }

    buildSubSection(containerElement) {
        this.container = containerElement;

        const holder = buildHolder([buildLabel(this.name + ':', this.name), buildInput(this.name)]);
        holder.querySelector('input').value = this.value;

        return holder;
    }

    terminate() {
        fadeOut(this.container, DURATION);
    }

    checkValid() {
        const input = this.container.querySelector(`#${this.name}`);

        if (typeof input.value != 'string') {
            return false;
        }

        this.value = input.value;
        return true;
    }

    getValues() {
        return this.value;
    }
}

class MultiLineInput {
    constructor(name, label) {
        this.label = label;
        this.name = name;
        this.value = '';
        this.container = undefined; // DOM container
    }

    build(containerElement) {
        this.container = containerElement;

        const labelHolder = buildHolder([buildLabel(this.label, this.name)]);

        const inputHolder = buildHolder([buildTextArea(this.name)]);

        const nextButtonHolder = buildHolder([buildButton('next-button', 'Next')]);

        fadeIn(containerElement, [labelHolder, inputHolder, nextButtonHolder], DURATION);
        
        return nextButtonHolder.querySelector('button');
    }

    buildSubSection(containerElement) {
        this.container = containerElement;

        const holder = buildHolder([buildLabel(this.name + ':', this.name), buildTextArea(this.name)]);
        holder.querySelector('textarea').value = this.value;

        return holder;
    }

    terminate() {
        fadeOut(this.container, DURATION);
    }

    checkValid() {
        const input = this.container.querySelector(`#${this.name}`);

        if (typeof input.value != 'string') {
            return false;
        }

        this.value = input.value;
        return true;
    }

    getValues() {
        return this.value;
    }
}

class CollectionInput {
    constructor(name, label) {
        this.label = label;
        this.name = name;
        this.themeWord = '';
        this.words = [];
        this.container = undefined; // DOM container
    }

    build(containerElement) {
        this.container = containerElement;

        const labelHolder = buildHolder([buildLabel(this.label, this.name)]);

        const inputHolder = this.#buildWordsUI();

        const nextButtonHolder = buildHolder([buildButton('next-button', 'Next')]);

        fadeIn(containerElement, [labelHolder, inputHolder, nextButtonHolder], DURATION);
        
        console.log(nextButtonHolder.querySelector('button'));
        return nextButtonHolder.querySelector('button');
    }

    buildSubSection(containerElement) {
        const holder = this.#buildWordsUI();

        this.container = holder;

        return holder;
    }

    #buildWordsUI() {
        const wordsUI = document.createElement('div');
        wordsUI.className = 'words-container';

        wordsUI.appendChild(buildHolder([buildLabel(this.name, this.name)]));

        wordsUI.appendChild(buildHolder([buildCharCounter('total', `Total Letter Count: ${this.themeWord === '' ? 0 : 48}/48`)]));

        const themeWordInput = buildInput('theme-word');
        themeWordInput.value = this.themeWord;
        this.#addCharCounting(themeWordInput);
        wordsUI.appendChild(buildHolder([buildLabel('Theme Word', 'theme-word'), themeWordInput, buildCharCounter('theme-word', this.themeWord.length)]));

        console.log(this.words);

        for (const key in this.words) {
            const word = this.words[key + 1];
            const wordInput = buildInput(`word-${key + 1}`);
            this.#addCharCounting(wordInput);
            wordInput.value = this.words[key];
            wordsUI.appendChild(buildHolder([buildLabel(`Word ${Number(key) + 1}:`, `word-${Number(key) + 1}`), wordInput, buildCharCounter(`word-${Number(key) + 1}`, this.words[key].length)]));
        }

        const addWordButton = buildButton('add-word', 'Add Word');

        addWordButton.addEventListener('click', () => {
            const inputNum = wordsUI.querySelectorAll('input').length;
            if (inputNum >= 10)
                return;

            const newInput = buildInput(`word-${inputNum}`);
            this.#addCharCounting(newInput);

            wordsUI.insertBefore(buildHolder([buildLabel(`Word ${inputNum}:`, `word-${inputNum}`), newInput, buildCharCounter(`word-${inputNum}`)]), addWordButton);
        });

        wordsUI.appendChild(addWordButton);

        return wordsUI;
    }

    #addCharCounting(input) {
        input.addEventListener('input', () => {
            let sum = 0;
            const allInputs = this.container.querySelectorAll('input');
            for (const oneInput of allInputs) {
                const thisLength = oneInput.value.length;
                oneInput.parentElement.querySelector('.char-counter').innerText = String(thisLength);
                sum += thisLength;
            }
            this.container.querySelector('#char-counter-total').innerText = `Total Letter Count: ${sum}/48`;
        });
    }

    terminate() {
        const inputs = this.container.querySelectorAll('input');
        const themeWord = inputs[0].value;
        const words = Array.from(inputs).slice(1).map((x) => x.value);

        this.themeWord = themeWord;
        this.words = [];

        for (const word of words) {
            if (word.length > 0)
                this.words.push(word);
        }

        fadeOut(this.container, DURATION);
    }

    checkValid() {
        const inputs = this.container.querySelectorAll('input');
        const themeWord = inputs[0].value;
        const words = Array.from(inputs).slice(1).map((x) => x.value);


        let flag = true;
        let sum = themeWord.length;
        let message = '';

        if (themeWord.length < 6 || !/^([a-zA-Z]+)$/.test(themeWord)) {
            flag = false;
            message += 'Theme word invalid: must be at least 6 characters, English letters only\n';
        }

        for (const key in words) {
            const word = words[key];
            if (word.length > 0 && (word.length < 4 || !/^([a-zA-Z]+)$/.test(word))) {
                flag = false;
                message += `Word ${Number(key) + 1} invalid: must be at least 4 characters, English letters only\n`;
            }
            sum += word.length;
        }

        if (sum != 48) {
            flag = false;
            message += `Word character count must total to 48`;
        }

        if (!flag)
            alert(message);

        return flag;
    }

    getValues() {
        return {themeWord: this.themeWord, words: this.words};
    }
}


function buildLabel(labelName, id) {
    const label = document.createElement('label');
    label.innerText = labelName;
    label.setAttribute('for', id);

    return label;
}

function buildInput(inputName) {
    const input = document.createElement('input');
    input.id = inputName;
    input.name = inputName;

    return input;
}

function buildTextArea(inputName) {
    const input = document.createElement('textarea');
    input.id = inputName;
    input.name = inputName;

    return input;
}

function buildButton(className, text) {
    const button = document.createElement('button');
    button.className = className;
    button.innerText = text;

    return button;
}

function buildHolder(childElements) {
    const holder = document.createElement('div');
    holder.className = 'horizontal-holder';

    for (const child of childElements) {
        holder.appendChild(child);
    }

    return holder;
}

function buildCharCounter(inputName, startingNum = 0) {
    const charCounter = document.createElement('div');
    charCounter.innerText = `${startingNum}`;
    charCounter.className = 'char-counter';
    charCounter.id = `char-counter-${inputName}`;

    return charCounter;
}