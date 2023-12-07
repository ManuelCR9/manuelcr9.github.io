// Obtener modal
var modal = document.getElementById('orderModal');

// Obtener span para cerrar 
var span = document.getElementsByClassName("close")[0];

// Cuando se le da clic al botón Comprar, ejecuta esta función
function showModal(ramo) {
  modal.style.display = "block";
}

// Cuando se le da clic al span (X), cierra el modal
span.onclick = function () {
  modal.style.display = "none";
}
