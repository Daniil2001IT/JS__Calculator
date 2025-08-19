


const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const submit = document.getElementById('submit')
const result = document.getElementById('result')

let asad = plus




plus.onclick = () => {
    asad = plus
}

minus.onclick = () => {
    asad = minus
}


submit.onclick = () => {
    let inputValue1 = Number(input1.value.trim())
    let inputValue2 = Number(input2.value.trim())
    if (inputValue1 == '' || inputValue2 == '') {
        result.textContent = 'Введите Число!'
        return
    }

    if (isNaN(inputValue1) || isNaN(inputValue2)) {
        result.textContent = 'Необходимо Ввести Число'
        return
    }

    let a
    if (asad === plus) {
        a = inputValue1 + inputValue2
        result.textContent = a
    } else {
        a = inputValue1 - inputValue2
        result.textContent = a
    }
    color(a)

    input1.value = ''
    input2.value = ''


}


function color(value) {
    result.style.color = value > 10 ? 'red' : 'blue'
}










