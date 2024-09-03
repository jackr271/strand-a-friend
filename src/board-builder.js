

function buildBoard(words){
    if (!checkValid(words))
        return -1;

    let current = [words[0]];
    let wordPos = [];

    while (current) {
        for (const word in current) {
            const theBoard = new Board(words);
        }
    }
}