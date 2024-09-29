let snake = document.getElementById("snake");
let posX = 70
snake.style.left = posX + "px";

function changeX(){
    posX += 35
    return snake.style.left = posX + "px";
}

setInterval(changeX, 300)