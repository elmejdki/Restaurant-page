import './about.scss';
import kitchen from "./images/zack's kitchen.jpg";

function render() {
  const container = document.getElementById('content');
  const pageTitle = document.createElement('div');
  const title = document.createElement('h1');
  const image = new Image();
  const text = document.createElement('div');
  const aboutText = document.createElement('div');
  const aboutQuote = document.createElement('div');
  const textContainer = document.createElement('div');

  container.className = 'about-page';
  pageTitle.className = 'page-title';
  image.className = 'restaurant-image';
  text.className = 'text';
  aboutText.className = 'about-text';
  aboutQuote.className = 'about-quote';
  textContainer.className = "text-container";

  container.innerHTML = '';
  image.src = kitchen;
  image.alt = 'Restaurant Image';
  title.innerHTML = '<span>All</span> about us';
  aboutText.textContent = `The team of Bouras Viandes consists 
    of professionl chefs who are constantly confirming and 
    imporving their skills. Our chefs always put their soul 
    into creating culinary masterpieces for you, our favorite 
    guests!`;

  aboutQuote.textContent = `We are sure that only the real fans of 
    their business can create the perfect product.`;

  pageTitle.appendChild(title);
  container.appendChild(pageTitle);

  textContainer.appendChild(image);

  text.appendChild(aboutText);
  text.appendChild(aboutQuote);
  textContainer.appendChild(text);

  container.appendChild(textContainer);

  const activeLink = document.querySelector('.active-link');
  activeLink.className = '';

  const aboutBtn = document.getElementById('about');
  aboutBtn.className = 'active-link';
}

export default render;