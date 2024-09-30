let snake = document.getElementById("snake");
let snakeBoard = document.getElementById("snakeBoard")
let posX = 0;
let posY = 0;
let direction = "right";
var speed = "slow";
var speedVal = 550;
let speeds = document.getElementById("speeds");
let snakeSize = 6;

// create number of divs as the number of the snake body
function createSnakeBody(){
    for(let j = snakeSize -1 ; j >= 0 ; j--){
        const div = `<div id="body${j}"></div>`;
        snakeBoard.innerHTML += div;
        if (j==0){document.getElementById("body0").style.backgroundColor = "#ad4aad"}
    }
}

createSnakeBody();


addEventListener("keydown", (e) => {
    if (e.key == "ArrowRight") {direction = "right"}
    if (e.key == "ArrowLeft") {direction = "left"}
    if (e.key == "ArrowUp") {direction = "up"}
    if (e.key == "ArrowDown") {direction = "down"}
});


function checkDirection() {
    if (direction === "right") {posX += 35}
    if (direction === "left") {posX -= 35}
    if (direction === "up") {posY -= 35}
    if (direction === "down") {posY += 35}
}


function moveSnakeBody() {
    for(let i = snakeSize - 1 ; i > 0 ; i--){
        const previousBody = document.getElementById(`body${i - 1}`);
        const thisBody = document.getElementById(`body${i}`);
        console.log(previousBody.style.left);
        console.log(previousBody.style.top);
        thisBody.style.left = previousBody.style.left;
        thisBody.style.top = previousBody.style.top;
    };
    document.getElementById(`body0`).style.left = posX + "px";
    document.getElementById(`body0`).style.top = posY + "px";
};

function endGame(){
    clearInterval(Interval)
}


function changePos(){
    checkDirection();

    if(posX < 0 || posX + 35 > 700 || posY < 0 || posY + 35 > 700){
        endGame();
    }

    moveSnakeBody();
}

const Interval = setInterval(changePos, speedVal);

