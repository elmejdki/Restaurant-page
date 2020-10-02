import './main.scss';
import renderHome from './pages/home/home';
import renderMenu from './pages/menu/menu';
import renderAbout from './pages/about/about';
import renderContact from './pages/contact/contact';

const { body } = document;

const header = document.createElement('header');
const nav = document.createElement('nav');
const logo = document.createElement('a');
const logoContainer = document.createElement('h2');
const links = document.createElement('ul');
const menu = document.createElement('li');
const menuLink = document.createElement('a');
const about = document.createElement('li');
const aboutLink = document.createElement('a');
const contact = document.createElement('li');
const contactLink = document.createElement('a');

logo.classList.add('logo');
logo.classList.add('active-link');
logo.id = 'home';
menuLink.id = 'menu';
aboutLink.id = 'about';
contactLink.id = 'contact';

logoContainer.textContent = 'Zack\'s Kitchen';
menuLink.textContent = 'Menu';
aboutLink.textContent = 'About Us';
contactLink.textContent = 'Contact Us';

logo.appendChild(logoContainer);
nav.appendChild(logo);
menu.appendChild(menuLink);
about.appendChild(aboutLink);
contact.appendChild(contactLink);
links.appendChild(menu);
links.appendChild(about);
links.appendChild(contact);
nav.appendChild(links);
header.appendChild(nav);
body.appendChild(header);

const main = document.createElement('main');

main.id = 'content';

body.appendChild(main);

renderHome();

logo.addEventListener('click', renderHome);
menuLink.addEventListener('click', renderMenu);
aboutLink.addEventListener('click', renderAbout);
contactLink.addEventListener('click', renderContact);
