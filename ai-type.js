// AI-assisted code: element selection, functions, and event listeners.

const previewText = document.getElementById("preview-text");
const wordInput = document.getElementById("word-input");
const spacingSlider = document.getElementById("spacing-slider");
const colorPicker = document.getElementById("color-picker");

function changeWord() {
  previewText.textContent = wordInput.value;
}

function changeSpacing() {
  previewText.style.letterSpacing = spacingSlider.value + "px";
}

function changeColor() {
  previewText.style.color = colorPicker.value;
}

wordInput.addEventListener("input", changeWord);
spacingSlider.addEventListener("input", changeSpacing);
colorPicker.addEventListener("input", changeColor);