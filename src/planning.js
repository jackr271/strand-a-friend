const HORIZONTAL = 'h';
const VERTICAL = 'v';
const TOP = 't';
const BOTTOM = 'b';
const LEFT = 'l';
const RIGHT = 'r';

/* 

make separate spanagram placement function
    1. determines horizontal or vertical
    2. determines order of walls
    3. sets possible starting locations based on word-length, wall targets
    4. creates neighbor list with a weighted function where two axes are separeted and :
        a. target-axis-bias = (distanceFromTarget / remainingLength) can be negative to move left or positive to move right
        b. e.g. neighbors = [i+1,j], [i+1,j+1], [i+1,j-1], [i,j+1], [i,j], [i,j-1], ...

*/

class Spanagram {

    constructor(word) {
        this.option = HORIZONTAL;
        if (word.length >= MAXROW)
            this.option = coinflip(HORIZONTAL, VERTICAL);

        this.targets = [];
        if (option === HORIZONTAL) {
            this.targets.push(coinflip(LEFT, RIGHT));
            this.targets.push(getOpposite(this.targets[0]));
        }
        else {
            this.targets.push(coinflip(TOP, BOTTOM));
            this.targets.push(getOpposite(this.targets[0]));
        }
    }

    biasCalculator(pos, remaining) {
        const val = (this.option === VERTICAL ? pos[0] : pos[1]);
        let distance = 0;
        if (this.targets.length === 0)
            return 0;
        let target = this.targets[0];
        if (this.targets.length === 2) {
            distance += (this.targets[0] - this.targets[1]);
        } 
        distance += target - val;

        return (distance / remaining);
    }

    getNeighbors(pos) {
        
    }
}

function coinflip(option1, option2) {
    return (Math.floor(Math.random() * 2) === 0 ? option1 : option2);
}

function getOpposite(constant) {
    switch (constant) {
        case HORIZONTAL: return VERTICAL;

        case VERTICAL: return HORIZONTAL;

        case TOP: return BOTTOM;

        case BOTTOM: return TOP;

        case LEFT: return RIGHT;

        case RIGHT: return LEFT;
    }
}

function getVal(constant) {
    switch (constant) {
        case TOP: return 0;

        case BOTTOM: return 7;

        case LEFT: return 0;

        case RIGHT: return 5;
    }
}