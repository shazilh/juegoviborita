document.addEventListener("keydown",moverSerpiente);

var contenedor=document.getElementById('contenedor');
var serpiente=document.getElementById('cabezaSerpiente');
var boton=document.getElementById("reiniciar");
boton.addEventListener("click",reiniciar);

//boton.addEventListener("click",reiniciar);
var posicionX=0;
var posicionY=0;
var movimiento=79;
var inicializar=0;
function moverSerpiente(evento){
  //var posicionY= serpiente.offsetLeft;
  //var posicionX=serpiente.offsetTop;
  switch (evento.keyCode){
      case 38://mover izquierda
        posicionY=posicionY-movimiento;
        if(posicionY<0){
          perdiste();
          dejardeMover()

        }else{
          serpiente.style.marginTop=posicionY.toString() + "px";
        }
      break;

      case 40://mover derecha
        posicionY=posicionY+movimiento;
        if(posicionY>395){
            perdiste();
            dejardeMover()
        } else{
          serpiente.style.marginTop = posicionY.toString() + "px";
        }
      break;
      case 37://mover arriba
        posicionX=posicionX-movimiento;
          if(posicionX<0){
              perdiste();
              dejardeMover()
          }else{
            serpiente.style.marginLeft = posicionX.toString() + "px";
          }
      break;
      case 39://mover abajo
          posicionX=posicionX+movimiento;
          if(posicionX>395){
            perdiste();
            dejardeMover()
          } else{
            serpiente.style.marginLeft= posicionX.toString() + "px";
          }
      break;
      default:
        console.log("otra tecla");
      break;
    }
}

function perdiste(){
  alert("Estas fuera del juego");
}
function dejardeMover(){
  document.removeEventListener("keydown", moverSerpiente);
}
function reiniciar(){
  serpiente.style.marginLeft = (inicializar +"px").toString();
  serpiente.style.marginTop = (inicializar + "px").toString();

  document.addEventListener("keydown", moverSerpiente)
}
