const currentColor = document.getElementById("current-color");
const colors = document.getElementsByClassName("color");
const canvas = document.getElementById("canvas");
const cells = document.getElementsByClassName("cell");
const resetBtn = document.getElementById("reset");
const fillBtn = document.getElementById("fill");

for (let i = 0; i < 900; i++) {
    const newCell = document.createElement("div");
    newCell.className = "cell";
    canvas.appendChild(newCell);
}

resetBtn.addEventListener("click", (event) => {
    for (let cell of cells) {
        cell.style.background = "white";
    } 
});

for (let color of colors) {
  const currColor = color.getAttribute("style").split(" ")[1];
  color.addEventListener("click", () => {
    currentColor.style.background = currColor;
  });
}


for (let cell of cells) {
    [cell, fillBtn].forEach( (evt) => {
        evt.addEventListener("click", (event) => {
            const currColor = event.target.parentNode.parentNode.querySelector("#current-color");
            const color = currColor.getAttribute("style").split(" ")[1].slice(0, -1);
            cell.style.background = color;
        }
    )});
}