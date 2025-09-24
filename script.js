let cube = document.getElementById("cube");
let angle = 0;

window.addEventListener("wheel", function(event) {
  if (event.deltaY > 0) {
    angle += 90; // Scroll down → rotate
  } else {
    angle -= 90; // Scroll up → rotate opposite
  }
  cube.style.transform = `rotateY(${angle}deg) rotateX(${angle/2}deg)`;
});
