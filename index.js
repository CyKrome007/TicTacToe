const tiles = document.querySelectorAll(".Tile")

let gameOver = false;
let turn = "X"
let winner = document.querySelector(".Winner");

const startGame = () => {
    for (let tile of tiles) {
        tile.disabled = false;
        tile.innerText = "";
        if(tile.classList.contains('WinBox')){
            tile.classList.remove('WinBox');
        }
    }

    for (let tile of tiles) {
        tile.disabled = false;
    }

    winner.innerText = "";

    gameOver = false;
    turn = "X"
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].innerText = ""
    }
}

startGame();

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        if(!gameOver){
            tile.innerText = turn.toString();
            turn === "X" ? turn = "O" : turn = "X";
        }
        tile.disabled = true;

        checkWin();
    });
})

const checkWin = () => {
    for (let pattern of winPatterns) {
        let pos1 = tiles[pattern[0]].innerText;
        let pos2 = tiles[pattern[1]].innerText;
        let pos3 = tiles[pattern[2]].innerText;
        if(pos1 !== "" && pos2 !== "" && pos2 !== "") {
            if(pos1 === pos2 && pos1 === pos3){
                // alert(pos1 + " is the Winner");
                winner.innerText = `Congratulations ${pos1} you won the game!`;
                tiles[pattern[0]].classList.add('WinBox');
                tiles[pattern[1]].classList.add('WinBox');
                tiles[pattern[2]].classList.add('WinBox');
                for(let tile of tiles) {
                    tile.disabled = true;
                }
            }
        }
    }
}
