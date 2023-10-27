function createHome() {
	const home = document.createElement('div');
	home.classList.add('home-content');
	home.setAttribute('id', 'home');

	home.textContent = 'The best bakery in the middle of nowhere';

	return home;
}

function loadHome() {
	const rightContents = document.getElementById('box-right-contents');

	rightContents.appendChild(createHome());
}

export default loadHome;

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
