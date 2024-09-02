const TAKEN = true;
const OPEN = false;
const MAXROW = 8;
const MAXCOL = 6;

export default class Board {
    constructor() {

        this.spaces = Array.from({ length: MAXROW }, () => Array(MAXCOL).fill(null));
        for (let i = 0; i < MAXROW; i++) {
            for (let j = 0; j < MAXCOL; j++) {
                this.spaces[i][j] = new Space(i, j);
            }
        }

        let maxConnections = 7;
        while (maxConnections >= 2) {
            console.log('going');
            for (const space of this.spaces.flat()) {
                if (space.connectionsCount > maxConnections) {
                    // console.log(space);
                    const randomConnections = shuffleArray(space.connections);
                    for (const connectionPos of randomConnections) {
                        const connection = this.spaces[connectionPos[0]][connectionPos[1]];
                        if (connection.connectionsCount > 2) {
                            // console.log(space);
                            connection.trim(space);
                            space.trim(connection);
                            break;
                        }
                    }
                }
            }
            maxConnections--;
        }

    }

    printBoard() {
        let count = 47;
        let order = [];
        let current = this.spaces[0][0];

        while (count > 0) {
            order.push(current);
            const next = current.connections[0];
            current = this.spaces[next[0]][next[1]];
            count--;
        }

        let toPrint = Array.from({ length: MAXROW }, () => Array(MAXCOL).fill(0));
        let i = 1;
        console.log(order);
        for (const pos of order) {
            console.log(`${i}: ${pos.x},${pos.y}`);
            // toPrint[pos[0]][pos[1]] = i;
            i++;
        }

        // console.log(toPrint);
    }
}

class Space {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.connections = getNeighbors(x, y);
        this.connectionsCount = this.connections.length;
    }

    trim(connection) {
        const removeThis = [connection.x, connection.y];
        this.connections = this.connections.filter(pos => pos != removeThis);
        this.connectionsCount--;
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