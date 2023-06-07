function mayoriaEdad(){
    const resultadoDiv2 = document.getElementById("resultado2");
    resultadoDiv2.append("SOLICITUD RECHAZADA, ERES MENOR DE EDAD");
    
    resultadoDiv2.append(document.createElement("br"));
}
function Respuesta(){
    var name = document.getElementById("nombreUsuario").value;
    var Email = document.getElementById("usuarioEmail").value;
    alert("Solicitud cursada con éxito, gracias por suscribirse " + name 
    + ", \nen breve estará recibiendo en su mail: " + Email + "\nnuestros boletines de noticias.");
}
function mostrarFechaHora(){
    var resultadoDiv = document.getElementById('date');     
    var fechaHora = new Date();       
    var horaTexto = fechaHora.toLocaleTimeString();
    var fechaTexto = fechaHora.toLocaleDateString();
    var fechaHoraTexto = fechaTexto + '  ' + horaTexto;
    resultadoDiv.textContent = fechaHoraTexto;
}
setInterval(mostrarFechaHora, 1000);