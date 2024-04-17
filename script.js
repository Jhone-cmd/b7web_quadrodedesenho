//Initials Data

let currentColor = "black";
let screen = document.querySelector("#tela");
let context = screen.getContext("2d");
let canDraw = false;

let mouseX = 0;
let mouseY = 0;

//Events

document.querySelectorAll(".color").forEach(item => {
    item.addEventListener("click", colorClickEvent);
});

screen.addEventListener("mousedown", mouseDownEvent);
screen.addEventListener("mousemove", mouseMoveEvent);
screen.addEventListener("mouseup", mouseUpEvent);

document.querySelector(".clear").addEventListener("click", clearBoard);

// Functions

function colorClickEvent(event) {
    let color = event.target.getAttribute("data-color");
    currentColor = color;

    document.querySelector(".color.active").classList.remove("active");
    event.target.classList.add("active");
}

function mouseDownEvent(event) {
    canDraw = true;
    mouseX = event.pageX - screen.offsetLeft;
    mouseY = event.pageY - screen.offsetTop;
}

function mouseMoveEvent(event) {
    if (canDraw) {
        draw(event.pageX, event.pageY)
    }

}

function mouseUpEvent() {
    canDraw = false;
}

function draw(pageX, pageY) {
    let pointX = pageX - screen.offsetLeft;
    let pointY = pageY - screen.offsetTop;

    // Desenhar
    context.beginPath();
    context.lineWidth = 5;
    context.lineJoin = "round";
    context.moveTo(mouseX, mouseY);
    context.lineTo(pointX, pointY);
    context.closePath();
    context.strokeStyle = currentColor;
    context.stroke();

    mouseX = pointX;
    mouseY = pointY;
}

function clearBoard() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}