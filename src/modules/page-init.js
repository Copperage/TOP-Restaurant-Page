function createNavbar() {
	const nav = document.createElement('nav');
	const navBar = document.createElement('ul');
	navBar.classList.add('nav-bar');

	const home = document.createElement('button');
	home.classList.add('button-nav');
	home.textContent = 'Home';
	home.addEventListener('click', () => {
		if (home.classList.contains('active')) return;
		setActive(home);
		loadHome;
	});

	const menu = document.createElement('button');
	menu.classList.add('button-nav');
	menu.textContent = 'Menu';
	menu.addEventListener('click', () => {
		if (menu.classList.contains('active')) return;
		setActive(menu);
		loadMenu;
	});

	const contact = document.createElement('button');
	contact.classList.add('button-nav');
	contact.textContent = 'Contact';
	contact.addEventListener('click', () => {
		if (contact.classList.contains('active')) return;
		setActive(contact);
		loadContact;
	});

	nav.appendChild(navBar);
	navBar.appendChild(home);
	navBar.appendChild(menu);
	navBar.appendChild(contact);

	return nav;
}

function createLayout() {
	const leftPage = document.createElement('div');
	leftPage.classList.add('box');
	leftPage.classList.add('left');
	const rightPage = document.createElement('div');
	rightPage.classList.add('box');
	rightPage.classList.add('right');
	const rightContents = document.createElement('div');
	rightContents = classList.add('box-right-contents');
	rightPage.appendChild(rightContents);
	const footer = document.createElement('footer');
	footer.innerHTML = `Created by <a href="https://github.com/Copperage/TOP-Restaurant-Page">Ethan</a> for
     <a href="https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page">The Odin Project</a>`;

	content.appendChild(leftPage);
	content.appendChild(rightPage);
	content.appendChild(footer);
}

function initWebsite() {
	const content = document.getElementById('content');

	content.appendChild(createLayout());
	content.appendChild(createHeader());
	content.appendChild(createNavbar());

	setActive(document.querySelector('.button-nav'));
}

export default initWebsite;
/*
<div class="box left">
    <div class="header">
        <h1 class="header-title">Restaurant</h1>
    </div>
    <nav>
        <ul class="nav-bar">
            <button class="button-nav">Home</button>
            <button class="button-nav active">Menu</button>
            <button class="button-nav">Contact</button>
        </ul>
    </nav>
</div>
<div class="box right">
    <div class="box-right-contents">
        <div id="home" class="content"></div>

        <div id="menu" class="content">
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
        </div>

        <div id="contact" class="content"></div>
    </div>
</div>
<footer>
    <p>
        Created by
        <a href="https://github.com/Copperage/TOP-Restaurant-Page">Ethan</a>
        for
        <a
            href="https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page"
            >The Odin Project</a
        >
    </p>
</footer>
*/
