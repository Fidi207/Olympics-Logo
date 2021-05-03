console.log("hello")
canvas = document.getElementById("Mycanvas");
ctx = canvas.getContext("2d");
colour = "blue";

ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 1;
ctx.rect(50, 30, 200, 70);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 1;
ctx.arc(115, 60, 15, 0, 2*Math.PI);
ctx.stroke();

colour = "black";
ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 1;
ctx.arc(150, 60, 15, 0, 2*Math.PI);
ctx.stroke();

colour = "red";
ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 1;
ctx.arc(185, 60, 15, 0, 2*Math.PI);
ctx.stroke();

colour = "yellow";
ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 1;
ctx.arc(132.5, 75, 15, 0, 2*Math.PI);
ctx.stroke();

colour = "green";
ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 1;
ctx.arc(167.5, 75, 15, 0, 2*Math.PI);
ctx.stroke();