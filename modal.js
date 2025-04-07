const params = new URLSearchParams(window.location.search);
const acceso = params.get("acceso");

const contenidos = {
  zubiri: {
    description:
      "<p>Has accedido desde Zubiri. Puedes los resultados de tu sesión, <a style='text-decoration:underline;' href='./zubiri' rel='noopener noreferrer'>aquí</a>.<p>",
  },
  larrasoana: {
    description:
      "Has accedido desde Larrasoaña. Puedes los resultados de tu sesión, <a style='text-decoration:underline;' href='./larrasoana' rel='noopener noreferrer'>aquí</a>.<p>",
  },
  eugi: {
    description:
      "Has accedido desde Eugi. Puedes los resultados de tu sesión, <a style='text-decoration:underline;' href='./eugui' rel='noopener noreferrer'>aquí</a>.<p>",
  },
  urdaniz: {
    description:
      "Has accedido desde Urdaniz. Puedes los resultados de tu sesión, <a style='text-decoration:underline;' href='./urdaniz' rel='noopener noreferrer'>aquí</a>.<p>",
  },
};

if (contenidos[acceso]) {
  document.getElementById("description").innerHTML =
    contenidos[acceso].description;
}

const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");

function openModal(src) {
  modalImg.src = src;
  modal.classList.add("show");
}

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    modalImg.src = "";
  }
});
