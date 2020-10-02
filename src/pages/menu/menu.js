import './menu.scss';
import grilledMeat from './images/plates/grilled meat with rice.jpg';
import grilledSteak from './images/plates/grilled steak with vegtables.jpg';
import chickenFries from './images/plates/chicken fries with grilled carots.jpg';
import grilledFish from './images/plates/grilled fish with cooked vegetables.jpg';
import lasagne from './images/plates/lasagne bologainse.jpg';
import steak from './images/plates/steak with meat balls and fries.jpg';
import steamedRice from './images/plates/steamed rice with sauce and grilled meat on top.jpg';
import sushi from './images/plates/sushi.jpg';

const Data = [
  {
    title: 'Grilled Steak With Vegtables',
    img: grilledSteak,
    g: '250',
    cal: '323',
    price: '$29',
  },
  {
    title: 'Grilled Meat With Rice',
    img: grilledMeat,
    g: '225',
    cal: '250',
    price: '$32',
  },
  {
    title: 'chicken fries with grilled carots',
    img: chickenFries,
    g: '120',
    cal: '100',
    price: '$25',
  },
  {
    title: 'sushi',
    img: sushi,
    g: '100',
    cal: '120',
    price: '$23',
  },
  {
    title: 'grilled fish with cooked vegetables',
    img: grilledFish,
    g: '300',
    cal: '430',
    price: '$45',
  },
  {
    title: 'lasagne bologainse',
    img: lasagne,
    g: '250',
    cal: '320',
    price: '$12',
  },
  {
    title: 'steak with meat balls and fries',
    img: steak,
    g: '200',
    cal: '310',
    price: '$40',
  },
  {
    title: 'teamed rice with sauce and grilled meat on top',
    img: steamedRice,
    g: '120',
    cal: '90',
    price: '$20',
  },
];

function render() {
  const container = document.getElementById('content');
  const pageTitle = document.createElement('div');
  const title = document.createElement('h1');
  const filterButtons = document.createElement('div');
  const all = document.createElement('button');
  const newF = document.createElement('button');
  const popular = document.createElement('button');
  const hot = document.createElement('button');
  const showMore = document.createElement('button');

  const menuContainer = document.createElement('div');

  let plateConatiner;
  let img;
  let info;
  let infoTitle;
  let gCal;
  let price;

  Data.forEach((plate) => {
    plateConatiner = document.createElement('div');
    img = new Image();
    info = document.createElement('div');
    infoTitle = document.createElement('div');
    gCal = document.createElement('div');
    price = document.createElement('div');

    plateConatiner.className = 'plate';
    img.className = 'image';
    info.className = 'info';
    infoTitle.className = 'title';
    gCal.className = 'g-cal';
    price.className = 'price';

    img.src = plate.img;
    img.alt = plate.title;
    infoTitle.textContent = plate.title;
    gCal.innerHTML = `<i>${plate.g}g</i> <i>${plate.cal}cal</i>`;
    price.textContent = plate.price;

    info.appendChild(infoTitle);
    info.appendChild(gCal);
    info.appendChild(price);
    plateConatiner.appendChild(img);
    plateConatiner.appendChild(info);
    menuContainer.appendChild(plateConatiner);
  });

  container.className = 'menu-page';
  pageTitle.className = 'page-title';
  filterButtons.className = 'filter-buttons';
  all.className = 'selected';
  menuContainer.className = 'menu-container';
  showMore.className = 'show-more';

  container.innerHTML = '';
  title.innerHTML = '<span>Soo Tasty</span> Menu';
  all.textContent = 'All';
  newF.textContent = 'New';
  popular.textContent = 'Popular';
  hot.textContent = 'Hot';
  showMore.textContent = 'Show More';

  pageTitle.appendChild(title);
  filterButtons.appendChild(all);
  filterButtons.appendChild(newF);
  filterButtons.appendChild(popular);
  filterButtons.appendChild(hot);
  pageTitle.appendChild(filterButtons);

  container.appendChild(pageTitle);

  container.appendChild(menuContainer);

  container.appendChild(showMore);

  const activeLink = document.querySelector('.active-link');
  activeLink.className = '';

  const menuBtn = document.getElementById('menu');
  menuBtn.className = 'active-link';
}

export default render;