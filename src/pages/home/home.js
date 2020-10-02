import './home.scss';

function render() {
  const container = document.getElementById('content');
  const mainSection = document.createElement('div');
  const smallTitle = document.createElement('h2');
  const mainTitle = document.createElement('h1');
  const mainBtn = document.createElement('button');
  const socialMedia = document.createElement('div');
  const bar = document.createElement('div');
  const icons = document.createElement('div');
  const instagram = document.createElement('span');
  const facebook = document.createElement('span');
  const twitter = document.createElement('span');

  container.innerHTML = '';
  container.className = 'main-page';
  mainSection.className = 'main-section';
  mainBtn.id = 'menu-btn';
  socialMedia.className = 'social-media';
  bar.className = 'horizontal-bar';
  icons.className = 'social-icons';
  instagram.className = 'instagram';
  facebook.className = 'facebook';
  twitter.className = 'twitter';

  smallTitle.textContent = 'steak';
  mainTitle.textContent = 'restaurant';
  mainBtn.textContent = 'MENU';

  mainSection.appendChild(smallTitle);
  mainSection.appendChild(mainTitle);
  mainSection.appendChild(mainBtn);
  container.appendChild(mainSection);

  socialMedia.appendChild(bar);
  icons.appendChild(instagram);
  icons.appendChild(facebook);
  icons.appendChild(twitter);
  socialMedia.appendChild(icons);
  container.appendChild(socialMedia);

  const activeLink = document.querySelector('.active-link');
  activeLink.className = '';

  const homeBtn = document.getElementById('home');
  homeBtn.className = 'active-link';
}

export default render;
