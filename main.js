var contenedor=document.getElementById('contenedor');
document.addEventListener("keydown",moverSerpiente);

function moverSerpiente(event){
  var serpiente=document.getElementById('cabezaSerpiente');
  var tecla = event.keyCode;
  var posicionY= serpiente.offsetLeft;
  var posicionX=serpiente.offsetTop;
    switch (tecla){
      case 37:
        serpiente.style.left=posicionY-100 + "px";
        if(posicionY<100){
          alert("Estas fuera del juego");
        }
        break;
      case 38:
        serpiente.style.top=posicionX-100 + "px";
        break;
      case 39:
        serpiente.style.left=posicionY+100 + "px";
        break;
      case 40:
          serpiente.style.top=posicionX+100+ "px";
          break;
      default:
    }
}
