import displayWords from "./display";
import buildBoard from "./board-builder";
import NewPuzzle from "./user-inputs";

export default function loadGameGenerator() {

    const body = document.querySelector('body');
    body.innerHTML = '';

    // loadMobile();

    body.appendChild(buildBoardContainer());

    // if (checkMobile())
    //     loadMobile();

    // else
    //     loadDesktop();

    return body.querySelectorAll('button');

}



function loadDesktop() {

    const body = document.querySelector('body');
    // const inputsContainer = buildInputsContainer();
    const inputsContainer = document.createElement('div');
    inputsContainer.className = 'inputs-container';
    const boardContainer = buildBoardContainer();


    body.appendChild(inputsContainer);
    body.appendChild(boardContainer);

    // const generateButton = document.querySelector('.run');
    // generateButton.addEventListener('click', () => {
    //     const result = generateBoard();
    //     if (result === null)
    //         return;

    //     displayWords(buildBoard(result));
    // });
    
    const puzzle = new NewPuzzle((value) => {
        const result = buildBoard(value);
        console.log(result);
        displayWords(result);
    })
    puzzle.getUserInputs(inputsContainer);

}

function loadMobile() {

    const body = document.querySelector('body');
    // const inputsContainer = buildInputsContainer();
    const inputsContainer = document.createElement('div');
    inputsContainer.className = 'UI-window';
    const boardContainer = buildBoardContainer();

    // inputsContainer.style.width = `90vw`;


    body.appendChild(inputsContainer);
    // const generateButton = document.querySelector('.run');
    // generateButton.addEventListener('click', () => {
    //     const result = generateBoard();
    //     if (!result)
    //         return;

    //     body.innerHTML = '';
    //     body.appendChild(boardContainer);
    //     let board = buildBoard(result)
    //     displayWords(board, true);

    //     const regenerateButton = document.querySelector('.run');
    //     regenerateButton.addEventListener('click', () => {
    //         board = buildBoard(result);
    //         displayWords(board, true);
    //     });

    //     window.addEventListener('resize', () => {
    //         displayWords(board, true);
    //     });
    // });

    const puzzle = new NewPuzzle((value) => {
        const result = buildBoard(value);
        console.log(result);
        body.innerHTML = '';
        body.appendChild(boardContainer);
        displayWords(result);
    })
    puzzle.getUserInputs(inputsContainer);

    // const regenerateButton = document.querySelector('')
}



function buildInputsContainer() {
    const container = buildContainer();
    container.id = 'inputs-container';

    const titleHolder = document.createElement('div');
    titleHolder.id = 'title-holder';
    titleHolder.classList.add('horizotal-holder');
    container.appendChild(titleHolder);

    const hintHolder = document.createElement('div');
    hintHolder.id = 'hint-holder';
    hintHolder.classList.add('horizotal-holder');
    container.appendChild(hintHolder);

    container.appendChild(buildSpanHolder());

    const wordsHolder = document.createElement('div');
    wordsHolder.classList.add('words-holder');

    const form = document.createElement('form');
    form.id = "words-form";
    const addWordHolder = buildButtonHolder();
    const addWordButton = document.createElement('button');
    addWordButton.innerText = 'Add Word';
    addWordButton.id = "add-word";

    addWordButton.addEventListener('click', () => {
        // const addTo = document.querySelector('form');
        const i = form.querySelectorAll('.input-holder').length + 1;
        if(i > 10)
            return;
        form.appendChild(buildInput(i));
    });

    addWordHolder.appendChild(addWordButton);
    wordsHolder.appendChild(addWordHolder);
    wordsHolder.appendChild(form);
    container.appendChild(wordsHolder);

    const buttonHolder = buildButtonHolder();
    buttonHolder.appendChild(buildGenerateButton());
    container.appendChild(buttonHolder);

    return container;
}

function buildSpanHolder() {
    const spanHolder = document.createElement('div');
    spanHolder.classList.add('span-holder');
    const charCount = document.createElement('div');
    charCount.id = 'char-count';
    charCount.innerText = `Total Characters: 0/48`;
    spanHolder.appendChild(charCount);

    spanHolder.appendChild(buildInput('span'));

    return spanHolder;
}

function buildButtonHolder() {
    const buttonHolder = document.createElement('div');
    buttonHolder.classList.add('buttons-holder');
    
    return buttonHolder;
}

function buildTitleHolder(name) {
    const titleHolder = document.createElement('div');
    titleHolder.classList.add('title-holder');
    titleHolder.appendChild(buildTitleInput(name));
    
    return titleHolder;
}

function buildInput(num) {
    const inputHolder = document.createElement('div');
    inputHolder.classList.add('input-holder');
    const input = document.createElement(`input`);
    input.type = "text";
    input.id = `input-${num}`; 
    input.name = `input-${num}`;
    input.minLength = (num === 'span' ? '6' : '4');
    input.maxLength = '48';
    input.pattern = "[A-Za-z]+";
    if (num === 'span')
        input.setAttribute('required', true);

    const charDisplay = document.createElement(`div`);
    charDisplay.id = `input${num}-count`;
    charDisplay.innerText = '0';

    input.addEventListener('input', () => {
        charDisplay.innerText = input.value.length;

        const allInputs = document.querySelectorAll('input');
        let sum = 0;
        for (const thisInput of allInputs) {
            sum += thisInput.value.length;
        }
        document.querySelector('#char-count').innerText = `Total Characters: ${sum}/48`;
    });

    inputHolder.appendChild(input);
    inputHolder.appendChild(charDisplay);

    return inputHolder;
}

function buildBoardContainer() {
    const container = buildContainer();
    container.id = 'board-container';

    const board = document.createElement('div');
    board.classList.add('board');

    for (let i = 0; i < 48; i++) {
        const mini = document.createElement('div');
        mini.classList = 'mini';
        mini.id = `mini-${i}`;
        board.appendChild(mini);
    };

    const titleHolder = document.createElement('div');
    titleHolder.id = 'title-holder';
    titleHolder.classList.add('horizotal-holder');
    container.appendChild(titleHolder);

    const hintHolder = document.createElement('div');
    hintHolder.id = 'hint-holder';
    hintHolder.classList.add('horizotal-holder');
    container.appendChild(hintHolder);

    container.appendChild(board);

    const buttonHolder = buildButtonHolder();
    buttonHolder.innerHTML = `<div class="horizontal-holder"><button id="regenerate">Regenerate</button></div>
        <div class="horizontal-holder"><button id="edit">Edit Puzzle</button><button id="share">Share Puzzle</button></div>`;
    container.appendChild(buttonHolder);

    return container;
}

function buildTitleInput(name) {
    const titleInput = document.createElement('textarea');
    titleInput.classList.add('title-input');
    titleInput.style.flex = '1';
    titleInput.style.resize = 'none';
    titleInput.id = name;
    return titleInput;
}

function buildContainer() {
    const container = document.createElement('div');
    container.classList.add('UI-window');
    return container;
}

function checkMobile() {
    return (window.innerWidth < 768); // 768px is Tablet width according to Chrome dev
}

function buildGenerateButton() {
    const button = document.createElement('button');
    button.className = 'run';
    button.innerText = 'Regenerate';

    return button;
}

function generateBoard() {
    if (!checkInputs())
        return;

    const wordInputs = document.querySelectorAll('input');

    const words = [];
    for (const word of wordInputs) {
        if (word.value != '')
            words.push(word.value);
    }

    window.removeEventListener('resize',() => {});

    return words;

}

function checkInputs() {
    let charSum = 0;
    const span = document.querySelector('#input-span');
    if (span) {
        if (span.value.length < 6 || !/^([a-zA-Z]+)$/.test(span.value))
            return false;
        charSum += span.value.length;
    }

    const words = document.querySelectorAll('form input');
    for (const word of words) {
        if (word.value.length > 0 && (word.value.length < 4 || !/^([a-zA-Z]+)$/.test(word.value)))
            return false;
        charSum += word.value.length;
    }

    return (charSum === 48);
}