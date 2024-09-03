import Board from "./clean.js";

export default function buildBoard(words){
    if (!checkValid(words))
        return -1;

    let current = [[words, emptyBoard()]];
    // console.log(current);
    const wordList = [];

    while (current.length > 0) {
        let upNext = [];
        for (const subBoard of current) {
            console.log(subBoard);
            const theBoard = new Board(subBoard[0], subBoard[1]);
            const newSubBoards = theBoard.getSubBoards();
            for (const newSubBoard of newSubBoards)
                upNext.push(newSubBoard);
            wordList.push(theBoard.getWord());
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