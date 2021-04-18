/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)');

const baseUrl = 'https://platzi-avo.vercel.app';

const appNode = document.querySelector('#app')

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
