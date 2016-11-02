function validarusuario(){
  
}

function eliminarmensaje(){
  if (confirm('¿Estas seguro de eliminar este mensaje?')){
    var mensaje = document.getElementById("mensaje1");
    mensaje.parentNode.removeChild(mensaje);
  }
}

function enviarmensaje(){
  var mensaje = document.getElementById("mensaje_enviar").value;
  if (mensaje === null || mensaje.length === 0) {
    alert("Mensaje vacío");
    return false;
  }
  else return true;
}

function mensajerecibido(remitente, texto, fecha){
  $("#pintamensaje").append(
    "<div id=mensaje1 class='container'>"+
    "<div class='row marge_exterior'>"+
      "<div class='col-md-12'>"+
          "<div class='col-md-6 bandeja_remitente'>"+
              "<p1>"+ remitente +"</p1>"+
          "</div>"+
          "<div class='col-md-6 bandeja_fecha'>"+
            "<p2>"+ fecha +"</p2>"+
          "</div>"+
        "<div class='col-md-12 bandeja_mensaje'>"+
          "<p1>"+ texto +"</p1>"+
        "</div>"+
        "<button id=boton type='button' class='btn btn-primary boton_eliminar' onclick='eliminarmensaje()''>Eliminar</button>"+
      "</div>"+
    "</div>"+
  "</div>"
);
}
