function containerMaker(classContent) {

    let container = document.createElement("div");
    container.classList.add(`${classContent}`);

    return container

}

function svgCreator(uniqueString) {

    let svgContainer = containerMaker(`svg-container`);
    let svgString = `${uniqueString}`;
    svgContainer.style.width = "60px"

    svgContainer.innerHTML = svgString;

    return svgContainer;

}

function textBoxMaker(boxType, classContent, textContent) {

    let textBox = document.createElement(`${boxType}`);
    textBox.classList.add(`${classContent}`);
    textBox.textContent = `${textContent}`;

    return textBox

}

function buttonMaker(classContent, textContent) {

    let button = document.createElement("button");
    button.classList.add(`${classContent}`);
    button.textContent = `${textContent}`;

    return button;

}

function domElementAccessorFromClass(string) {
    
    let domElement = document.querySelector(`.${string}`);
    return domElement;

}

function domElementAccessorFromType(string) {

    let domElement = document.querySelector(`${string}`);
    return domElement;

}

export { containerMaker, svgCreator, textBoxMaker, buttonMaker, domElementAccessorFromClass, domElementAccessorFromType }
