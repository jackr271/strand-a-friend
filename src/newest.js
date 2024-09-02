const TAKEN = true;
const OPEN = false;
const MAXROW = 8;
const MAXCOL = 6;

export default class Board {
    constructor() {

        this.spaces = Array.from({ length: MAXROW }, () => Array(MAXCOL).fill([]));
        for (let i = 0; i < MAXROW; i++) {
            for (let j = 0; j < MAXCOL; j++) {
                this.spaces[i][j] = shuffleArray(getNeighbors(i, j));
            }
        }

        let maxConnections = 7;
        while (maxConnections >= 2) {
            console.log('going');
            for (let space of this.spaces.flat()) {
                if (space.length > maxConnections) {
                    for (const connectionPos of space) {
                        const connection = this.spaces[connectionPos[0]][connectionPos[1]];
                        if (connection.length > maxConnections) {
                            // console.log(space);
                            this.spaces[connectionPos[0]][connectionPos[1]].splice(connection.indexOf(space), 1);
                            space.splice(space.indexOf(connectionPos), 1);
                            break;
                        }
                    }
                }
            }
            maxConnections--;
        }

    }

    printBoard() {
        let count = 0;
        let order = [];
        let current = this.spaces[0][0];
        const visited = new Map();

        while (count < 48) {
            let i = 0;
            console.log(current);
            while (i < current.length && current[i] in visited)
                i++;
            if (i >= current.length) {
                console.log('problem');
                break;
            }
            visited.set(current[i], count)
            order.push(current[i]);
            const next = current[i];
            // console.log(this.spaces);
            // console.log(next);
            current = this.spaces[next[0]][next[1]];
            count++;
        }

        let toPrint = Array.from({ length: MAXROW }, () => Array(MAXCOL).fill(0));
        let i = 1;
        console.log(order);
        // for (const pos of order) {
        //     console.log(`${i}: ${pos[0]},${pos[1]}`);
        //     // toPrint[pos[0]][pos[1]] = i;
        //     i++;
        // }

        // console.log(toPrint);
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