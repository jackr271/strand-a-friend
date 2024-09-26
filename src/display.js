export default function displayWords(wordList, puzzleInfo, isMobile = false) {

    document.querySelector('#title-holder').innerText = puzzleInfo.title;
    document.querySelector('#hint-holder').innerText = puzzleInfo.hint;

    renderWords(wordList, isMobile);
    console.log('DONE!');

}

let isSpan = true;
const color = `145, 255, 112`;

function renderWords(wordList, isMobile) {

    let radius = 30;
    let height = 20;

    if (isMobile) {
        console.log('small');
        radius = 20;
        height = 15;
    }

    const container = document.querySelector('.board');
    isSpan = true;

    clearGrid();

    let wordNum = 0;
    for (const word of wordList) {
        let prev = null;

        for (const letter of word) {
            const i = letter.pos[0];
            const j = letter.pos[1];
            const mini = container.querySelector(`#mini-${i * 6 + j}`);
            const letterHolder = document.createElement('div');
            letterHolder.classList.add('letter', `word-${wordNum}`);
            letterHolder.innerText = letter.letter.toUpperCase();
            mini.appendChild(letterHolder);

            drawCircle(mini, radius);

            if (prev)
                drawLineBetweenPoints(prev, mini, height);
            prev = mini;
        }

        isSpan = false;

    }
}

function clearGrid() {
    const minis = document.querySelectorAll('.mini');
    for (const mini of minis)
        mini.innerHTML = '';

    const lines = document.querySelectorAll('.line');
    for (const line of lines)
        line.remove();

    const circles = document.querySelectorAll('.circle');
    for (const circle of circles)
        circle.remove();
}

function drawLineBetweenPoints(gridItem1, gridItem2, height) {
    // console.log(gridItem1);
    // console.log(gridItem1.getBoundingClientRect());
    const start = gridItem1.getBoundingClientRect();
    const end = gridItem2.getBoundingClientRect();

    // Calculate the difference in x and y coordinates
    const deltaX = getCenter(end)[0] - getCenter(start)[0];
    const deltaY = getCenter(end)[1] - getCenter(start)[1];

    // Calculate the length of the line (using the distance formula)
    const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Calculate the angle of the line
    const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

    // Create a line element
    const line = document.createElement('div');
    line.className = 'line';
    line.style.width = `${length}px`;
    line.style.height = `${height}px`;

    // Position the line at the starting point
    line.style.top = `${(start.top + start.bottom - height) / 2 + window.scrollY}px`;
    line.style.left = `${(start.left + start.right) / 2 + window.scrollX}px`;
    line.style.transformOrigin = 'left';
    line.style.transform = `rotate(${angle}deg)`;

    if (isSpan)
        line.classList.add(`theme-word`);

    // Append the line to the grid container
    document.querySelector('.board').appendChild(line);
}

function drawCircle(gridItem, radius) {
    // console.log('called');
    // console.log(gridItem);
    // console.log(gridItem.getBoundingClientRect());
    const center = getCenter(gridItem.getBoundingClientRect());
    // console.log(center);
    const circle = document.createElement('div');

    circle.classList = 'circle';
    circle.style.width = `${2*radius}px`;
    circle.style.height = `${2*radius}px`;
    circle.style.borderRadius = `100%`;
    circle.style.top = `${center[1] - radius + window.scrollY}px`;
    circle.style.left = `${center[0] - radius + window.scrollX}px`;

    if (isSpan)
        circle.classList.add(`theme-word`);

    // console.log(circle.style.top);
    document.querySelector('.board').appendChild(circle);
}

function getCenter(rectangle) {
    const x = (rectangle.left + rectangle.right) / 2;
    const y = (rectangle.top + rectangle.bottom) / 2;

    return [x, y];
}

// function buildGrid(wordList) {
//     const arr = Array.from({ length: 8 }, () => Array(6).fill('0'));
//     let wordNum = 0;
//     for (const word of wordList) {
//         for (const letter of word) {
//             if (!letter.pos)
//                 console.log(`Word: ${word.reduce((toPrint, x) => toPrint + x.letter, '')},  ${word.reduce((toPrint, x) => toPrint + String(x.pos), '')}`);
//             const i = letter.pos[0];
//             const j = letter.pos[1];
//             arr[i][j] = ([wordNum, letter.letter]);
//         }
//         wordNum++;
//     }

//     return arr;
// }

// function printWords(wordList) {

//     let wordGrid = buildGrid(wordList);

//     let string = '';
//     for (let i = 0; i < 8; i++) {
//         for (let j = 0; j < 6; j++) {
//             string += `${wordGrid[i][j][1]}, `
//         }
//         string += '\n';
//     }
//     console.log(string);
// }