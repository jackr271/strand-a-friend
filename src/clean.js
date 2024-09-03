const TAKEN = true;
const OPEN = false;
const MAXROW = 8;
const MAXCOL = 6;
const FAILED = -1;
let timeoutCounter = 0;

export default class Board {
    constructor(words, filledSpaces = [], isSpan = false) {
        this.spaces = Array.from({ length: MAXROW }, () => Array(MAXCOL).fill(OPEN));
        this.size = MAXCOL*MAXROW;

        this.placementManager = this.#placementManager();

        this.#fillSpaces(filledSpaces);

        this.word = words[0];
        this.laterWords = words.slice(1);
        this.subBoards = [];

        this.#placeWord();
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

    #fillSpaces(filledSpaces) {
        for (let coords of filledSpaces) {
            this.spaces[coords[0]][coords[1]] = TAKEN;
            this.size--;
        }
    }

    #fillSpace(position) {
        this.spaces[position[0]][position[1]] = TAKEN;
    }

    #clearSpace(position) {
        this.spaces[position[0]][position[1]] = OPEN;
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

    #getOpenSpaces() {
        const openSpaces = [];
        for (let i = 0; i < MAXROW; i++){
            for (let j = 0; j < MAXCOL; j++) {
                if (this.spaces[i][j] === OPEN)
                    openSpaces.push([i,j]);
            }
        }
        return openSpaces;
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
                    this.#fillSpace(neighbor);
                    available.push(neighbor);
                    // }
                }
            }
            current = upNext;
        }
        return available;
    }

    #buildSubBoards() {
        const subBoards = [];
        const openSpaces = this.#getOpenSpaces();

        for (let i = 0; i < MAXROW; i++) {
            for (let j = 0; j < MAXCOL; j++) {
                if (this.spaces[i][j] === OPEN)
                    subBoards.push(this.#getSubBoard(i, j));
            }
        }

        for (const space of openSpaces)
            this.#clearSpace(space);

        return subBoards;
    }

    #checkViableSubBoards() {
        const subBoards = this.#buildSubBoards();
        let lengths = [];
        for (const word of this.laterWords)
            lengths.push(word.length);

        const subBoardList = [];

        for (const subBoard of subBoards) {
            const size = subBoard.length; // subBoard is list of open spaces
            const wordLengths = findMatchingSizes(size, lengths); // array of lengths of words that fit into subBoard
            if (wordLengths.length === 0)
                return false;
            subBoardList.push([subBoard, wordLengths]);
            lengths = lengths.filter(element => !wordLengths.includes(element));
        }

        this.subBoards = subBoardList;
        return true;
    }

    #placementManager() {
        // if (span) {
        //     return {
        //         trySpace: 
        //     }
        // }
        return {
            trySpace: (position) => {this.#fillSpace(position)},
            failSpace: (position) => {this.#clearSpace(position)},
            checkViable: (position, subWordLength) => {return true},
            getViableNeighbors: (position) => {return randomize(this.#getNeighbors(position[0], position[1]))},
            getStarts: () => {return randomize(this.#getOpenSpaces())},
            checkViableFinal: () => {return this.#checkViableSubBoards()}
        }
    }

    #placeWord() {
         //(span ? new Spanagram(this.word) : new NonSpanWord())
        const starts = this.placementManager.getStarts();
        const startsLength = starts.length;

        let i = 0;
        while (i < 50) {
            timeoutCounter = 0;
            const start = starts[i%startsLength];
            const result = this.#placeLetter(start, this.word);
            if (result != FAILED)
                return result;
            i++;
        }

        return FAILED;
    }

    #placeLetter(position, subWord) {
        if (timeoutCounter > 1000)
            return FAILED;
        timeoutCounter++;

        if (!this.placementManager.checkViable(position, subWord.length))
            return FAILED;

        this.placementManager.trySpace(position);

        if (subWord.length === 1) {
            if (this.placementManager.checkViableFinal())
                return [position];
            else {
                this.placementManager.failSpace(position);
                return FAILED;
            }
        }

        const openNeighbors = this.placementManager.getViableNeighbors(position);
        for (const neighbor of openNeighbors) {
            const result = this.#placeLetter(neighbor, subWord.slice(1));
            if (result != FAILED)
                return [position].concat(result);
        }

        this.placementManager.failSpace(position);
        return FAILED;
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

    for (let subset of sizeSet) {
        if (size === sumArr(subset)) {
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