const dDay = document.querySelector('.date');

function xmasDay() {
  const xmas = new Date('2021,12,25 00:00:00');
  const date = new Date();

  const dday = xmas - date;

  const nowDay = Math.floor(dday / 1000 / 60 / 60 / 24);
  const nowHours = String(Math.floor(dday / 1000 / 60 / 60) % 24).padStart(2,'0');
  const nowMinutes = String(Math.floor((dday / 1000 / 60) % 60)).padStart(2,'0');
  const nowSeconds = String(Math.floor((dday / 1000) % 60)).padStart(2, '0');

  

  dDay.innerHTML=`${nowDay}d ${nowHours}h ${nowMinutes}m ${nowSeconds}s`
}

xmasDay();
setInterval(xmasDay, 1000);
