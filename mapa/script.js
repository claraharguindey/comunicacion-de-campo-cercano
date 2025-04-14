const openModal = (areaName, event) => {
  const arrow = ` <svg xmlns="htta://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" height="16" width="16"
  part="svg" draggable="true">
  <path part="base-color" fill="currentColor"
      d="M 6.70 23.72 L 8.28 25.30 L 20.50 13.08 L 22.48 10.93 L 22.24 14.02 L 22.19 20.14 L 24.36 20.14 L 24.52 7.49 L 11.86 7.64 L 11.88 9.83 L 18.01 9.75 L 21.10 9.53 L 18.92 11.50 L 6.70 23.72 Z">
  </path>
</svg>`;
  const lugares = {
    iragi: {
      title: "Iragi",
      description: `Sin información <a href="https://www.google.com/maps/place/42%C2%B058\`05.2%22N+1%C2%B032\`45.7%22W/@42.96812,-1.5486149,17z" target="_blank">${arrow}</a>`,
      image: "./images/iragi.jpg",
    },
    eugi: {
      title: "Eugi",
      description: `La antigua escuela mixta se encontraba en lo que es ahora el <a href="https://www.google.com/maps/place/42%C2%B058\`43.1%22N+1%C2%B030\`38.7%22W" target="_blank">Centro Cívico ${arrow}</a>. El edificio de las antiguas escuelas de chicas se encuentra en desuso.`,
      image: "./images/eugi.png",
    },
    sarasibar: {
      title: "Sarasíbar",
      description: `Se encontraba en la Casa Abadía <a href="https://www.google.com/maps?q=Calle+Sta.+Elodia,+19,+31698+Saras%C3%ADbar,+Navarra" target="_blank">${arrow}</a>, pegada a la iglesia; hoy casa particular.`,
      image: "./images/sarasibar.png",
    },
    irotz: {
      title: "Irotz",
      description: `Hoy vivienda particular y escuela de yoga <a href="https://www.google.com/maps/place/42%C2%B051\`36.7%22N+1%C2%B034\`27.8%22W" target="_blank">${arrow}</a>.`,
      image: "./images/irotz.jpg",
    },
    ilurdotz: {
      title: "Ilurdotz",
      description: `Estuvo en Casa Palacio y luego en la casa parroquial hasta su cierre en los 80 <a href="https://www.google.com/maps/place/Calle+Ntra.+Sra.+del+Rosario,+10,+31699+Il%C3%BArdotz,+Navarra" target="_blank">${arrow}</a>.`,
    },
    errea: {
      title: "Errea",
      description: `Era la antigua casa parroquial. Después se daban clases en casas particulares <a href="https://www.google.com/maps?q=31698+Errea,+Navarra" target="_blank">${arrow}</a>.`,
    },
    urtasun: {
      title: "Urtasun",
      description: `Las escuelas estaban junto a la casa del cura, hoy desaparecidas. Ahora hay una rotonda <a href="https://www.google.es/maps/place/42%C2%B057\`50.0%22N+1%C2%B030\`57.5%22W" target="_blank">${arrow}</a>.`,
      image: "./images/urtasun.png",
    },
    larrasoana: {
      title: "Larrasoaña",
      description: `Actualmente la escuela se usa como sociedad, albergue, sala del concejo y vivienda <a href="https://www.google.com/maps?cid=8283116057037928730" target="_blank">${arrow}</a>.`,
      image: "./images/larrasoana.png",
    },
    angorreta: {
      title: "Angorreta",
      description: `Las antiguas escuelas estaban en la actual Casa Siricu <a href="https://www.google.com/maps/place/C.+San+Gil,+9,+31639+Agorreta,+Navarra" target="_blank">${arrow}</a>. Hoy es vivienda particular.`,
    },
    urdaniz: {
      title: "Urdániz",
      description: `La antigua escuela es actualmente sociedad del pueblo <a href="https://www.google.com/maps/place/Calle+San+Miguel,+19,+31698+Urd%C3%A1niz,+Navarra" target="_blank">${arrow}</a>.`,
      image: "./images/urdaniz.jpg",
    },
    leranotz: {
      title: "Leranotz",
      description: `El edificio de escuelas se usa actualmente como espacio de usos múltiples <a href="https://www.google.com/maps?q=C.+San+Adri%C3%A1n,+21,+31639+Leranotz,+Navarra" target="_blank">${arrow}</a>.`,
      image: "./images/leranotz.jpg",
    },
    zubiri: {
      title: "Zuribi",
      description: `En Zubiri había cuatro edificios de escuelas:
                        <br>Zubiri I <a href="https://www.google.es/maps/place/42%C2%B055'48.0%22N+1%C2%B030'09.9%22W" target="_blank">${arrow}</a>: actual Casa Apolonia.
                        <br>Zubiri II <a href="https://www.google.es/maps/place/42%C2%B056'04.1%22N+1%C2%B030'12.1%22W" target="_blank">${arrow}</a>: ahora almacén del Economato.
                        <br>Zubiri III: obrador de Embutidos Arrieta.
                        <br>Zubiri IV <a href="https://www.google.com/maps?cid=13351277653292910928" target="_blank">${arrow}</a>: Albergue municipal de peregrinos.`,
      image: "./images/zubiri.jpg",
    },
  };

  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");

  modalTitle.textContent = lugares[areaName].title;

  if (lugares[areaName].image) {
    modalImage.style.display = "flex";
    modalImage.src = lugares[areaName].image;
  } else {
    modalImage.style.display = "none";
  }

  modalDescription.innerHTML = lugares[areaName].description;

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
  modal.style.display = "none";
};
