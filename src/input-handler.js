// input-handler.js

import './style.css';

import InputTypes from "./input-types.js";
import { slideInInput, slideOutInput } from "./animation-handler.js";

export default async function getUserInputs() {
    const inputTypes = new InputTypes();
    const puzzleInfo = inputTypes.getInputTypes();

    for (const key in puzzleInfo) {
        const inputHandler = inputTypes.configs[key];
        puzzleInfo[key] = await getUserInput(inputHandler);
    }

    return [await summarizeInfo(puzzleInfo, inputTypes), () => {summarizeInfo(puzzleInfo, inputTypes)}];
}


async function getUserInput(inputHandler) {
    const nextButton = inputHandler.loadInput();
    let input = null;

    await slideInInput();

    while (!inputHandler.isValid) {
        await waitForButtonClick(nextButton);
        input = inputHandler.getInput();
    }

    await slideOutInput();

    return input;
}

async function waitForButtonClick(button) {
    return new Promise((resolve) => {
        button.addEventListener('click', () => {
            resolve();  // This resolves the promise when the button is clicked
        }, { once: true });
    });
}

async function summarizeInfo(puzzleInfo, inputTypes) {
    const container = document.querySelector('.inputs-container');
    container.innerHTML = '';
    const inputHandlers = {};
    const containers = {};
    let generateButton = null;

    for (const key in puzzleInfo) {
        inputHandlers[key] = inputTypes.configs[key];
        containers[key] = document.createElement('div');
        containers[key].className = `inputs-container active`;
        container.appendChild(containers[key]);
        generateButton = inputHandlers[key].loadInput(containers[key], false);
    }

    await slideInInput();

    let flag = false;
    const results = {};

    while (!flag) {
        flag = true;
        await waitForButtonClick(generateButton);
        for (const key in inputHandlers) {
            results[key] = inputHandlers[key].getInput();
            flag = (flag && inputHandlers[key].isValid);
        }

    }

    await slideOutInput();

    return results;
}