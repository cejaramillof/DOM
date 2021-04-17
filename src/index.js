/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)');

const baseUrl = 'https://platzi-avo.vercel.app';

const appNode = document.querySelector('#app')

// Web Api 1. Connect to server, 2. Process response and parse to JSON, 3. JSON -> DATA -> Render
window
  .fetch(`${baseUrl}/api/avo`)
  .then((response) => response.json())
  .then(({data}) => {
    const items = [];
    data.forEach(item => {
      const img = document.createElement('img');
      img.src = `${baseUrl}${item.image}`;
      // document.body.appendChild(imagen);
      const title = document.createElement('h2');
      title.textContent = item.name;
      const price = document.createElement('span');
      price.textContent = item.price;

      const container = document.createElement('div');
      container.append(img, title, price) // appendChild each item

      // document.body.appendChild(container);
      items.push(container);
    })
    // document.body.append(...items);
    appNode.append(...items);
  });
