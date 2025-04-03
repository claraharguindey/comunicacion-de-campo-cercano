function openModal(areaName, event) {
  var modal = document.getElementById("myModal");
  var modalTitle = document.getElementById("modalTitle");
  modalTitle.textContent = "Área: " + areaName;

  if (window.innerWidth >= 768) {
    var cursorX = event.clientX;
    var cursorY = event.clientY;

    var modalWidth = modal.offsetWidth;
    var modalHeight = modal.offsetHeight;

    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var modalLeft = cursorX + 10;
    var modalTop = cursorY + 10;

    if (modalLeft + modalWidth > windowWidth) {
      modalLeft = windowWidth - modalWidth - 10;
    }

    if (modalTop + modalHeight > windowHeight) {
      modalTop = windowHeight - modalHeight - 10;
    }

    modal.style.left = modalLeft + "px";
    modal.style.top = modalTop + "px";
  }

  modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Cerrar el modal si se hace clic fuera de la ventana del modal
window.onclick = function (event) {
  if (event.target == document.getElementById("myModal")) {
    closeModal();
  }
};
