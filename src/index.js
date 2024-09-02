import './style.css';
import Board from './board';

const container = document.querySelector('#container');

for (let i = 0; i < 48; i++) {
    const mini = document.createElement('div');
    mini.classList = 'mini';
    container.appendChild(mini);
};


// console.log(board);

const word = 'blueberry';


const words = ['berries', 'blueberry', 'strawberry', 'blackberry', 'booberry', 'kiwi'];


const aBoard = new Board([[0,0], [0,1], [1,0], [1,1], [5,5], [5,4], [4,5], [4,4]]);
// const bBoard = new Board([[0,0], [0,1], [1,0], [1,1], [5,5], [5,4], [4,5], [4,4]]);


// console.log(aBoard);

aBoard.printBoard();

const newBoards = aBoard.getSubBoards();

aBoard.printBoard();

if (newBoards.length === 0)
    console.log('EMPTY!');

for (const board of newBoards) {
    board.printBoard();
    console.log(board);
}