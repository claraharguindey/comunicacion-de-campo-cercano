const loadImages = (containerId, path, count) => {
  const container = document.getElementById(containerId);
  for (let i = 1; i <= count; i++) {
    let img = document.createElement("img");
    img.src = `${path}${i}.jpg`;
    img.alt = `Imagen ${i}`;
    container.appendChild(img);
  }
}

const setupInfiniteScroll = (containerId, path, totalImages) => {
  const container = document.getElementById(containerId);
  let index = totalImages + 1;

  container.addEventListener("scroll",  () => {
    if (
      container.scrollTop + container.clientHeight >=
      container.scrollHeight - 50
    ) {
      for (let i = 0; i < 5; i++) {
        let img = document.createElement("img");
        img.src = `${path}${index}.jpg`;
        img.alt = `Imagen ${index}`;
        container.appendChild(img);

        if (index >= totalImages) {
          index = 1;
        } else {
          index++;
        }
      }

      let images = container.querySelectorAll("img");
      if (images.length > 22) {
        container.removeChild(images[0]);
      }
    }
  });
}

loadImages("scroll1", "./img/escritura/original/poemas", 22);
loadImages("scroll2", "./img/escritura/poemas", 17);

setupInfiniteScroll("scroll1", "./img/escritura/original/poemas", 22);
setupInfiniteScroll("scroll2", "./img/escritura/poemas", 17);
