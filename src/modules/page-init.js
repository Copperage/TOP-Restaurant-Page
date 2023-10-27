import loadHome from './home';

function createLayout() {
	const leftPage = document.createElement('div');
	leftPage.classList.add('box');
	leftPage.classList.add('left');

	const rightPage = document.createElement('div');
	rightPage.classList.add('box');
	rightPage.classList.add('right');

	const rightContents = document.createElement('div');
	rightContents.setAttribute('id', 'box-right-contents');
	rightPage.appendChild(rightContents);

	const footer = document.createElement('footer');
	footer.innerHTML = `Created by <a href="https://github.com/Copperage/TOP-Restaurant-Page">Ethan</a> for
     <a href="https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page">The Odin Project</a>`;

	const content = document.getElementById('content');

	content.appendChild(leftPage);
	content.appendChild(rightPage);
	content.appendChild(footer);
}

function createHeader() {
	const titleDiv = document.createElement('div');
	titleDiv.classList.add('header');

	const titleText = document.createElement('h1');
	titleText.textContent = 'Boulangerie Générique';

	const leftPage = document.querySelector('.left');

	titleDiv.appendChild(titleText);
	leftPage.appendChild(titleDiv);
}

function createNavbar() {
	const nav = document.createElement('nav');
	const navBar = document.createElement('ul');
	navBar.classList.add('nav-bar');

	const home = document.createElement('button');
	home.classList.add('button-nav');
	home.textContent = 'Home';

	const menu = document.createElement('button');
	menu.classList.add('button-nav');
	menu.textContent = 'Menu';

	const contact = document.createElement('button');
	contact.classList.add('button-nav');
	contact.textContent = 'Contact';

	const leftPage = document.querySelector('.left');

	nav.appendChild(navBar);
	navBar.appendChild(home);
	navBar.appendChild(menu);
	navBar.appendChild(contact);
	leftPage.appendChild(nav);
}

function setActive(button) {
	const navButtons = document.querySelectorAll('.button-nav');

	navButtons.forEach((button) => {
		button.classList.remove('active');
	});

	button.classList.add('active');
}

function initWebsite() {
	const content = document.getElementById('content');

	createLayout();
	createHeader();
	createNavbar();

	setActive(document.querySelector('.button-nav'));

	loadHome();
}

export default initWebsite;
