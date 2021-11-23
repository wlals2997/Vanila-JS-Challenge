const wholeNumber = document.querySelector("#whole-number input");
console.log(wholeNumber)
const yourInput = document.querySelector("#your-number guess");
const yourButton = document.querySelector("#your-number button");
const resultNumber = document.querySelector("#result-num");
const resultCondition = document.querySelector("#result-con");
const HIDDEN_CLASSNAME = "hidden";
function numberSubmit(event) {
    event.preventDefault()
    const yourNumber = wholeNumber.value
    console.log(yourNumber)
    // const machineNumber = Math.ceil(Math.random()* yourNumber)
  
    // localStorage.setItem("number",machineNumber)
    // resultNumber.innerText = `You chose: ${yourNumber} , the machine chose: ${machineNumber}.`
    // resultNumber.classList.remove(HIDDEN_CLASSNAME)
    // if (yourNumber == machineNumber) {
    //     resultCondition.innerText = "You won!"
    //  } else (yourNumber != machineNumber); {
    //      resultCondition.innerText = "You lost!"
    //  }
    //  resultCondition.classList.remove(HIDDEN_CLASSNAME);
}
yourButton.addEventListener("click", numberSubmit);
// const savedNumber = localStorage.getItem("number");