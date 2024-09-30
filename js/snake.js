let snake = document.getElementById("snake");
let snakeBoard = document.getElementById("snakeBoard")
let posX = 0;
let posY = 0;
let direction = "right";
var speed = "slow";
var speedVal = 200;
let speeds = document.getElementById("speeds");
var snakeSize = 5;


const foodPos = [0, 35, 70, 105, 140, 175, 210, 245, 280, 315, 350, 385, 420, 455, 490, 525, 560, 595, 630, 665, 700]

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

// movement of the snake
function moveSnakeBody() {
    for(let i = snakeSize - 1 ; i > 0 ; i--){
        const previousBody = document.getElementById(`body${i - 1}`);
        const thisBody = document.getElementById(`body${i}`);
        thisBody.style.left = previousBody.style.left;
        thisBody.style.top = previousBody.style.top;
    };
    document.getElementById(`body0`).style.left = posX + "px";
    document.getElementById(`body0`).style.top = posY + "px";
};



function placeFood(){
    var foodSection = document.getElementById("food");
    foodSection.style.left = foodPos[Math.floor(Math.random() * foodPos.length)] + "px";
    foodSection.style.top = foodPos[Math.floor(Math.random() * foodPos.length)] + "px";
}

placeFood();

function CheckEatFood(){
    // if() {
    //     snakeSize = 5;
    //     createSnakeBody();
    //     placeFood();
    // }
}


// stop game
function endGame(){
    clearInterval(Interval);
}


function CheckIfKillSelf() {
    const headX = posX;
    const headY = posY;

    for (let i = 1; i < snakeSize; i++) { // Start from 1 since body0 is the head
        const bodyPart = document.getElementById(`body${i}`);
        const bodyX = extractNum(bodyPart.style.left);
        const bodyY = extractNum(bodyPart.style.top);

        // Check if head coordinates match any body part coordinates
        if (headX === bodyX && headY === bodyY) {
            endGame(); // End game if snake collides with itself
            break;
        }
    }
}



function changePos(){
    checkDirection();

    if(posX < 0 || posX + 35 > 700 || posY < 0 || posY + 35 > 700){
        endGame();
    } else {
        moveSnakeBody();
        CheckIfKillSelf();
    }
}

const Interval = setInterval(changePos, speedVal);



function extractNum(str) {
    return parseInt(str.replace("px", ""));
}