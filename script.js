const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

brush()

function brush() {
  canvas.onmousedown = (e) => {
    context.beginPath();
    context.moveTo(
      e.clientX,
      e.clientY,
    );
    window.onmousemove = (e) => {
      context.strokeStyle = "white";
      context.lineTo(
        e.clientX,
        e.clientY,
      );
      context.stroke();
    };
  };
}

window.onmouseup = (e) => {
  window.onmousemove = null;
};
