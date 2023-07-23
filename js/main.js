// * GLOBAL VARIABLES

const startBtnNode = document.querySelector("#start-btn")
const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameBoxNode = document.querySelector("#game-box")
const gameoverScreenNode = document.querySelector("#gameover-screen")
const restartBtn = document.querySelector("#restart-btn")

// Create a global variable for the game object:
let gameObj = null;

// * STATE MANAGEMENT FUNCTIONS
function startGame() {
    // console.log("Starting game");
    splashScreenNode.style.display = "none";
    gameScreenNode.style.display = "flex"

    // Create a new element of class Game and initiate the gameLoop:
    gameObj = new Game();
    // console.log(gameObj.gameLoop());
    gameObj.gameLoop()
}

// Create a function to restart the game:
const restartGame = () => {
    gameoverScreenNode.style.display = "none";
    gameBoxNode.innerText = "";
    gameScreenNode.style.display = "flex";
    gameObj = new Game();
    gameObj.gameLoop();
}



// * ADD EVENT LISTENERS

startBtnNode.addEventListener("click", startGame)

gameBoxNode.addEventListener("click", () => {
    // console.log("Click");
    if (gameObj.isGameOn) {
        gameObj.pollito.jumpEffect()
    } // If game is over, pollito should not jump
})

restartBtn.addEventListener("click", restartGame)

