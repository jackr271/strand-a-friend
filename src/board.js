const TAKEN = true;
const OPEN = false;
const MAXROW = 8;
const MAXCOL = 6;

export default class Board {
    constructor(available) {
        this.spaces = Array.from({ length: MAXROW }, () => Array(MAXCOL).fill(TAKEN));
        this.available = available;
        for (let coords of available) {
            this.spaces[coords[0]][coords[1]] = OPEN;
        }
    }


    getSubBoards() {
        let subBoards = [];
        for (let i = 0; i < MAXROW; i++) {
            for (let j = 0; j < MAXCOL; j++) {
                if (this.spaces[i][j] === OPEN)
                    subBoards.push(this.#getSubBoard(i, j));
            }
        }
        for (let coords of this.available) {
            this.spaces[coords[0]][coords[1]] = OPEN;
        }
        return subBoards;
    }

    #getSubBoard(i, j) {
        this.spaces[i][j] = TAKEN;
        let available = [[i, j]]
        let current = [[i, j]];
        while (current.length > 0) {
            let upNext = [];
            for (let coord of current) {
                const neighbors = getNeighbors(coord[0], coord[1]);
                for (let neighbor of neighbors) {
                    if (this.spaces[neighbor[0]][neighbor[1]] === OPEN) {
                        upNext.push(neighbor)
                        this.spaces[neighbor[0]][neighbor[1]] = TAKEN;
                        available.push(neighbor);
                    }
                }
            }
            current = upNext;
        }
        return new Board(available);
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
}


function getNeighbors(i, j) {
    let neighbors = [];
    if (j - 1 >= 0)
        neighbors.push([i, j - 1])
    if (j + 1 < MAXCOL)
        neighbors.push([i, j + 1])
    if (i - 1 >= 0) {
        neighbors.push([i - 1, j])
        if (j - 1 >= 0)
            neighbors.push([i - 1, j - 1])
        if (j + 1 < MAXCOL)
            neighbors.push([i - 1, j + 1])
    }
    if (i + 1 < MAXROW) {
        neighbors.push([i + 1, j])
        if (j - 1 >= 0)
            neighbors.push([i + 1, j - 1])
        if (j + 1 < MAXCOL)
            neighbors.push([i + 1, j + 1])
    }
    return neighbors;
}