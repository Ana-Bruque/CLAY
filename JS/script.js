const navIcons = document.querySelectorAll('.js-nav-icon');

navIcons.forEach(function (icon) {
	icon.addEventListener('click', activateNav);
});

function activateNav(event) {
	const siteNav = document.querySelector('.sliding-menu');
	siteNav.classList.toggle('is-active');
}


fullpage('#hero-wrapper', {
	anchors:['page1', 'page2', 'page3' , 'page4']
});

myFullpage = fullpage('#hero-wrapper', {
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,
	scrollingSpeed: 800,
});
