// input-handler.js

import './style.css';

import InputTypes from "./input-types.js";
import { slideInInput, slideInWindow, slideOutInput } from "./animation-handler.js";
import arrowImage from './img/arrow.png';

export default async function getUserInputs() {
    const inputTypes = new InputTypes();
    const puzzleInfo = inputTypes.getInputTypes();

    for (const key in puzzleInfo) {
        const inputHandler = inputTypes.configs[key];
        puzzleInfo[key] = await getUserInput(inputHandler);
    }

    return [await summarizeInfo(puzzleInfo, inputTypes), async () => {
        document.querySelector('body').innerHTML = `<div class="UI-window form-window deactive">
        <div class="horizontal-holder">
            <div id="progress-bar">
                <div class="progress-filled active"></div>
                <div class="progress-filled active"></div>
                <div class="progress-filled active"></div>
                <div class="progress-filled active"></div>
            </div>
        </div>
        <div class="inputs-container active">
        </div>
        <div class="horizontal-holder">
            <button class="next"><img id="arrow" width="50px" alt="arrow"></button>
        </div>
        </div>`;
        document.querySelector('#arrow').src = arrowImage;
        return await summarizeInfo(puzzleInfo, inputTypes, false);
    }];
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

async function summarizeInfo(puzzleInfo, inputTypes, firstCall = true) {
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

    if (firstCall)
        await slideInInput();
    else
        await slideInWindow();

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

    return results;
}