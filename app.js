window.onload=function(){

  const calculator = {
    screenValue: '0',
    firstNum: null,
    waitingForSecondNum: false,
    operator: null,
  };

  const btns = document.querySelector('.buttons');
  
  let inputNum = (num) => {
    const { screenValue, waitingForSecondNum } = calculator;
  
    if (waitingForSecondNum === true) {
      calculator.screenValue = num;
      calculator.waitingForSecondNum = false;
    } else {
      calculator.screenValue = screenValue === '0' ? num : screenValue + num;
    }
  }
  
  let inputDecimal = (dot) => {
    if (calculator.waitingForSecondNum === true) {
        calculator.screenValue = "0."
      calculator.waitingForSecondNum = false;
      return
    }
  
    if (!calculator.screenValue.includes(dot)) {
      calculator.screenValue += dot;
    }
  }

  let evaluate = (firstNum, SecondNum, operator) => {
    if (operator === '+') {
      return firstNum + SecondNum;
    } else if (operator === '-') {
      return firstNum - SecondNum;
    } else if (operator === '*') {
      return firstNum * SecondNum;
    } else if (operator === '/') {
      return firstNum / SecondNum;
    }
    return SecondNum;
  }
  
  //       ******* losely taken from stack overflow *****
  //       ******* function to chain operators and automatically evaluate without hitting = *******

  let handleOperator = (nextOperator) => {
    const { firstNum, screenValue, operator } = calculator
    const inputValue = parseFloat(screenValue);
    
    if (operator && calculator.waitingForSecondNum)  {
      calculator.operator = nextOperator;
      return;
    }
    if (firstNum == null && !isNaN(inputValue)) {
      calculator.firstNum = inputValue;
    } else if (operator) {
      const result = evaluate(firstNum, inputValue, operator);
  
      calculator.screenValue = `${parseFloat(result.toFixed(4))}`;
      calculator.firstNum = result;
    }
  
    calculator.waitingForSecondNum = true;
    calculator.operator = nextOperator;
  }
  
  let resetCalculator = () => {
    calculator.screenValue = '0';
    calculator.firstNum = null;
    calculator.waitingForSecondNum = false;
    calculator.operator = null;
  }
  
  let updateScreen = () => {
    const screen = document.querySelector('.screen');
    screen.value = calculator.screenValue;
  }
  
  updateScreen();
  
  btns.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;
    if (!target.matches('button')) {
      return;
    }
  
    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
      case '=':
        handleOperator(value);
        break;
      case '.':
        inputDecimal(value);
        break;
      case 'clear':
        resetCalculator();
        break;
      default:
        if (Number.isInteger(parseFloat(value))) {
          inputNum(value);
        }
    }
    updateScreen();
  });
}