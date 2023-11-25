function createHome() {
	const home = document.createElement('div');
	home.classList.add('home-content');
	home.setAttribute('id', 'home');

	home.appendChild(pCreate('Welcome to Pâtisserie Générique!'));
	home.appendChild(
		pCreate('We have a vast selection of pastries and other delicious products')
	);

	const reviewDivParent = document.createElement('div');
	reviewDivParent.classList.add('review-box');
	home.appendChild(reviewDivParent);

	const reviewDiv = pCreate('The best pastry shop in the middle of nowhere');
	reviewDiv.classList.add('review');
	reviewDivParent.appendChild(reviewDiv);

	const reviewerDiv = pCreate('- Review Guy');
	reviewerDiv.classList.add('review');
	reviewDivParent.appendChild(reviewerDiv);

	return home;
}

function pCreate(text) {
	const pDiv = document.createElement('p');
	pDiv.textContent = text;
	return pDiv;
}

function loadHome() {
	const rightContents = document.getElementById('box-right-contents');

	rightContents.appendChild(createHome());
}

export default loadHome;
