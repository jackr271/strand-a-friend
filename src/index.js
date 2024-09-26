import './style.css';
import getUserInputs from './input-handler.js';
import arrowImage from './img/arrow.png';

document.querySelector('#arrow').src = arrowImage;

let [results, resummarize] = await getUserInputs();
console.log(results);

import buildBoard from './board-builder.js';
import displayWords from './display.js';
import loadGameGenerator from './new.js';
import { slideInWindow, slideOutWindow } from './animation-handler.js';

async function loadBoard() {
    await slideOutWindow();
    const [regenerateButton, editButton, shareButton] = loadGameGenerator();
    let board = buildBoard(results.words)
    // await slideInWindow();
    displayWords(board, results, true);
    console.log('if first, wrong');
    // setTimeout( () => {
    //     document.querySelector('.UI-window').style.visibility = 'visible';
    // }, 2000);

    window.addEventListener('resize', () => {
        displayWords(board, results, true);
    })

    regenerateButton.addEventListener('click', () => {
        board = buildBoard(results.words)
        displayWords(board, results, true);
    });

    editButton.addEventListener('click', async () => {
        results = await resummarize();
        loadBoard();
    });
}

loadBoard();

// const [regenerateButton, editButton, shareButton] = loadGameGenerator();
// let board = buildBoard(results.words)
// displayWords(board, results, true);

// window.addEventListener('resize', () => {
//     loadGameGenerator();
// });

// // for (let i = 0; i < 48; i++) {
// //     const mini = document.createElement('div');
// //     mini.classList = 'mini';
// //     mini.id = `mini-${i}`;
// //     container.appendChild(mini);
// // };


// let emptyBoard = [];
// for (let i = 0; i < 8; i++) {
//     for (let j = 0; j < 6; j++) {
//         emptyBoard.push([i,j]);
//     }
// }


// // const runButton = document.querySelector('#run');

// // runButton.addEventListener('click', () => {
// //     window.removeEventListener('resize',() => {});
// //     const wordList = buildBoard(words);
// //     displayWords(wordList);
// //     window.addEventListener('resize', () => {
// //         displayWords(wordList);
// //     });
// // });