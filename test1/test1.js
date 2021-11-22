const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector('h2');
const superEventHandler = {
  handleMouseOn: function () {
    title.innerHTML = 'The mouse is here!';
    title.style.color = colors[0];
  },
  handleMouseLeave: function () {
    title.innerHTML = 'The mouse is gone!';
    title.style.color = colors[1];
  },
  handleViewSize: function () {
    title.innerHTML = 'You just resized!';
    title.style.color = colors[2];
  },
  handleContextMenu: function (){
  title.innerHTML="That was a right click!"
  title.style.color = colors[4];
  }

};
title.addEventListener('mouseenter', superEventHandler.handleMouseOn);
title.addEventListener('mouseleave', superEventHandler. handleMouseLeave);
window.addEventListener('resize', superEventHandler. handleViewSize);
window.addEventListener('contextmenu', superEventHandler. handleContextMenu);
