
function createBoard(valor) {
    const container = document.getElementById("container");
    const squares = container.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    const value = valor * valor;
    const sendValue = document.getElementById("btn");
    sendValue.addEventListener("click", createBoard);
    container.style.gridTemplateColumns = `repeat(${valor}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${valor}, 1fr)`;


    for (let i = 0; i < value; i++) {
        let divs = document.createElement("div");
        divs.classList.add('inside');
        container.appendChild(divs);
    };
}



