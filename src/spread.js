const TAKEN = true;
const OPEN = false;
const MAXROW = 8;
const MAXCOL = 6;

export default class Board {
    constructor() {

        this.spaces = Array.from({ length: MAXROW }, () => Array(MAXCOL).fill([]));
        // for (let i = 0; i < MAXROW; i++) {
        //     for (let j = 0; j < MAXCOL; j++) {
        //         this.spaces[i][j] = shuffleArray(getNeighbors(i, j));
        //     }
        // }

        const start = [Math.floor(Math.random() * MAXROW), Math.floor(Math.random() * MAXCOL)];
        for (let i = start[0]; i < MAXROW; i++) {
            for (let j = start[1]; j < MAXCOL; j++) {
                    this.#connectTwo(i, j);
            }
        }

        for (let i = 0; i < start[0]; i++) {
            for (let j = 0; j < start[1]; j++) {
                this.#connectTwo(i, j);
            }
        }

        }

        #connectTwo(i, j) {
            if (this.spaces[i][j].length >= 2)
                return;

            const shuffledNeighbors = shuffleArray(getNeighbors(i, j));

            for (const neighbor of shuffledNeighbors) {
                // console.log(neighbor);
                const neighborList = this.spaces[neighbor[0]][neighbor[1]];
                if (neighborList.length < 2) {
                    this.spaces[i][j].push(neighbor);
                    this.spaces[neighbor[0]][neighbor[1]].push([i,j])
                }
                if (this.spaces[i][j].length >= 2)
                    return;
            }

            for (const neighbor of shuffledNeighbors) {
                const removeFrom = this.space[neighbor[0]][neighbor[1]].pop();
                this.#severConnection(removeFrom, neighbor);

                this.spaces[i][j].push(neighbor);
                this.spaces[neighbor[0]][neighbor[1]].push([i,j])
                if (this.spaces[i][j].length >= 2)
                    return;
            }

        }

        #severConnection(space, connection) {
            this.spaces[space[0]][space[1]].slice(this.spaces[space[0]][space[1]].indexOf([connection[0], connection[1]]), 1);
        }
}

function getNeighbors(i, j) {
    let neighbors = [];
    if (j - 1 >= 0)
        neighbors.push([i, j - 1]);
    if (j + 1 < MAXCOL)
        neighbors.push([i, j + 1]);
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

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) { 
        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));
                   
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
       
    return array;
 }