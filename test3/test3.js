const generateNumber = document.querySelector('#generatenum input');
const guessNumber = document.querySelector('#guessnum input');
const numberBtn = document.querySelector('button');
const ychoose = document.querySelector('.choose');
const winLost = document.querySelector('#winlost');

function handlenum(event) {
  event.preventDefault();
  const gnvalue = generateNumber.value;
  const gsvalue = guessNumber.value;
  console.log(typeof(gsvalue));
  const randomnum = Math.ceil(Math.random() * gnvalue);

  ychoose.innerHTML = `You chose: ${gsvalue}, the machine chose: ${randomnum} `;
  if (gsvalue == randomnum) {
    winLost.innerHTML = 'You won!';
  } else {
    winLost.innerHTML = 'You lost!';
  }
}

numberBtn.addEventListener('click', handlenum);
