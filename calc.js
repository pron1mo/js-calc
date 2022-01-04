const   buttons = document.querySelectorAll('[data-button]'),
        submit = document.querySelector('[data-button-calc]')
        inputString = document.querySelector('#inputted')
        clear = document.querySelector('[data-button-clear]')
        clearAll = document.querySelector('[data-button-clear-all]')
        specialCharacter  = ['*', '/', '+', '-'];


const calculateString = () => {
    inputString.innerHTML = new Function('return ' + inputString.innerHTML)();
}

const addToString = (input) => {
    if (inputString.innerHTML === '0') {
        switch (input){
            case '-':
                inputString.innerHTML = input
                break
            case '*':
            case '/':
            case '+':
                inputString.innerHTML = '0'
                break;
            default:
                inputString.innerHTML = input
        }
    }
    else if (specialCharacter.includes(inputString.innerHTML.slice(-1)) && specialCharacter.includes(input)){}
    else inputString.innerHTML += input
}
const removeLast = () => {
    if (inputString.innerHTML !== '0'){
        let string = inputString.innerHTML.slice(0, inputString.innerHTML.length - 1)
        if (string.length === 0){
            inputString.innerHTML = '0'
        } else inputString.innerHTML = string
    }
}

buttons.forEach(el => el.addEventListener('click', (event) => {
    addToString(event.target.dataset.inputValue)
}))
submit.addEventListener('click', calculateString)
clear.addEventListener('click', removeLast)
clearAll.addEventListener('click', () => {inputString.innerHTML = '0'})


const inputKeys = {
    'Numpad1': '1',
    'Numpad2': '2',
    'Numpad3': '3',
    'Numpad4': '4',
    'Numpad5': '5',
    'Numpad6': '6',
    'Numpad7': '7',
    'Numpad8': '8',
    'Numpad9': '9',
    'NumpadDivide': '/',
    'NumpadMultiply': '*',
    'NumpadSubtract': '-',
    'NumpadAdd': '+',
    'Digit1': '1',
    'Digit2': '2',
    'Digit3': '3',
    'Digit4': '4',
    'Digit5': '5',
    'Digit6': '6',
    'Digit7': '7',
    'Digit8': '8',
    'Digit9': '9',
    'Backspace': removeLast,
    'NumpadEnter': calculateString,
    'Enter': calculateString,
    'Delete': () => {inputString.innerHTML = '0'}
};

document.addEventListener('keydown', (event) => {
    if (inputKeys.hasOwnProperty(event.code)){
        if (typeof inputKeys[event.code] === "function") inputKeys[event.code]()
        else addToString(inputKeys[event.code])
    }
})
