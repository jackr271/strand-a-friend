export default function displayWords(wordList) {
    // printWords(wordList);
    renderWords(wordList);
}

function renderWords(wordList) {

    const container = document.querySelector('#container');

    const minis = container.querySelectorAll('.mini');
    for (const mini of minis)
        mini.innerHTML = '';

    const lines = document.querySelectorAll('.line');
    for (const line of lines)
        line.remove();

    let wordNum = 0;
    for (const word of wordList) {
        console.log(word);
        let prev = null;

        for (const letter of word) {
            console.log(letter.pos);
            const i = letter.pos[0];
            const j = letter.pos[1];
            const mini = container.querySelector(`#mini-${i * 6 + j}`);
            const letterHolder = document.createElement('div');
            letterHolder.classList.add('letter', `word-${wordNum}`);
            letterHolder.innerText = letter.letter.toUpperCase();
            mini.appendChild(letterHolder);

            if (prev)
                drawLineBetweenPoints(prev, letterHolder);
            prev = letterHolder;
        }

    }
}

function buildGrid(wordList) {
    const arr = Array.from({ length: 8 }, () => Array(6).fill('0'));
    let wordNum = 0;
    for (const word of wordList) {
        for (const letter of word) {
            if (!letter.pos)
                console.log(`Word: ${word.reduce((toPrint, x) => toPrint + x.letter, '')},  ${word.reduce((toPrint, x) => toPrint + String(x.pos), '')}`);
            const i = letter.pos[0];
            const j = letter.pos[1];
            arr[i][j] = ([wordNum, letter.letter]);
        }
        wordNum++;
    }

    return arr;
}

function printWords(wordList) {

    let wordGrid = buildGrid(wordList);

    let string = '';
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 6; j++) {
            string += `${wordGrid[i][j][1]}, `
        }
        string += '\n';
    }
    console.log(string);
}

function drawLineBetweenPoints(gridItem1, gridItem2) {
    const start = gridItem1.getBoundingClientRect();
    const end = gridItem2.getBoundingClientRect();

    // Calculate the difference in x and y coordinates
    const deltaX = end.left - start.left;
    const deltaY = end.top - start.top;

    // Calculate the length of the line (using the distance formula)
    const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Calculate the angle of the line
    const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

    // Create a line element
    const line = document.createElement('div');
    line.className = 'line';
    line.style.width = `${length}px`;
    line.style.transform = `rotate(${angle}deg)`;

    // Position the line at the starting point
    line.style.top = `${start.top + window.scrollY + start.height / 2}px`;
    line.style.left = `${start.left + window.scrollX + start.width / 2}px`;

    // Append the line to the grid container
    document.querySelector('#container').appendChild(line);
}