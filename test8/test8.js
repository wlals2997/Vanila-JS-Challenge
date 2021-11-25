const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

  const click_btn=document.querySelector('#color')

function handlebg(){
    const color1=colors[Math.floor(Math.random() * colors.length)];
    const color2=colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundImage =`linear-gradient(${color1},${color2})`
    
}


click_btn.addEventListener("click",handlebg);