const wholeNumber = document.querySelector("#whole-number whole");
const yourInput = document.querySelector("#your-number guess");
const yourButton = document.querySelector("#your-number button");
const resultNumber = document.querySelector("#result-num");
const resultCondition = document.querySelector("#result-con");
const result=document.querySelector('#result')
const HIDDEN_CLASSNAME = "hidden";
function numberSubmit(event) {
    const numberRange = whole.value
    const yourNumber = guess.value
    const machineNumber = Math.ceil(Math.random()* numberRange)
     console.log(typeof(yourNumber))
     console.log(typeof(numberRange))
    event.preventDefault()
    localStorage.setItem("number",machineNumber)
    result.innerText = `You chose: ${yourNumber} , the machine chose: ${machineNumber}.`
    
    if (yourNumber == machineNumber) {
        resultNumber.classList.remove(HIDDEN_CLASSNAME)
        resultCondition.classList.add(HIDDEN_CLASSNAME)
        resultNumber.innerHTML = 'You won!';
      } else {
        resultNumber.classList.add(HIDDEN_CLASSNAME)
        resultCondition.classList.remove(HIDDEN_CLASSNAME);
        resultCondition.innerHTML = 'You Lost!';
      }
    }
yourButton.addEventListener("click", numberSubmit);
