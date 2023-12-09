import './contact.scss';
import locationImg from "./images/location of zack's chicken.png";

const contactInfos = [
  {
    title: 'Our address',
    data: [
      '4 Av. de Condé, 59300 Valenciennes, France',
    ],
  },
  {
    title: 'Work Schedule',
    data: [
      'Mon-Fri: 09:00-19:00',
      'Sat-Sun: 09:00-19:00',
    ],
  },
  {
    title: 'Our Contacts',
    data: [
      '+33 32 73 09 176',
    ],
  },
];

function render() {
  const container = document.getElementById('content');
  const pageTitle = document.createElement('div');
  const title = document.createElement('h1');
  const contactContainer = document.createElement('div');
  const contactInfo = document.createElement('div');
  const map = document.createElement('div');
  const image = new Image();

  let card;
  let cardTitle;
  let cardData;
  let data;

  contactInfos.forEach(info => {
    card = document.createElement('div');
    cardTitle = document.createElement('div');
    cardData = document.createElement('div');

    card.className = 'card';
    cardTitle.className = 'title';
    cardData.className = 'data';

    cardTitle.textContent = info.title;

    if (info.data.length > 1) {
      info.data.forEach(d => {
        data = document.createElement('span');

        data.textContent = d;

        cardData.appendChild(data);
      });
    } else {
      /* eslint-disable array-bracket-spacing */
      /* eslint-disable comma-dangle */
      const [d, ] = info.data;
      /* eslint-enable array-bracket-spacing */
      /* eslint-enable comma-dangle */
      cardData.textContent = d;
    }

    card.appendChild(cardTitle);
    card.appendChild(cardData);
    contactInfo.appendChild(card);
  });

  container.className = 'contact-page';
  map.className = 'map';
  image.src = locationImg;
  pageTitle.className = 'page-title';
  contactContainer.className = 'container';
  contactInfo.className = 'contact-info';

  container.innerHTML = '';
  title.innerHTML = '<span>Our</span> Contacts';

  pageTitle.appendChild(title);
  container.appendChild(pageTitle);

  map.appendChild(image);
  contactContainer.appendChild(contactInfo);
  contactContainer.appendChild(map);
  container.appendChild(contactContainer);

  const activeLink = document.querySelector('.active-link');
  activeLink.className = '';

  const contactBtn = document.getElementById('contact');
  contactBtn.className = 'active-link';
}

export default render;