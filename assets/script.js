const cells = document.querySelectorAll(".box");
const restartBtn = document.getElementById("restart");
let isPlayerTurn = true;
let finished = false;
let moves = 0;
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function updateMessage(msg) {
    document.getElementById("message").textContent = msg;
}

function fillCell(cell, symbol, bg) {
    cell.textContent = symbol;
    cell.style.background = bg;
    cell.disabled = true;
}

cells.forEach((cell) => {
    cell.addEventListener("click", function () {
        if (!isPlayerTurn || finished || cell.textContent !== "") return;
        fillCell(cell, "X", "#f08080");
        moves++;
        if (detectWin("X")) {
            finished = true;
            return;
        }
        updateMessage("Computer's Turn");
        isPlayerTurn = false;
        setTimeout(computerPlay, 600 + Math.random() * 300);
    });
});

function computerPlay() {
    function findMove(mark) {
        for (let combo of winCombos) {
            const values = combo.map((i) => cells[i].textContent);
            if (
                values.filter((v) => v === mark).length === 2 &&
                values.includes("")
            ) {
                return combo[values.indexOf("")];
            }
        }
        return -1;
    }
    const open = Array.from(cells)
        .map((cell, idx) => (cell.textContent === "" ? idx : null))
        .filter((idx) => idx !== null);
    if (!open.length) {
        if (!detectWin("O")) updateMessage("Game Draw!");
        isPlayerTurn = false;
        finished = true;
        return;
    }
    let move = findMove("O");
    if (move === -1) move = findMove("X");
    if (move === -1 && cells[4].textContent === "") move = 4;
    if (move === -1) {
        const corners = [0, 2, 6, 8].filter((i) => cells[i].textContent === "");
        if (corners.length)
            move = corners[Math.floor(Math.random() * corners.length)];
    }
    if (move === -1) move = open[Math.floor(Math.random() * open.length)];
    fillCell(cells[move], "O", "#90ee90");
    moves++;
    if (detectWin("O")) {
        finished = true;
        return;
    }
    if (moves < 9) {
        updateMessage("Your Turn");
        isPlayerTurn = true;
    }
}

function detectWin(symbol) {
    for (let combo of winCombos) {
        const [a, b, c] = combo;
        if (
            cells[a].textContent !== "" &&
            cells[a].textContent === cells[b].textContent &&
            cells[b].textContent === cells[c].textContent
        ) {
            updateMessage(
                cells[a].textContent === "X" ? "You Win" : "Computer Wins"
            );
            cells.forEach((cell) => {
                cell.disabled = true;
                if (cell.textContent === "") cell.style.background = "#001f3f";
            });
            moves = 0;
            return true;
        }
    }
    if (moves === 9) {
        updateMessage("Game Draw!");
        return true;
    }
    return false;
}

restartBtn.addEventListener("click", function () {
    cells.forEach((cell) => {
        cell.textContent = "";
        cell.disabled = false;
        cell.style.background = "white";
    });
    isPlayerTurn = true;
    finished = false;
    moves = 0;
    updateMessage("Your Turn");
});
