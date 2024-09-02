const TAKEN = true;
const OPEN = false;
const MAXROW = 8;
const MAXCOL = 6;
let counter = 0;

export default class Board {
    constructor(available, words, span = false) {
        this.spaces = Array.from({ length: MAXROW }, () => Array(MAXCOL).fill(TAKEN));
        this.available = available;
        this.size = 0;
        this.span = span; // whether or not spanagram word
        console.log(words);

        for (let coords of available) {
            this.spaces[coords[0]][coords[1]] = OPEN;
            this.size++;
        }

        this.word = words[0];
        this.lengths = words.slice(1).map((x) => x.length);
    }


    placeWord() {
        const starts = randomize(this.available);
        const length = starts.length;
        let i = 0;
        while (i < 5000) {
            counter = 0;
            const start = starts[i%length];
            const result = this.#placeWord(start, this.word);
            if (result != -1)
                return result;
            i++;
        }

        return -1;
    }

    #placeWord(space, subWord) {
        // console.log(`${subWord}: ${space[0]},${space[1]}`);
        counter++;
        if (counter > 1000)
            return -1;
        this.spaces[space[0]][space[1]] = TAKEN;
        if (subWord.length === 1) {
            const subBoards = this.getSubBoards();
            let lengths = this.lengths;
            // console.log(`${lengths}`);
            let subBoardList = [];
            for (const subBoard of subBoards) {
                const size = subBoard.length;
                // console.log(size);
                const wordLengths = findMatchingSizes(size, lengths);
                // console.log(wordLengths);
                if (wordLengths.length === 0) {
                    this.spaces[space[0]][space[1]] = OPEN;
                    return -1;
                }
                subBoardList.push([subBoard, wordLengths]);
                lengths = lengths.filter(element => !wordLengths.includes(element));
            }
            if (this.span && subBoardList.length < 2)
                return -1;
            this.subBoards = subBoardList;
            return [[space[0],space[1]]];
        }
        const openNeighbors = randomize(this.#getNeighbors(space[0],space[1]));
        for (const neighbor of openNeighbors) {
            const result = this.#placeWord(neighbor, subWord.slice(1));
            if (result != -1)
                return [[space[0],space[1]]].concat(result);
        }

        this.spaces[space[0]][space[1]] = OPEN;
        return -1;
    }

    getSubBoards() {
        let subBoards = [];
        let openSpaces = [];
        for (let i = 0; i < MAXROW; i++) {
            for (let j = 0; j < MAXCOL; j++) {
                if (this.spaces[i][j] === OPEN)
                    openSpaces.push([i,j]);
            }
        }

        for (let i = 0; i < MAXROW; i++) {
            for (let j = 0; j < MAXCOL; j++) {
                if (this.spaces[i][j] === OPEN)
                    subBoards.push(this.#getSubBoard(i, j));
            }
        }

        for (let coords of openSpaces) {
            this.spaces[coords[0]][coords[1]] = OPEN;
        }
        return subBoards;
    }

    #getSubBoard(i, j) {
        let available = [[i, j]];
        this.spaces[i][j] = TAKEN;
        let current = [[i, j]];
        while (current.length > 0) {
            let upNext = [];
            for (let coord of current) {
                const neighbors = this.#getNeighbors(coord[0], coord[1]);
                for (let neighbor of neighbors) {
                    // if (this.spaces[neighbor[0]][neighbor[1]] === OPEN) {
                    upNext.push(neighbor)
                    this.spaces[neighbor[0]][neighbor[1]] = TAKEN;
                    available.push(neighbor);
                    // }
                }
            }
            current = upNext;
        }
        return available;
    }

    printBoard() {
        let string = '';
        for (let i = 0; i < MAXROW; i++) {
            for (let j = 0; j < MAXCOL; j++) {
                string += `${this.spaces[i][j] ? 1 : 0}, `
            }
            string += '\n';
        }
        console.log(string);
    }

    #getNeighbors(i, j) {
        let neighbors = [];
        if ((j - 1 >= 0) && (this.spaces[i][j - 1] === OPEN))
            neighbors.push([i, j - 1])
        if ((j + 1 < MAXCOL) && (this.spaces[i][j + 1] === OPEN))
            neighbors.push([i, j + 1])
        if (i - 1 >= 0) {
            if (this.spaces[i - 1][j] === OPEN)
                neighbors.push([i - 1, j])
            if ((j - 1 >= 0) && (this.spaces[i - 1][j - 1] === OPEN))
                neighbors.push([i - 1, j - 1])
            if ((j + 1 < MAXCOL) && (this.spaces[i - 1][j + 1] === OPEN))
                neighbors.push([i - 1, j + 1])
        }
        if (i + 1 < MAXROW) {
            if (this.spaces[i + 1][j] === OPEN)
                neighbors.push([i + 1, j])
            if ((j - 1 >= 0) && (this.spaces[i + 1][j - 1] === OPEN))
                neighbors.push([i + 1, j - 1])
            if ((j + 1 < MAXCOL) && (this.spaces[i + 1][j + 1] === OPEN))
                neighbors.push([i + 1, j + 1])
        }
        return neighbors;
    }
}

function randomize(array) {
    for (var i = array.length - 1; i > 0; i--) { 
        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));
                   
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
       
    return array;
}


function findMatchingSizes(size, sizeArr) {
    const sizeSet = sizeArr.reduce((subsets, value) => 
        subsets.concat(subsets.map(set => [value, ...set])), 
        [[]]);

    // console.log(sizeSet);
    
    for (let subset of sizeSet) {
        // console.log(subset);
        if (size === sumArr(subset)) {
            // console.log(subset);
            return subset;
        }
    }
    return [];
}

function sumArr(arr) {
    let sum = 0;
    for (const num of arr)
        sum += num;
    return sum;
}