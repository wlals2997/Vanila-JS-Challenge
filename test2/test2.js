const body = document.querySelector("body");

window.onresize = function () {
  const innerWidtn = window.innerWidth;
  if (innerWidtn <= 700) {
    body.style.backgroundColor = "blue";
  } else if (innerWidtn > 700 && innerWidtn <= 1000) {
    body.style.backgroundColor = "purple";
  } else {
    body.style.backgroundColor = "yellow";
  }
};
