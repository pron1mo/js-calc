const   buttons = document.querySelectorAll('[data-button]'),
        submit = document.querySelector('[data-button-calc]')
        inputString = document.querySelector('#inputted')
        clear = document.querySelector('[data-button-clear]')
        clearAll = document.querySelector('[data-button-clear-all]');

const calculateString = () => {
    inputString.innerHTML = new Function('return ' + inputString.innerHTML)();
}

const addToString = (input) => {
    if (inputString.innerHTML === '0') inputString.innerHTML = input
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
