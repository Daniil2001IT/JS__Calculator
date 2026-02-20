const container = document.querySelector("#container");

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");

const clear = document.querySelector("#clear");
const result = document.querySelector("#result");

const unaryOps = ["square", "sqrt"];
const binaryOps = ["+", "-", "*", "/", "%", "degree"];

let a = null;


function funKey(event) {
 if (event.key === 'Enter') {
  funCalculations();
 };
}

input1.addEventListener("keydown", funKey);
input2.addEventListener("keydown", funKey);

input1.addEventListener("input",  funCalculations);
input2.addEventListener("input",  funCalculations);

function funClear() {
  input1.value = "";
  input2.value = "";
  result.textContent = "пока пусто";
  a = null;
}

clear.addEventListener("click", function () {
  funClear();
});

container.addEventListener("click", function (event) {
  const button = event.target.closest("button");
  if (!button) return;
  let action = button.dataset.action;
  if (action) {
    a = action;
    funCalculations();
  }
});

  let operations = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => {
      if (y === 0) throw new Error("На 0 делить нельзя!");
      return x / y;
    },
    "%": (x, y) => {
        if(y === 0)  throw new Error("На 0 делить нельзя!");
        return ((x / y) * 100).toFixed(2) + '%'  
    }, 
    square: (x) => x ** 2,
    degree: (x, y) => x ** y,
    sqrt: (x) => {
        if(x < 0) throw new Error('Корень из отрицательного числа!') 
        return Math.sqrt(x);
    },
  };

function funCalculations() {
  let operation = operations[a];
  if (!operation) {
    result.textContent = "Выберите действие!";
    return;
  }

  if (unaryOps.includes(a) && input1.value.trim() === '') {
      result.textContent = "Введите число для 1 поля!";
      return
    }

  if (binaryOps.includes(a) && (input1.value.trim() === '' || input2.value.trim() === '')) {
      result.textContent = "Введите оба числа!";
      return
    }

  let currentValue;

  let valueInput1 = +input1.value;
  let valueInput2 = +input2.value;


  try {
    if(unaryOps.includes(a)) {
      currentValue = operation(valueInput1);
    }else {
      currentValue = operation(valueInput1, valueInput2);
    }
    if(typeof currentValue === 'string') {
      result.textContent = currentValue;
    }else {
      result.textContent = Number.isInteger(currentValue) ? currentValue : currentValue.toFixed(2);
    }
    
  } catch (error) {
      result.textContent = error.message;
  }
}




