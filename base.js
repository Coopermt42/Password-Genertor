const display = document.getElementById('display');

function showOnDisplay(letter) {
    display.value += letter;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    display.value = eval(display.value);
}

function backspace() {
    display.value = display.value.slice(0, -1);
}