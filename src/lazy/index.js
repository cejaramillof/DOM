let totalImages = 0;
let loadedImages = 0;

const isIntersecting = (entry) => entry.isIntersecting

const loadImage = (entry) => {
  // const container = entry.target;

  // debugger;
  // const image = container.querySelector('img');
  // const image = container.firstChild;

  // observer.unobserve(container);

  const image = entry.target;
  image.onload = () => {
    loadedImages += 1;
    logState();
  };
  image.src = image.dataset.src;

  observer.unobserve(image);
}

const observer = new IntersectionObserver((allElements) => {
  allElements
    .filter(isIntersecting)
    .forEach(loadImage);

})

export const registerImage = (image) => {
  observer.observe(image);
  totalImages += 1;
  logState();
}

function logState() {
  console.log(`⚪️ Total Imágenes: ${totalImages}`);
  console.log(`🟣 Imágenes cargadas: ${loadedImages}`);
  console.log("--------------------------------------");
}
