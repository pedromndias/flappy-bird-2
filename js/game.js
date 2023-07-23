// console.log("Testing");

class Game {
    
    constructor() {
        this.pollito = new Pollito();
        
        // this.unObstaculo = new Obstaculo();
        // Create an array of obstaculos:
        this.obstaculosArr = [];

        // Create a variable for the frames:
        this.frames = 0;
        this.isGameOn = true;
    }

    // Function for the game over:
    gameOver = () => {
        this.isGameOn = false; // Stop the recursion
        gameScreenNode.style.display = "none"; // Hide game screen
        gameoverScreenNode.style.display = "flex"; // Show final screen
    }

    // Function for the collision between pollito and obstaculos:
    collisionPollitoObstaculos = () => {
        this.obstaculosArr.forEach((eachObstacle) => {
            if (
                this.pollito.x < eachObstacle.x + eachObstacle.w &&
                this.pollito.x + this.pollito.w > eachObstacle.x &&
                this.pollito.y < eachObstacle.y + eachObstacle.h &&
                this.pollito.y + this.pollito.h > eachObstacle.y
              ) {
                // Collision detected!
                this.gameOver()
              }
        })
    }

    // Function for the collision between pollito and the ground:
    collisionPollitoGround = () => {
        if (this.pollito.y + this.pollito.h > gameBoxNode.offsetHeight) {
            // console.log("pollito has hit the ground");
            this.gameOver()
        }
    }

    obstaculosSpawning = () => {

        // Let's check if the array is empty or if 2 seconds have passed (120 frames)
        if (this.obstaculosArr.length === 0 || this.frames % 120 === 0) {
            // Create a random number for the y start position:
            let randomNumber = Math.floor(Math.random() * -200)
            // Create new Obstaculo object with that random number:
            let newObstaculoUp = new Obstaculo(randomNumber, true)
            // And push it into the array:
            this.obstaculosArr.push(newObstaculoUp)
            // console.log(this.obstaculosArr);

            // Now create a new obstaculo but 400px down:
            let newObstaculoDown = new Obstaculo(randomNumber + 400, false)
            this.obstaculosArr.push(newObstaculoDown)
        }
    }

    obstaculosDisappear = () => {
        if (this.obstaculosArr[0].x < -200) {
            this.obstaculosArr[0].node.remove() // Remove the element from DOM
            this.obstaculosArr.shift() // Remove the element from the array
        }
    }


    gameLoop = () => {
        // console.log("Testing game loop");

        // Increment frames:
        this.frames++;

        this.pollito.gravityEffect()

        // this.unObstaculo.automaticMovement()
        this.obstaculosSpawning()
        this.obstaculosArr.forEach(eachElement=> {
            eachElement.automaticMovement()
        })

        this.obstaculosDisappear()
        this.collisionPollitoGround()
        this.collisionPollitoObstaculos()

        if (this.isGameOn) {
            requestAnimationFrame(this.gameLoop)
        }
    }
}