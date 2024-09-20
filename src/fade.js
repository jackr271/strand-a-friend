export {fadeIn, fadeOut};

function fadeIn(element, children, duration) {

    function increaseOpacity() {
        const newOp = String(Number(element.style.opacity) + incrementSize);
        element.style.opacity = newOp;
        if (newOp < 1)
            setTimeout(increaseOpacity, (1000 / fps));
    }

    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    const incrementSize = 1 / totalFrames;

    element.style.opacity = 0;

    for (const child of children) {
        element.appendChild(child);
    }

    increaseOpacity();
}

function fadeOut(element, duration) {

    function decreaseOpacity() {
        const newOp = String(Number(element.style.opacity) - incrementSize);
        element.style.opacity = newOp;

        if (newOp > 0)
            setTimeout(decreaseOpacity, (1000 / fps));
    }

    const children = element.querySelectorAll('input, textarea, button, label');

    for (const child of children) {
        child.setAttribute('disabled', 'true');
    }

    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    const incrementSize = 1 / totalFrames;


    element.style.opacity = '1.0';
    decreaseOpacity();

    setTimeout(() => {
        element.innerHTML = '';
    }, duration);
}