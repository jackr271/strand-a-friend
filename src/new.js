const TAKEN = true;
const OPEN = false;
const MAXROW = 8;
const MAXCOL = 6;

export default class Board {
    constructor() {
        // const spanagram = words[0];
        this.spaces = Array.from({ length: MAXROW }, () => Array(MAXCOL).fill(OPEN));
        this.order = [];
        this.openCount = MAXROW * MAXCOL;

        let positions = [];
        for (let i = 0; i < MAXROW; i++) {
            for (let j = 0; j < MAXCOL; j++) {
                positions.push([i,j]);
            }
        }
        const starts = shuffleArray(positions);
        for (const start of starts) {
            if (this.#build(start))
                break;
        }
    }
        
    #build(pos) {
        // console.log(`Count: ${this.openCount} \t${pos}`);
        this.order.push(pos);
        this.spaces[pos[0]][pos[1]] = TAKEN;
        this.openCount--;
        if (this.openCount === 0)
            return true;

        const neighbors = shuffleArray(this.#getNeighbors(pos[0],pos[1]));
        for (const neighbor of neighbors) {
            if (this.#build(neighbor))
                return true;
        }

        this.order.pop();
        this.spaces[pos[0]][pos[1]] = OPEN;
        this.openCount++;
        return false;
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

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) { 
        // Generate random number 
        let j = Math.floor(Math.random() * (i + 1));
                   
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
       
    return array;
 }

function randomize(arr) {
    const randomStart = Math.floor(Math.random() * arr.length);
    let newArr = arr.slice(randomStart).concat(arr.slice(0, randomStart));
    return newArr;
}