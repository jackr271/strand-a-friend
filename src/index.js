import './style.css';
import Board from './board.js';
import buildBoard from './board-builder.js';
import displayWords from './display.js';

const container = document.querySelector('#container');

for (let i = 0; i < 48; i++) {
    const mini = document.createElement('div');
    mini.classList = 'mini';
    mini.id = `mini-${i}`;
    container.appendChild(mini);
};


const words = ['strawberry', 'berries', 'blueberry', 'blackberry', 'booberry', 'kiwi'];

let emptyBoard = [];
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 6; j++) {
        emptyBoard.push([i,j]);
    }
}


const runButton = document.querySelector('#run');

runButton.addEventListener('click', () => {
    window.removeEventListener('resize',() => {});
    const wordList = buildBoard(words);
    displayWords(wordList);
    window.addEventListener('resize', () => {
        displayWords(wordList);
    });
});