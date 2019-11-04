let mainDiv = document.getElementById('mainDiv');
let resetButton = document.querySelector('button');
let numSquares = 16;

function createDivs () {
    for(let i=0; i<(numSquares * numSquares); i++) {
        let squareSideLength = parseInt(960/numSquares);
        console.log(squareSideLength);
        let tempDiv = document.createElement('div');
        mainDiv.appendChild(tempDiv);
        tempDiv.style.width = squareSideLength + "px";
        tempDiv.style.height = squareSideLength + "px";
        tempDiv.style.background = 'black';
        tempDiv.style.opacity= '1';
        tempDiv.addEventListener('mouseenter', setOpacity);
    }
}

function setOpacity() {
    this.style.opacity = this.style.opacity == 0 ? 0 : this.style.opacity - 0.1;
}


resetButton.addEventListener('click', () => {
    numSquares = -1;
    do {
        numSquares = parseInt(prompt("How many squares per side?"));
    } while(numSquares <= 0);
    while(mainDiv.firstChild)
        mainDiv.removeChild(mainDiv.firstChild);
    createDivs();
})

createDivs();