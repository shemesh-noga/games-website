let snake = document.getElementById("snake");
let snakeBoard = document.getElementById("snakeBoard")
let posX = 0;
let posY = 0;
let direction = "down";
var speed = "slow";
var speedVal = 550;
let speeds = document.getElementById("speeds");
let snakeSize = 3;

function createSnakeBody(){
    for(let j = 0 ; j < snakeSize ; j++){
        const div = `<div id="body${j}"></div>`;
        snakeBoard.innerHTML += div;
    }
}

createSnakeBody();

document.getElementById("body0").style.backgroundColor = "#ad4aad"

// speeds.addEventListener("click", () => {
//     speeds.addEventListener("change", () => {
//       changeSpeed();
//     });
// });

// function changeSpeed() {
//     var speed = document.getElementById("speeds").value;
//     if (speed == "slow") {speedVal = 550}
//     if (speed == "medium") {speedVal = 300}
//     if (speed == "hard") {speedVal = 200}
//     if (speed == "mega") {speedVal = 50}
//     return speedVal;
// }



addEventListener("keydown", (e) => {
    if (e.key == "ArrowRight") {
        direction = "right"
    }
    if (e.key == "ArrowLeft") {
        direction = "left"
    }
    if (e.key == "ArrowUp") {
        direction = "up"
    }
    if (e.key == "ArrowDown") {
        direction = "down"
    }
})


function checkDirection() {
    if (direction === "right") {
        posX += 35
    }
    if (direction === "left") {
        posX -= 35
    }
    if (direction === "up") {
        posY -= 35
    }
    if (direction === "down") {
        posY += 35
    }
}



function changePos(){
    checkDirection();
    document.getElementById("body0").style.left = posX + "px";
    document.getElementById("body0").style.top = posY + "px";
}

setInterval(changePos, speedVal);

