import {MAXROW, MAXCOL, FAILED} from './constants.js';
import Board from "./board.js";


export default function buildBoard(words){
    if (!checkValid(words))
        return FAILED;

    let current = [[words, emptyBoard()]];
    const wordList = [];
    let isSpan = true; // true for first call, then set to false

    while (current.length > 0) {
        let upNext = [];
        for (const subBoard of current) {

            let theBoard = new Board(subBoard[0], subBoard[1], isSpan);
            isSpan = false;
            let newWord = theBoard.getWord();

            const newSubBoards = theBoard.getSubBoards();
            if (!newWord[0].pos)
                return buildBoard(words);
            for (const newSubBoard of newSubBoards)
                upNext.push(newSubBoard);
            wordList.push(newWord);
        }
        current = upNext.filter((element) => element.length > 0); // filter prevents empty subBoards from being added
    }

    return wordList;
}


function checkValid(words) {
    let result = (words[0].length >= MAXCOL);
    result = (result && words.slice(1).reduce((value, currentWord) => value && (currentWord.length >= 4), true));
    const charSum = words.reduce((total, currentWord) => total + currentWord.length, 0);
    result = (result && (charSum === (MAXCOL * MAXROW)));
    
    return result;
}

function emptyBoard() {
    let emptyBoard = [];
    for (let i = 0; i < MAXROW; i++) {
        for (let j = 0; j < MAXCOL; j++) {
            emptyBoard.push([i,j]);
        }
    }
    return emptyBoard;
}

// function printSubBoard(openSpaces) {
//     const arr = Array.from({ length: 8 }, () => Array(6).fill('1'));

//     for (const space of openSpaces)
//         arr[space[0]][space[1]] = '0';

//     let string = '';
//     for (let i = 0; i < 8; i++) {
//         for (let j = 0; j < 6; j++) {
//             string += `${arr[i][j]}, `
//         }
//         string += '\n';
//     }
//     console.log(string);
// }