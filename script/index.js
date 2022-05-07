const rowOne = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const rowTwo = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', "/", 'Del'];
const rowThree = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
const rowFour = ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Up", "Shift"];
const rowFive = ["Ctrl", "Win", "Alt", "Space", "Alt", "Left", "Down", "Right", "Ctrl"];
const body = document.querySelector('body');

function addContainer() {
    const container = document.createElement('div');
    container.classList.add('container');
    body.append(container);

    const title = document.createElement('p');
    title.classList.add('title');
    container.append(title);

    const form = document.createElement('textarea');
    form.classList.add('textarea');
    form.id = 'textarea';
    form.rows = '5';
    form.cols = '50';
    container.append(form);

    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    keyboard.id = 'keyboard'
    container.append(keyboard);

    const descript = document.createElement('p');
    descript.classList.add('descript');
    container.append(descript);

    const lang = document.createElement('p');
    lang.classList.add('lang');
    container.append(lang);
}

addContainer();