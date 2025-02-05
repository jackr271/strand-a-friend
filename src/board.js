import {TAKEN, OPEN, MAXROW, MAXCOL, FAILED} from './constants.js';
import Spanagram from "./spanagram.js";

let letterCounter = 0;
const STARTCOUNTERMAX = 500;
const LETTERCOUNTERMAX = 1000;

export default class Board {
    constructor(words, openSpaces, isSpan = false) {
        this.spaces = Array.from({ length: MAXROW }, () => Array(MAXCOL).fill(TAKEN));
        this.size = 0;
        this.isSpan = isSpan;
        this.spanagramManager = null;

        this.#clearSpaces(openSpaces);

        this.word = words[0];
        this.laterWords = words.slice(1);
        this.subBoards = [];

        this.placementManager = this.#placementManager();
        this.wordPos = this.#placeWord();
    }

    getSubBoards() {
        return this.subBoards;
    }

    getWord() {
        let i = 0;
        const result = [];
        while (i < this.word.length) {
            result.push({pos: this.wordPos[i], letter: this.word[i]});
            i++;
        }
        return result;
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

    #clearSpaces(openSpaces) {
        for (let coords of openSpaces) {
            this.spaces[coords[0]][coords[1]] = OPEN;
            this.size++;
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
                    upNext.push(neighbor);
                    this.#fillSpace(neighbor);
                    available.push(neighbor);
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
        let words = [];
        for (const word of this.laterWords)
            words.push(word);
        const subBoardList = [];

        for (const subBoard of subBoards) {
            const size = subBoard.length; // subBoard is list of open spaces
            const wordList = findMatchingSizes(size, words); // array of lengths of words that fit into subBoard
            if (wordList.length === 0)
                return false;
            subBoardList.push([wordList, subBoard]);
            words = words.filter(element => !wordList.includes(element));
        }

        this.subBoards = subBoardList;
        return true;
    }

    #placementManager() {
        if (this.isSpan) {
            this.spanagramManager = new Spanagram(this.word);
            return {
                trySpace: (position) => {
                    this.spanagramManager.incrementTargets(position);
                    this.#fillSpace(position)
                },
                failSpace: (position) => {
                    this.spanagramManager.decrementTargets(position);
                    this.#clearSpace(position)
                },
                checkViable: (position, subWordLength) => {return this.spanagramManager.checkViable(position, subWordLength)},
                getViableNeighbors: (position) => {return randomize(this.#getNeighbors(position[0], position[1]))},
                getStarts: () => {return randomize(this.#getOpenSpaces())},
                checkViableFinal: () => {return ((this.laterWords.length === 0) || this.#checkViableSubBoards())}
            }
        }
        return {
            trySpace: (position) => {this.#fillSpace(position)},
            failSpace: (position) => {this.#clearSpace(position)},
            checkViable: (position, subWordLength) => {return true},
            getViableNeighbors: (position) => {return randomize(this.#getNeighbors(position[0], position[1]))},
            getStarts: () => {return randomize(this.#getOpenSpaces())},
            checkViableFinal: () => {return ((this.laterWords.length === 0) || this.#checkViableSubBoards())}
        }
    }

    #placeWord() {
        const starts = this.placementManager.getStarts();
        const startsLength = starts.length;

        let startCounter = 0;
        while (startCounter < STARTCOUNTERMAX) {
            letterCounter = 0;
            const start = starts[startCounter % startsLength];
            const result = this.#placeLetter(start, this.word);
            if (result != FAILED)
                return result;
            startCounter++;
        }

        return FAILED;
    }

    #placeLetter(position, subWord) {
        if (letterCounter > LETTERCOUNTERMAX)
            return FAILED;
        letterCounter++;

        this.placementManager.trySpace(position);
        if (!this.placementManager.checkViable(position, subWord.length)) {
            this.placementManager.failSpace(position);
            return FAILED;
        }

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

function findMatchingSizes(size, words) {
    const wordSet = words.reduce((subsets, value) => 
        subsets.concat(subsets.map(set => [value, ...set])), 
        [[]]);

    for (let subset of wordSet) {
        if (size === sumWordLengths(subset)) {
            return subset;
        }
    }
    return [];
}

function sumWordLengths(words) {
    let sum = 0;
    for (const word of words)
        sum += word.length;
    return sum;
}