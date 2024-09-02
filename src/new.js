const TAKEN = true;
const OPEN = false;
const MAXROW = 8;
const MAXCOL = 6;

export default class Board {
    constructor(words) {
        const spanagram = words[0];
        this.spaces = Array.from({ length: MAXROW }, () => Array(MAXCOL).fill(OPEN));
    }
}