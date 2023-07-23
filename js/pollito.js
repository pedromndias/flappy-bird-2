// console.log("testing");

class Pollito {
    constructor() {
        // console.log(("Testing creating pollito"));

        // Create the element in the DOM:
        this.node = document.createElement("img")
        this.node.src = "./images/flappy.png"
        gameBoxNode.append(this.node)

        // Pollito's properties:
        this.x = 50;
        this.y = 50;
        this.w = 40;
        this.h = 35;

        this.gravitySpeed = 2;
        this.jumpSpeed = 40;

        // Adjust pollito's size and initial position:
        this.node.style.width = `${this.w}px`
        this.node.style.height = `${this.h}px`
        this.node.style.position = "absolute"
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`


    }

    // pollito's methods:
    gravityEffect = () => {
        this.y += this.gravitySpeed;
        // console.log(this.y);
        this.positionUpdate()
    }

    jumpEffect = () => {
        this.y -= this.jumpSpeed;
        this.positionUpdate()
    }

    positionUpdate = () => {
        this.node.style.top = `${this.y}px`
    }
}