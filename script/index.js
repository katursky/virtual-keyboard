const rowKeyOne = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"];
const rowKeyTwo = ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "/", "Del"];
const rowKeyThree = ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"];
const rowKeyFour = ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Up", "Shift"];
const rowKeyFive = ["Ctrl", "Win", "Alt", "Space", "Alt", "Left", "Down", "Right", "Ctrl"];
const body = document.querySelector("body");

/* CONTAINER FOR KEYBAORD ADD*/

function addContainer() {
    const container = document.createElement("div");
    container.classList.add("container");
    body.append(container);

    const title = document.createElement("p");
    title.classList.add("title");
    title.innerHTML = 'RSS Virtual Keyboard';
    container.append(title);

    const form = document.createElement("textarea");
    form.classList.add("textarea");
    form.id = "textarea";
    form.rows = "5";
    form.cols = "50";
    container.append(form);

    const keyboard = document.createElement("div");
    keyboard.classList.add("keyboard");
    keyboard.id = "keyboard";
    container.append(keyboard);

    const descript = document.createElement("p");
    descript.classList.add("descript");
    descript.innerHTML = 'Клавиатура создана в операционной системе Windows';
    container.append(descript);

    const lang = document.createElement("p");
    lang.classList.add("lang");
    lang.innerHTML = 'Комбинация клавиш для переключения языка:';
    container.append(lang);

    const rows = ["keyboard-row-1", "keyboard-row-2", "keyboard-row-3", "keyboard-row-4", "keyboard-row-5"]

    for (let item of rows) {
        const keyboardRow = document.createElement("div");
        keyboardRow.classList.add(`${item}`);
        keyboardRow.id = 'keyboard-row';
        keyboard.append(keyboardRow);
    }
}

addContainer();

/* KEYBOARD ADD */

const rowOne = document.querySelector(".keyboard-row-1");
const rowTwo = document.querySelector(".keyboard-row-2");
const rowThree = document.querySelector(".keyboard-row-3");
const rowFour = document.querySelector(".keyboard-row-4");
const rowFive = document.querySelector(".keyboard-row-5");

function addKeyboard() {
    for (let item of rowKeyOne) {   
        const key = document.createElement("div");
        key.classList.add("key");
        key.id = `key${item}`;
        key.innerHTML = `${item}`;
        key.dataset.i18 = `${item}`;
        rowOne.append(key);
    };


    for (let item of rowKeyTwo) {   
        const key = document.createElement("div");
        key.classList.add("key");
        key.id = `key${item}`;
        key.innerHTML = `${item}`;
        key.dataset.i18 = `${item}`;
        rowTwo.append(key);
    };

    for (let item of rowKeyThree) {   
        const key = document.createElement("div");
        key.classList.add("key");
        key.id = `key${item}`;
        key.innerHTML = `${item}`;
        key.dataset.i18 = `${item}`;
        rowThree.append(key);
    };

    for (let item of rowKeyFour) {   
        const key = document.createElement("div");
        key.classList.add("key");
        key.id = `key${item}`;
        key.innerHTML = `${item}`;
        key.dataset.i18 = `${item}`;
        rowFour.append(key);
    };

    for (let item of rowKeyFive) {   
        const key = document.createElement("div");
        key.classList.add("key");
        key.id = `key${item}`;
        key.innerHTML = `${item}`;
        key.dataset.i18 = `${item}`;
        rowFive.append(key);
    };
}

addKeyboard();


const allKeys = document.querySelectorAll('.key');

allKeys.forEach((item) => {
    item.addEventListener('mousedown', () => {
        item.classList.add('active');
    })

    item.addEventListener('mouseup', () => {
        item.classList.remove('active');
    })
})