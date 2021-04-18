import { registerImage } from './lazy';

console.log('Happy hacking :)');

const baseUrl = 'https://platzi-avo.vercel.app';
const appNode = document.querySelector('#app')

// Event Delegation
appNode.addEventListener('click', (event) => {
  if (event.target.nodeName === 'H2') window.alert(`Hola: `);
})

// Intl = 1. Format Dates, Format Currencies
const formatPrice = (price) => {
  const newPrice = window.Intl.NumberFormat('en-EN', {
      style: 'currency', currency: 'USD'
    }).format(price);
  return newPrice;
}

// Web Api 1. Connect to server, 2. Process response and parse to JSON, 3. JSON -> DATA -> Render
window
  .fetch(`${baseUrl}/api/avo`)
  .then((response) => response.json())
  .then(({data}) => {
    const items = [];
    data.forEach(item => {
      const img = document.createElement('img');
      img.className = 'h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6';
      img.src = `${baseUrl}${item.image}`;
      // document.body.appendChild(imagen);

      const title = document.createElement('h2');
      // title.style = 'font-size: 2rem';
      // title.style.fontSize = '2rem';
      title.className = 'text-lg';
      title.textContent = item.name;
      // title.addEventListener('click', () => window.alert('hola'))

      const price = document.createElement('span');
      price.className = 'text-gray-600';
      price.textContent = formatPrice(item.price);

      const priceAndTitle = document.createElement('div');
      priceAndTitle.className = 'text-enter md:text-left'
      priceAndTitle.appendChild(title)
      priceAndTitle.appendChild(price)

      const container = document.createElement('div');
      container.className = 'md:flex bg-white rounded-lg p-6 hover:bg-gray-300'
      container.append(img, priceAndTitle) // appendChild each item

      // document.body.appendChild(container);
      items.push(container);
    })
    // document.body.append(...items);
    appNode.className = 'mt-10 grid grid-cols-2 gap-2';
    appNode.append(...items);
  });




// Lazy loading
const mountNode = document.getElementById('images');

const maximum = 122;
const minimum = 1;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () => {
  const container = document.createElement('picture');
  container.className = "p-4";

  const image = document.createElement('img');
  image.className = "mx-auto";
  image.width = "320";

  // dataset to comunicate info between html and js
  image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.appendChild(image);
  return container;
}

const addImage = () => {
  const newImage = createImageNode();
  mountNode.appendChild(newImage);
  registerImage(newImage);
}

const addImageButton = document.getElementById('add-image');
addImageButton.addEventListener('click', addImage);

