export default function printWords(wordList) {
    const arr = Array.from({ length: 8 }, () => Array(6).fill('0'));

    for (const word of wordList) {
        for (const letter of word) {
            if (!letter.pos)
                console.log(`Word: ${word.reduce((toPrint, x) => toPrint + x.letter, '')},  ${word.reduce((toPrint, x) => toPrint + String(x.pos), '')}`);
            const i = letter.pos[0];
            const j = letter.pos[1];
            arr[i][j] = letter.letter;
        }
    }

    let string = '';
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 6; j++) {
            string += `${arr[i][j]}, `
        }
        string += '\n';
    }
    console.log(string);
}