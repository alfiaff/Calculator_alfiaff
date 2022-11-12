const currentDisplay = document.getElementById('current-number');
const previousDisplay = document.getElementById('previous-number');
const buttons = document.querySelectorAll('button');


function Calculator() {
     this.currenNumber = 0
     this.previousNumber = ''
     
     this.input = function(digit) {
       if (this.currenNumber === 0) {
          this.currenNumber = digit
       } else {
         this.currenNumber += digit
       }
     }
     
     this.decimal = function(d) {
       this.currenNumber += d
       if (this.currenNumber.includes('.')) {
         buttons[16].setAttribute('disabled', true)
       }
       
     }
     
     this.operators = function(o) {
       this.operator = o
       this.previousNumber = this.currenNumber
       previousDisplay.innerText = this.previousNumber + this.operator
       this.currenNumber = 0
       
      if (this.previousNumber.includes('.')) {
         buttons[16].removeAttribute('disabled', true)
          return
       } 
        
      
     }
     
     this.clearAll = function() {
       this.currenNumber = 0
       this.previousNumber = ''
       this.operator = ''
       previousDisplay.innerText = ''
     
       buttons[16].removeAttribute('disabled', true)
     }
     
     this.remove = function() {
       this.currenNumber = this.currenNumber.slice(0, -1)
       
       if(this.currenNumber == '') {
         this.currenNumber = 0
       }
       
         
       
     }
     
     this.calculation = function() {
       let result;
       let currentNum = parseFloat(this.currenNumber)
       let previousNum = parseFloat(this.previousNumber)
       
       
       if (this.operator == '+') {
         result = currentNum + previousNum
          this.currenNumber = result.toString()
          previousDisplay.innerText = ''
       }
       
       if (this.operator == '-') {
         result = previousNum - currentNum
          this.currenNumber = result.toString()
          previousDisplay.innerText = ''
         
       }
       
       if (this.operator == '×') {
         result = currentNum * previousNum
          this.currenNumber = result.toString()
          previousDisplay.innerText = ''
         
       }
       
       if (this.operator == '÷') {
         result = previousNum / currentNum
          this.currenNumber = result.toString()
          previousDisplay.innerText = ''
         
       }
       
       
       
       if(result != '') {
          this.previousNumber = 0
       }
         
       
         
       
     }
    
     
     this.updateDisplay = function() {
       currentDisplay.innerText = this.currenNumber
     }
     
}

const cal = new Calculator()

buttons.forEach(btn => btn.addEventListener('click', (e) => {
  const target = e.target
  
  if (target.classList.contains('number')) {
    cal.input(target.innerText)
    cal.updateDisplay()
  }
  if (target.classList.contains('operator')) {
    cal.operators(target.innerText)
    cal.updateDisplay()
  }
  
  if (target.classList.contains('decimal')) {
    cal.decimal(target.innerText)
    cal.updateDisplay()
  }
  
  if (target.classList.contains('equals')) {
    cal.calculation()
    cal.updateDisplay()
  }
  
  if (target.classList.contains('all-clear-btn')) {
    cal.clearAll()
    cal.updateDisplay()
    
  }
  
  if (target.classList.contains('delete-btn')) {
    cal.remove()
    cal.updateDisplay()
  }
  
}))


