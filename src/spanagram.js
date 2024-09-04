import {HORIZONTAL, VERTICAL, TOP, BOTTOM, LEFT, RIGHT, TAKEN, OPEN, MAXROW, MAXCOL, FAILED} from './constants.js';

export default class Spanagram {

    constructor(word) {
        this.option = HORIZONTAL;
        if (word.length >= MAXROW)
            this.option = coinflip(HORIZONTAL, VERTICAL);

        this.targets = [];
        if (this.option === HORIZONTAL) {
            this.targets.push(new Target(coinflip(LEFT, RIGHT)));
            this.targets.push(new Target(getOpposite(this.targets[0].type)));
        }
        else {
            this.targets.push(new Target(coinflip(TOP, BOTTOM)));
            this.targets.push(new Target(getOpposite(this.targets[0].type)));
        }
    }

    // biasCalculator(pos, remaining) {
    //     const val = (this.option === VERTICAL ? pos[0] : pos[1]);
    //     let distance = 0;
    //     if (this.targets.length === 0)
    //         return 0;
    //     let target = this.targets[0];
    //     if (this.targets.length === 2) {
    //         distance += (this.targets[0] - this.targets[1]);
    //     } 
    //     distance += target - val;

    //     return (distance / remaining);
    // }

    checkViable(pos, lengthRemaining) {
        let distance = 0;
        const relevantDim = (this.option === VERTICAL ? pos[0] : pos[1]);

        if (!this.targets[0].isMet())
            distance = Math.abs(this.targets[0].getVal() - this.targets[1].getVal()) + Math.abs(relevantDim - this.targets[0].getVal());
        
        else if (!this.targets[1].isMet())
            distance = Math.abs(relevantDim - this.targets[1].getVal());

        return (lengthRemaining > distance);
    }

    incrementTargets(pos) {
        const relevantDim = (this.option === VERTICAL ? pos[0] : pos[1]);

        if (relevantDim === this.targets[0].getVal())
            this.targets[0].incrementCount();
        else if (this.targets[0].isMet() && (relevantDim === this.targets[1].getVal()))
            this.targets[1].incrementCount();
    }

    decrementTargets(pos) {
        const relevantDim = (this.option === VERTICAL ? pos[0] : pos[1]);

        if (relevantDim === this.targets[0].getVal())
            this.targets[0].decrementCount();
        else if (this.targets[0].isMet() && (relevantDim === this.targets[1].getVal()))
            this.targets[1].decrementCount();
    }
}

class Target {
    constructor(type) {
        this.type = type;
        this.count = 0;
    }

    incrementCount() {
        this.count++;
    }

    decrementCount() {
        this.count--;
    }

    isMet() {
        return (this.count > 0);
    }

    getVal() {
        switch (this.type) {
            case TOP: return 0;
    
            case BOTTOM: return 7;
    
            case LEFT: return 0;
    
            case RIGHT: return 5;
        }
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