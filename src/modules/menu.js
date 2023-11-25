function createMenu() {
	const menu = document.createElement('div');
	menu.classList.add('menu-content');
	menu.setAttribute('id', 'menu');

	menu.appendChild(cardCreate('lorem', 'ingredients here'));
	menu.appendChild(cardCreate('lorem', 'ingredients here'));
	menu.appendChild(cardCreate('lorem', 'ingredients here'));
	menu.appendChild(cardCreate('lorem', 'ingredients here'));
	menu.appendChild(cardCreate('lorem', 'ingredients here'));
	menu.appendChild(cardCreate('lorem', 'ingredients here'));
	menu.appendChild(cardCreate('lorem', 'ingredients here'));

	return menu;
}

function cardCreate(name, description) {
	const card = document.createElement('div');
	card.classList.add('card');

	const cardName = document.createElement('h2');
	cardName.textContent = name;

	const cardDesc = document.createElement('p');
	cardDesc.textContent = description;

	card.appendChild(cardName);
	card.appendChild(cardDesc);

	return card;
}

function loadMenu() {
	const rightContents = document.getElementById('box-right-contents');

	rightContents.appendChild(createMenu());
}

export default loadMenu;

/*
<div class="box right">
    <div id="box-right-contents">
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
*/
