const board = [
    null, 0, null, 1, null, 2, null, 3,
    4, null, 5, null, 6, null, 7, null,
    null, 8, null, 9, null, 10, null, 11,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    12, null, 13, null, 14, null, 15, null,
    null, 16, null, 17, null, 18, null, 19,
    20, null, 21, null, 22, null, 23, null
];

let findChecker = function (checkerId) {
    let parsed = parseInt(checkerId);
    return board.indexOf(parsed);
};

const cells = document.querySelectorAll("td");
let whitesCheckers = document.querySelectorAll("p");
let blacksCheckers = document.querySelectorAll("span");
const whiteText = document.querySelectorAll(".whiteText");
const blackText = document.querySelectorAll(".blackText");
const divider = document.querySelector("#divider");

let turn = true;
let playerCheckers;

let selectedChecker = {
    checkerId: -1,
    indexOfBoardChecker: -1,
    seventhSpace: false,
    ninthSpace: false,
    fourteenthSpace: false,
    eighteenthSpace: false,
    minusSeventhSpace: false,
    minusNinthSpace: false,
    minusFourteenthSpace: false,
    minusEighteenthSpace: false
};

function giveCheckersEventListeners() {
    if (turn) {
        for (let i = 0; i < whitesCheckers.length; i++) {
            whitesCheckers[i].addEventListener("click", getPlayerCheckers);
        }
    } else {
        for (let i = 0; i < blacksCheckers.length; i++) {
            blacksCheckers[i].addEventListener("click", getPlayerCheckers);
        }
    }
}

function getPlayerCheckers() {
    if (turn) {
        playerCheckers = whitesCheckers;
    } else {
        playerCheckers = blacksCheckers;
    }
    removeCellonclick();
    resetBorders();
}

function removeCellonclick() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeAttribute("onclick");
    }
}

function resetBorders() {
    for (let i = 0; i < playerCheckers.length; i++) {
        playerCheckers[i].style.border = "1px solid white";
    }
    resetSelectedCheckerProperties();
    getSelectedChecker();
}

function resetSelectedCheckerProperties() {
    selectedChecker.checkerId = -1;
    selectedChecker.checkerId = -1;
    selectedChecker.isKing = false;
    selectedChecker.seventhSpace = false;
    selectedChecker.ninthSpace = false;
    selectedChecker.fourteenthSpace = false;
    selectedChecker.eighteenthSpace = false;
    selectedChecker.minusSeventhSpace = false;
    selectedChecker.minusNinthSpace = false;
    selectedChecker.minusFourteenthSpace = false;
    selectedChecker.minusEighteenthSpace = false;
}

function getSelectedChecker() {
    selectedChecker.checkerId = parseInt(event.target.id);
    selectedChecker.indexOfBoardChecker = findChecker(selectedChecker.checkerId);
    getAvailableSpaces();
}

function getAvailableSpaces() {
    if (board[selectedChecker.indexOfBoardChecker + 7] === null && 
        cells[selectedChecker.indexOfBoardChecker + 7].classList.contains("noneChecker") !== true) {
        selectedChecker.seventhSpace = true;
    }
    if (board[selectedChecker.indexOfBoardChecker + 9] === null && 
        cells[selectedChecker.indexOfBoardChecker + 9].classList.contains("noneChecker") !== true) {
        selectedChecker.ninthSpace = true;
    }
    if (board[selectedChecker.indexOfBoardChecker - 7] === null && 
        cells[selectedChecker.indexOfBoardChecker - 7].classList.contains("noneChecker") !== true) {
        selectedChecker.minusSeventhSpace = true;
    }
    if (board[selectedChecker.indexOfBoardChecker - 9] === null && 
        cells[selectedChecker.indexOfBoardChecker - 9].classList.contains("noneChecker") !== true) {
        selectedChecker.minusNinthSpace = true;
    }
    checkAvailableJumpSpaces();
}
    function checkAvailableJumpSpaces() {
    if (turn) {
        if (board[selectedChecker.indexOfBoardChecker + 14] === null 
        && cells[selectedChecker.indexOfBoardChecker + 14].classList.contains("noneChecker") !== true
        && board[selectedChecker.indexOfBoardChecker + 7] >= 12) {
            selectedChecker.fourteenthSpace = true;
        }
        if (board[selectedChecker.indexOfBoardChecker + 18] === null 
        && cells[selectedChecker.indexOfBoardChecker + 18].classList.contains("noneChecker") !== true
        && board[selectedChecker.indexOfBoardChecker + 9] >= 12) {
            selectedChecker.eighteenthSpace = true;
        }
        if (board[selectedChecker.indexOfBoardChecker - 14] === null 
        && cells[selectedChecker.indexOfBoardChecker - 14].classList.contains("noneChecker") !== true
        && board[selectedChecker.indexOfBoardChecker - 7] >= 12) {
            selectedChecker.minusFourteenthSpace = true;
        }
        if (board[selectedChecker.indexOfBoardChecker - 18] === null 
        && cells[selectedChecker.indexOfBoardChecker - 18].classList.contains("noneChecker") !== true
        && board[selectedChecker.indexOfBoardChecker - 9] >= 12) {
            selectedChecker.minusEighteenthSpace = true;
        }
    } else {
        if (board[selectedChecker.indexOfBoardChecker + 14] === null 
        && cells[selectedChecker.indexOfBoardChecker + 14].classList.contains("noneChecker") !== true
        && board[selectedChecker.indexOfBoardChecker + 7] < 12 && board[selectedChecker.indexOfBoardChecker + 7] !== null) {
            selectedChecker.fourteenthSpace = true;
        }
        if (board[selectedChecker.indexOfBoardChecker + 18] === null 
        && cells[selectedChecker.indexOfBoardChecker + 18].classList.contains("noneChecker") !== true
        && board[selectedChecker.indexOfBoardChecker + 9] < 12 && board[selectedChecker.indexOfBoardChecker + 9] !== null) {
            selectedChecker.eighteenthSpace = true;
        }
        if (board[selectedChecker.indexOfBoardChecker - 14] === null && cells[selectedChecker.indexOfBoardChecker - 14].classList.contains("noneChecker") !== true
        && board[selectedChecker.indexOfBoardChecker - 7] < 12 
        && board[selectedChecker.indexOfBoardChecker - 7] !== null) {
            selectedChecker.minusFourteenthSpace = true;
        }
        if (board[selectedChecker.indexOfBoardChecker - 18] === null && cells[selectedChecker.indexOfBoardChecker - 18].classList.contains("noneChecker") !== true
        && board[selectedChecker.indexOfBoardChecker - 9] < 12
        && board[selectedChecker.indexOfBoardChecker - 9] !== null) {
            selectedChecker.minusEighteenthSpace = true;
        }
    }
    checkCheckerConditions();
}

function checkCheckerConditions() {
        if (turn) {
            selectedChecker.minusSeventhSpace = false;
            selectedChecker.minusNinthSpace = false;
            selectedChecker.minusFourteenthSpace = false;
            selectedChecker.minusEighteenthSpace = false;
        } else {
            selectedChecker.seventhSpace = false;
            selectedChecker.ninthSpace = false;
            selectedChecker.fourteenthSpace = false;
            selectedChecker.eighteenthSpace = false;
        }
        giveCheckerBorder();
    }

function giveCheckerBorder() {
    if (selectedChecker.seventhSpace || selectedChecker.ninthSpace || selectedChecker.fourteenthSpace || selectedChecker.eighteenthSpace
    || selectedChecker.minusSeventhSpace || selectedChecker.minusNinthSpace || selectedChecker.minusFourteenthSpace || selectedChecker.minusEighteenthSpace) {
        document.getElementById(selectedChecker.checkerId).style.border = "3px solid green";
        giveCellsClick();
    } else {
        return;
    }
}

function giveCellsClick() {
    if (selectedChecker.seventhSpace) {
        cells[selectedChecker.indexOfBoardChecker + 7].setAttribute("onclick", "makeMove(7)");
    }
    if (selectedChecker.ninthSpace) {
        cells[selectedChecker.indexOfBoardChecker + 9].setAttribute("onclick", "makeMove(9)");
    }
    if (selectedChecker.fourteenthSpace) {
        cells[selectedChecker.indexOfBoardChecker + 14].setAttribute("onclick", "makeMove(14)");
    }
    if (selectedChecker.eighteenthSpace) {
        cells[selectedChecker.indexOfBoardChecker + 18].setAttribute("onclick", "makeMove(18)");
    }
    if (selectedChecker.minusSeventhSpace) {
        cells[selectedChecker.indexOfBoardChecker - 7].setAttribute("onclick", "makeMove(-7)");
    }
    if (selectedChecker.minusNinthSpace) {
        cells[selectedChecker.indexOfBoardChecker - 9].setAttribute("onclick", "makeMove(-9)");
    }
    if (selectedChecker.minusFourteenthSpace) {
        cells[selectedChecker.indexOfBoardChecker - 14].setAttribute("onclick", "makeMove(-14)");
    }
    if (selectedChecker.minusEighteenthSpace) {
        cells[selectedChecker.indexOfBoardChecker - 18].setAttribute("onclick", "makeMove(-18)");
    }
}

function makeMove(number) {
    document.getElementById(selectedChecker.checkerId).remove();
    cells[selectedChecker.indexOfBoardChecker].innerHTML = "";
    if (turn) {
        if (selectedChecker.isChecker) {
            cells[selectedChecker.indexOfBoardChecker + number].innerHTML = `<p class="checkerWhite" id="${selectedChecker.checkerId}"></p>`;
            whitesCheckers = document.querySelectorAll("p");
        } else {
            cells[selectedChecker.indexOfBoardChecker + number].innerHTML = `<p class="checkerWhite" id="${selectedChecker.checkerId}"></p>`;
            whitesCheckers = document.querySelectorAll("p");
        }
    } else {
        if (selectedChecker.isChecker) {
            cells[selectedChecker.indexOfBoardChecker + number].innerHTML = `<span class="checkerBlack" id="${selectedChecker.checkerId}"></span>`;
            blacksCheckers = document.querySelectorAll("span");
        } else {
            cells[selectedChecker.indexOfBoardChecker + number].innerHTML = `<span class="checkerBlack" id="${selectedChecker.checkerId}"></span>`;
            blacksCheckers = document.querySelectorAll("span");
        }
    }

    let indexOfChecker = selectedChecker.indexOfBoardChecker;
    if (number === 14 || number === -14 || number === 18 || number === -18) {
        changeData(indexOfChecker, indexOfChecker + number, indexOfChecker + number / 2);
    } else {
        changeData(indexOfChecker, indexOfChecker + number);
    }
}

function changeData(indexOfBoardChecker, modifiedIndex, removeChecker) {
    board[indexOfBoardChecker] = null;
    board[modifiedIndex] = parseInt(selectedChecker.checkerId);
    if (removeChecker) {
        board[removeChecker] = null;
        if (turn && selectedChecker.checkerId < 12) {
            cells[removeChecker].innerHTML = "";
        }
        if (turn === false && selectedChecker.checkerId >= 12) {
            cells[removeChecker].innerHTML = "";
        }
    }
    resetSelectedCheckerProperties();
    removeCellonclick();
    removeEventListeners();
}

function removeEventListeners() {
    if (turn) {
        for (let i = 0; i < whitesCheckers.length; i++) {
            whitesCheckers[i].removeEventListener("click", getPlayerCheckers);
        }
    } else {
        for (let i = 0; i < blacksCheckers.length; i++) {
            blacksCheckers[i].removeEventListener("click", getPlayerCheckers);
        }
    }
    changePlayer();
}

function changePlayer() {
    if (turn) {
        turn = false;
        for (let i = 0; i < whiteText.length; i++) {
            whiteText[i].style.color = "lightGrey";
            blackText[i].style.color = "black";
        }
    } else {
        turn = true;
        for (let i = 0; i < blackText.length; i++) {
            blackText[i].style.color = "lightGrey";
            whiteText[i].style.color = "black";
        }
    }
    giveCheckersEventListeners();
}
giveCheckersEventListeners();
