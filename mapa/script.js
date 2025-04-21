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
      description: `La antigua escuela actualmente es <a href="https://www.google.com/maps/place/42%C2%B058'07.4%22N+1%C2%B032'45.2%22W/@42.968723,-1.5465447,19z" target="_blank"> una vivienda particular ${arrow}</a>.`,
      image: "./images/iragi.jpg",
    },
    eugi: {
      title: "Eugi",
      description: `<a href="https://www.google.com/maps/place/42%C2%B058'43.1%22N+1%C2%B030'38.7%22W/@42.97863,-1.5133249,17z" target="_blank">La antigua escuela mixta ${arrow}</a> se encontraba en lo que es ahora el Centro Cívico, en la segunda planta de un edificio. En la primera se encuentra el Centro Olondo/museo (antes casa del maestro) y en la planta baja está la ludoteca/sala polivalente. <a href="https://www.google.com/maps/place/42%C2%B058'44.5%22N+1%C2%B030'43.9%22W/@42.97902,-1.5147649,17z" target="_blank"> El edificio de las antiguas escuelas de chicas ${arrow}</a> se encuentra en desuso .`,
      image: "./images/eugi.png",
    },
    sarasibar: {
      title: "Sarasíbar",
      description: `Se encontraba en <a href="https://www.google.com/maps?q=Calle+Sta.+Elodia,+19,+31698+Saras%C3%ADbar,+Navarra" target="_blank">la Casa Abadía ${arrow}</a>, pegada a la iglesia; hoy casa particular.`,
      image: "./images/sarasibar.png",
    },
    irotz: {
      title: "Irotz",
      description: `Hoy vivienda particular <a href="https://www.google.com/maps/place/42%C2%B051'36.7%22N+1%C2%B034'27.8%22W" target="_blank">y escuela de yoga ${arrow}</a>.`,
      image: "./images/irotz.jpg",
    },
    ilurdotz: {
      title: "Ilurdotz",
      description: `Hasta los años 50, la escuela estuvo en Casa Palacio (se ubicaba en el solar donde hoy está la plaza y la sociedad, el edificio ya no existe), y después en la casa parroquial hasta que se cerró en los años 80 (hoy en día, <a href="https://www.google.com/maps/place/Calle+Ntra.+Sra.+del+Rosario,+10,+31699+Il%C3%BArdotz,+Navarra" target="_blank">esta pertenece a la Diócesis y está alquilada)${arrow}</a>.`,
    },
    errea: {
      title: "Errea",
      description: `El edificio ya no existe. Actualmente en el lugar, está situado <a href="https://www.google.es/maps/@42.8926577,-1.4907005,19z" target="_blank"> el monumento al quitanieves ${arrow}</a>. Cuando el edificio desapareció, las clases continuaron cada año en una casa diferente del pueblo.`,
    },
    urtasun: {
      title: "Urtasun",
      description: `Las escuelas estaban junto a la casa del cura, junto a la Iglesia. Ahora no existe ni la escuela ni la casa del cura, <a href="https://www.google.es/maps/place/42%C2%B057'50.0%22N+1%C2%B030'57.5%22W/@42.9639,-1.5185349,571m" target="_blank">sólo una rotonda ${arrow}</a>.`,
      image: "./images/urtasun.png",
    },
    larrasoana: {
      title: "Larrasoaña",
      description: `Actualmente la escuela se usa como <a href="https://www.google.com/maps?cid=8283116057037928730" target="_blank">sociedad, albergue, sala del concejo y vivienda ${arrow}</a>.`,
      image: "./images/larrasoana.png",
    },
    agorreta: {
      title: "Agorreta",
      description: `La antigua escuela estaba ubicada en la actual casa Siricu, <a href="https://www.google.com/maps/place/C.+San+Gil,+9,+31639+Agorreta,+Navarra" target="_blank">actualmente es una vivienda particular ${arrow}.</a>. Los habitantes de Agorreta comentan, que han escuchado a sus antepasados que anteriormente, hubo otra escuela cerca del cementerio. Hoy en día esta casa existe <a href="https://maps.app.goo.gl/8odbob47HvcME8rbA" target="_blank">y es una vivienda particular ${arrow}.</a>`,
    },
    urdaniz: {
      title: "Urdániz",
      description: `La antigua escuela es actualmente <a href="https://www.google.com/maps/place/Calle+San+Miguel,+19,+31698+Urd%C3%A1niz,+Navarra" target="_blank">sociedad del pueblo ${arrow}</a>.`,
      image: "./images/urdaniz.jpg",
    },
    leranotz: {
      title: "Leranotz",
      description: `La antigua escuela actualmente es <a href="https://www.google.com/maps/place/C.+San+Adri%C3%A1n,+21,+31639+Leranotz,+Navarra" target="_blank">una vivienda particular ${arrow}</a>.`,
      image: "./images/leranotz.jpg",
    },
    zubiri: {
      title: "Zubiri",
      description: `En Zubiri había cuatro edificios de escuelas:
      <br>Zubiri I: actual Casa Apolonia. Actualmente almacén del Concejo. Hay un proyecto de Casa de Cultura en marcha.
      <br>Zubiri II: ahora almacén del Economato.
      <br>Zubiri III: actualmente <a href="https://www.google.es/maps/place/42%C2%B055'46.1%22N+1%C2%B030'14.7%22W" target="_blank">obrador de Embutidos Arrieta ${arrow}</a>.
      <br>Zubiri IV: actualmente <a href="https://www.google.com/maps?cid=13351277653292910928" target="_blank">albergue municipal de peregrinos  ${arrow}</a>.`,
      image: "./images/zubiri.jpg",
    },
    imbuluzketa: {
      title: "Imbuluzketa",
      description: `La antigua escuela estaba ubicada en la casa parroquial, junto a la Iglesia. El edificio <a href="https://www.google.com/maps/place/Iglesia+Parroquial+de+San+Mart%C3%ADn/@42.9245441,-1.5401978,15z" target="_blank">todavía existe ${arrow}</a>.`,
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
