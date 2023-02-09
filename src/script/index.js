const j = document.getElementById("j");
j.innerHTML = "d";

const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 2;

// Wall
ctx.strokeRect(75, 140, 150, 110);

// Door
ctx.fillRect(130, 190, 40, 60);

// Roof
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.lineTo(60, 150);
ctx.lineTo(150, 40);
ctx.lineTo(183, 150);
ctx.lineTo(60, 150);
ctx.stroke();

draw();
