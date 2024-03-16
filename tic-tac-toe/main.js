const ticTacToe = document.querySelector(".tic-tac-toe");
const msgBox = document.getElementById("messageBox");
const msg = document.getElementById("message");
const resetBtn = document.querySelector("button");

function makeBoard() {
    for (let i = 0; i < 9; i++) {
        const square = document.createElement("div");
        square.classList.add("empty", "square");
        ticTacToe.append(square);
    }
}

makeBoard();

const squares = document.querySelectorAll(".square");

for (let square of squares) {
    square.addEventListener("click", function makeMove(e) {
        const emptySquares = document.querySelectorAll(".empty"), sqr = e.target, attribute = e.target.getAttribute("class");
        emptySquares.length % 2 !== 0 ? turn = "X" : turn = "O";

        if (attribute.includes("empty")) {
            sqr.textContent = `${turn}`;
            sqr.classList.remove("empty");
        }

        // Winning possibilities founded by Ray.
        let leftCol = squares[0].textContent + squares[1].textContent + squares[2].textContent;
        let midCol = squares[3].textContent + squares[4].textContent + squares[5].textContent;
        let rightCol = squares[6].textContent + squares[7].textContent + squares[8].textContent;
        let topRow = squares[0].textContent + squares[3].textContent + squares[6].textContent;
        let midRow = squares[1].textContent + squares[4].textContent + squares[7].textContent;
        let botRow = squares[2].textContent + squares[5].textContent + squares[8].textContent;
        let leftDia = squares[0].textContent + squares[4].textContent + squares[8].textContent;
        let rightDia = squares[6].textContent + squares[4].textContent + squares[2].textContent;

        const possibilities = [leftCol, midCol, rightCol, topRow, midRow, botRow, leftDia, rightDia]

        let win = false;
        
        for (let possible of possibilities) {
            if (possible.includes("XXX")) {
                win = true;
                msg.innerText = "X Wins!";
                msgBox.style.display = "block";
                ticTacToe.style.display = "none";
            }

            if (possible.includes("OOO")) {
                win = true;
                msg.innerText = "O Wins!";
                msgBox.style.display = "block";
                ticTacToe.style.display = "none";
            }
        }
        
        if (emptySquares.length === 1 && !win) {
            msg.innerText = "Game Over";
            msgBox.style.display = "block";
            ticTacToe.style.display = "none";
        }
    })
}

resetBtn.addEventListener("click", () => {
    msgBox.style.display = "none";
    ticTacToe.style.display = "grid";

    for (let square of squares) {
        square.innerText = "";
        square.classList.add("empty", "square");
    }
});




