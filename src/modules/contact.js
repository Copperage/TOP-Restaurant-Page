function createContact() {
	const contact = document.createElement('div');
	contact.classList.add('contact-content');
	contact.setAttribute('id', 'contact');

	const phoneNum = pCreate('123 456 679');
	phoneNum.classList.add('phone-num');
	contact.appendChild(phoneNum);

	const address = pCreate('54 Anonymous Lane, London, UK');
	address.classList.add('address');
	contact.appendChild(address);

	const email = document.createElement('a');
	email.href = 'generic@genericexample.co.uk';
	email.textContent = 'Contact us via email here';
	email.classList.add('email');
	contact.appendChild(email);

	return contact;
}

function pCreate(text) {
	const pDiv = document.createElement('p');
	pDiv.textContent = text;
	return pDiv;
}

function loadContact() {
	const rightContents = document.getElementById('box-right-contents');

	rightContents.appendChild(createContact());
}

export default loadContact;
