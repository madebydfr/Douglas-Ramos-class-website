const slider = document.getElementById("spacing-slider");
const previewText = document.getElementById("preview-text");

function changeSpacing() {
    previewText.style.letterSpacing = slider.value + "px";
}

slider.addEventListener("input", changeSpacing);