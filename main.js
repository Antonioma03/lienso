var mouseEvent="basio";
var posisionx,posisiony;
canvas=document.getElementById("lienzo");
dibujo=canvas.getContext("2d");
color="black";
ancho=1;


function my_mousedown(e)
{
    color=document.getElementById("color").value;
    ancho=document.getElementById("ancho").value;
mouseEvent="mouseDown";
}
function my_mousemove(e)
{
    posisionmousex=e.clientX-canvas.offsetLeft;
    posisionmousey=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown")
    {
        dibujo.beginPath();
        dibujo.strokeStyle=color;
        dibujo.lineWidth=ancho;
        dibujo.moveTo(posisionx,posisiony);
        dibujo.lineTo(posisionmousex, posisionmousey);
        dibujo.stroke();
    }
    posisionx = posisionmousex;
    posisiony = posisionmousey;

}
function my_mouseup(e)
{
    mouseEvent="mouseup";
}

function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup);
canvas.addEventListener("mouseleave",my_mouseleave);
canvas.addEventListener("mousemove",my_mousemove);
canvas.addEventListener("mousedown",my_mousedown);
function limpiar(){
    dibujo.clearRect(0, 0, dibujo.canvas.width, dibujo.canvas.height);
}


