


const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const submit = document.querySelector('#submit')
const result = document.querySelector('#result')
let operator = '+'


plus.addEventListener('click', () => {
    operator = '+'
})

minus.addEventListener('click', () => {
    operator = '-'
})


submit.addEventListener('click', function() {
       let num1 = parseFloat(input1.value)
       let num2 = parseFloat(input2.value)

     if (isNaN(num1) || isNaN(num2)) {
          result.textContent = 'Введите число!'
          result.style.color = 'red'
          return
     }

     result.textContent =  operator === '+' ? num1 + num2 
     : num1 - num2
      color()   
})


function color() {
    result.textContent > 0 ? result.style.color = 'red' 
    : result.style.color = 'blue'
}











