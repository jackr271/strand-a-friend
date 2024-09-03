import './style.css';
import Board from './clean.js';
import buildBoard from './board-builder.js';

const container = document.querySelector('#container');

for (let i = 0; i < 48; i++) {
    const mini = document.createElement('div');
    mini.classList = 'mini';
    container.appendChild(mini);
};


// console.log(board);

const word = 'blueberry';


const words = ['berries', 'blueberry', 'strawberry', 'blackberry', 'booberry', 'kiwi'];


// const aBoard = new Board([[0,0], [0,1], [1,0], [1,1], [5,5], [5,4], [4,5], [4,4]]);
// const bBoard = new Board([[0,0], [0,1], [1,0], [1,1], [5,5], [5,4], [4,5], [4,4]]);

let emptyBoard = [];
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 6; j++) {
        emptyBoard.push([i,j]);
    }
}


const runButton = document.querySelector('#run');

// runButton.addEventListener('click', () => {
//     const theBoard = new Board();

//     console.log(theBoard);

//     // theBoard.printBoard();

// });

// runButton.addEventListener('click', () => {
//     const theBoard = new Board();
//     let string = '';
//     const path = Array.from({ length: 8 }, () => Array(6).fill(0));

//     let i = 1;
//     for (const coord of theBoard.order) {
//         path[coord[0]][coord[1]] = i;
//         i++;
//     }

//     console.log(path);
// });

runButton.addEventListener('click', () => {
    const wordList = buildBoard(words);
    console.log(`here: ${wordList}`);
});

// runButton.addEventListener('click', () => {
//     const theBoard = new Board(words, emptyBoard);
//     console.log(theBoard.spaces);
//     theBoard.printBoard();
//     console.log(theBoard.subBoards);
//     console.log(theBoard.getWord());
// });

// runButton.addEventListener('click', () => {
//     console.log('running');
//     const theBoard = new Board(emptyBoard, words, true);

//     theBoard.printBoard();
//     const wordPos = theBoard.placeWord();
//     theBoard.printBoard();
//     console.log(wordPos);
//     console.log(theBoard.subBoards);
// });

// console.log(theBoard.wordPos);

// console.log(aBoard);

// aBoard.printBoard();

// const newBoards = aBoard.getSubBoards();

// aBoard.printBoard();

// if (newBoards.length === 0)
//     console.log('EMPTY!');

// for (const board of newBoards) {
//     board.printBoard();
//     console.log(board);
// }