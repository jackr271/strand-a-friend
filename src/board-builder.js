import Board from "./clean.js";

export default function buildBoard(words){
    if (!checkValid(words))
        return -1;

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
    return true; // TEMPORARY
}

function emptyBoard() {
    let emptyBoard = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 6; j++) {
            emptyBoard.push([i,j]);
        }
    }
    return emptyBoard;
}

function printSubBoard(openSpaces) {
    const arr = Array.from({ length: 8 }, () => Array(6).fill('1'));

    for (const space of openSpaces)
        arr[space[0]][space[1]] = '0';

    let string = '';
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 6; j++) {
            string += `${arr[i][j]}, `
        }
        string += '\n';
    }
    console.log(string);
}