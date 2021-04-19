const maximum = 122;
const minimum = 1;

const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

export const createImageNodes = () => {
  const container = document.createElement('picture');
  container.className = "p-4";

  const image = document.createElement('img');
  image.className = "mx-auto rounded-md bg-gray-300";
  image.width = 320;

  image.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";

  // dataset to comunicate info between html and js
  image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.appendChild(image);
  return [container, image];
}