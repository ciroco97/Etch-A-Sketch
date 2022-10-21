let color = "black";

function createBoard(valor) {
    const container = document.getElementById("container");
    const squares = container.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    const value = valor * valor;
    container.style.gridTemplateColumns = `repeat(${valor}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${valor}, 1fr)`;

    if (valor < 101 && valor > 1) {
        for (let i = 0; i < value; i++) {
            let divs = document.createElement("div");
            divs.classList.add('inside');
            divs.addEventListener("mouseover", whichColor);
            container.appendChild(divs);
        };
    } else {
        alert("Please insert a value between 1 and 100.");
    }
}

createBoard(16);

function whichColor() {
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() *  360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
};

function setColor(choice) {
    color = choice;
}

function resetBoard() {
    const container = document.getElementById("container");
    const squares = container.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}

