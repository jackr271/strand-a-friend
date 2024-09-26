export {slideInInput, slideOutInput, slideInWindow, slideOutWindow};


const DURATION = 500;

async function slideInInput() {
    const container = document.querySelector('.inputs-container');
    container.style.visibility = 'visible';
    container.classList.toggle('active');
    await delay(DURATION);
}

async function slideOutInput() {
    const container = document.querySelector('.inputs-container');
    container.classList.toggle('active');
    container.classList.toggle('deactive');
    increasePogressBar();
    await delay(DURATION);
    container.style.visibility = 'hidden';
    container.classList.toggle('deactive');
    await delay(20);
}

function delay(delayLength) {
    return new Promise(resolve => setTimeout(resolve, delayLength));
}


async function increasePogressBar() {
    const progressBar = document.querySelector('#progress-bar')
    const progressFill = document.createElement('div');
    progressFill.className = 'progress-filled';
    progressBar.appendChild(progressFill);
    await delay(DURATION);
    progressFill.classList.toggle('active');
}

async function slideOutWindow() {
    const container = document.querySelector('.UI-window');
    container.classList.toggle('deactive');
    await delay(DURATION);
    // document.querySelector('.body').style.visibility = 'hidden';
    // container.classList.toggle('deactive');
    // await delay(20)
}

async function slideInWindow() {
    // await delay(2000);
    const container = document.querySelector('.UI-window');
    container.classList.toggle('deactive');
    container.classList.toggle('active');
    // container.classList.toggle('active');
    await delay(DURATION);
    container.classList.toggle('active');
}