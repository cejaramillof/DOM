const isIntersecting = (entry) => {
  return entry.isIntersecting
}

const loadImage = (entry) => {
  const container = entry.target;
  // debugger;
  // const image = container.querySelector('img');
  const image = container.firstChild;
  image.src = image.dataset.src;

  observer.unobserve(container);
}

const observer = new IntersectionObserver((allElements) => {
  allElements
    .filter(isIntersecting)
    .forEach(loadImage);

})

export const registerImage = (image) => {
  observer.observe(image);
}