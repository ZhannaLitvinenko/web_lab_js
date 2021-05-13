let actor;
let currentX;
let currentY;
let canBeMoved;

window.onload = function () {
    actor = document.getElementById('actor')
    currentX = 0;
    currentY = 0;
    canBeMoved = true;

    performMoves()
}

function performMoves() {
    const screen = window.screen

    const timer = setInterval(function () {
        if (canBeMoved) {
            updateXY()

            if (currentX < 0) currentX = 0;
            if (currentX > screen.width) currentX = screen.width;

            if (currentX >= 0 && currentX <= screen.width)
                actor.style.left = currentX + "px"

            if (currentY < 0) currentY = 0;
            if (currentY > screen.height) currentY = screen.height;

            if (currentY >= 0 && currentY <= screen.height)
                actor.style.top = currentY + "px"
        } else{
            clearInterval(timer)
            actor.style.backgroundColor = "#ff0000"
        }
    }, 200)
}

function updateXY() {
    const min = -15
    const max = 15

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const nextX = getRandomNumber(min, max);
    const nextY = getRandomNumber(min, max);

    currentX += nextX;
    currentY += nextY;

    console.log("X " + currentX + " Y " + currentY)
}