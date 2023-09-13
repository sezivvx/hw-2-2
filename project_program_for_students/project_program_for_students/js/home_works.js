// task-2
var intervalId;
var seconds = 0;
var isRunning = false;

function startTimer() {
    if (!isRunning) {
        intervalId = setInterval(incrementSeconds, 1000);
        isRunning = true;
    }
}

function stopTimer() {
    clearInterval(intervalId);
    isRunning = false;
}

function resetTimer() {
    clearInterval(intervalId);
    seconds = 0;
    isRunning = false;
    document.getElementById("secondsS").textContent = seconds;
}

function incrementSeconds() {
    seconds++;
    document.getElementById("secondsS").textContent = seconds;
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer)

//task-1

var parentBlock = document.querySelector('.parent_block');
var childBlock = document.querySelector('.child_block');
var parentWidth = parentBlock.clientWidth;
var parentHeight = parentBlock.clientHeight;
var childWidth = childBlock.clientWidth;
var childHeight = childBlock.clientHeight;
var maxX = parentWidth - childWidth;
var maxY = parentHeight - childHeight;
var directionX = 1;
var directionY = 0;
var speedX = 2;
var speedY = 2;

function moveSquare() {
    var currentX = parseInt(childBlock.style.left) || 0;
    var currentY = parseInt(childBlock.style.top) || 0;

    if (currentX >= maxX && directionX === 1) {
        directionX = 0;
        directionY = 1;
    } else if (currentY >= maxY && directionY === 1) {
        directionX = -1;
        directionY = 0;
    } else if (currentX <= 0 && directionX === -1) {
        directionX = 0;
        directionY = -1;
    } else if (currentY <= 0 && directionY === -1) {
        directionX = 1;
        directionY = 0;
    }

    var newX = currentX + directionX * speedX;
    var newY = currentY + directionY * speedY;

    childBlock.style.left = newX + 'px';
    childBlock.style.top = newY + 'px';

    requestAnimationFrame(moveSquare);
}

moveSquare();