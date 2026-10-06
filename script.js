const button = document.querySelector("#button");
const message = document.querySelector("#message");
const image = document.querySelector("#douglas-image");
const background = document.body;

function changeMessage() {
    message.textContent = "You clicked the button!";
    message.style.color = "white";
    button.style.backgroundColor = "white";
    image.style.display = "none";
    background.style.backgroundColor = " #60231e";

}

button.addEventListener("click", changeMessage);


