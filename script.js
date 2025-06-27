const display = document.querySelector('.display');

function appendValue(val) {
    display.value += val.replace('*', 'x');
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        const result = eval(display.value.replace(/x/g, '*'));
        display.value = result;
    } catch (error) {
        display.value = 'Error'
    }
}

function backSpace() {
    display.value = display.value.slice(0, -1);
}