const openModal = (areaName, event) => {
  const lugares = {
    iragi: {
      title: "Iragi",
      image: "./images/iragi.jpg",
    },
    eugi: {
      title: "Eugi",
      image: "./images/eugi.png",
    },
    sarasibar: {
      title: "Sarasíbar",
      image: "./images/sarasibar.png",
    },
    irotz: {
      title: "Irotz",
      image: "./images/irotz.jpg",
    },
    ilurdotz: {
      title: "Ilurdotz",
      image: "./images/ilurdotz.jpg",
    },
    errea: {
      title: "Errea",
      image: "./images/errea.jpg",
    },
    urtasun: {
      title: "Urtasun",
      image: "./images/urtasun.png",
    },
    larrasoana: {
      title: "Larrasoaña",
      image: "./images/larrasoana.png",
    },
    angorreta: {
      title: "Angorreta",
      image: "./images/angorreta.jpg",
    },
    urdaniz: {
      title: "Urdániz",
      image: "./images/urdaniz.jpg",
    },
    leranotz: {
      title: "Leranotz",
      image: "./images/leranotz.jpg",
    },
    zubiri: {
      title: "Zuribi",
      image: "./images/zubiri.jpg",
    },
  };

  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalImage = document.getElementById("modalImage");
  modalTitle.textContent = lugares[areaName].title;
  modalImage.src = lugares[areaName].image;

  if (window.innerWidth >= 768) {
    let cursorX = event.clientX;
    let cursorY = event.clientY;

    let modalWidth = modal.offsetWidth;
    let modalHeight = modal.offsetHeight;

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let modalLeft = cursorX + 10;
    let modalTop = cursorY + 10;

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
};

const closeModal = () => {
  document.getElementById("modal").style.display = "none";
};

window.onclick = (event) => {
  if (event.target == document.getElementById("modal")) {
    closeModal();
  }
};
